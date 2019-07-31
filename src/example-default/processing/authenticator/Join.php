<?php
/**
 * @link https://github.com/myzero1
 * @copyright Copyright (c) 2019- My zero one
 * @license https://github.com/myzero1/yii2-apibyconf/blob/master/LICENSE
 */

namespace myzero1\apibyconf\example\processing\authenticator;

use Yii;
use yii\base\DynamicModel;
use yii\web\ServerErrorHttpException;
use myzero1\apibyconf\components\rest\Helper;
use myzero1\apibyconf\components\rest\ApiHelper;
use myzero1\apibyconf\components\rest\ApiCodeMsg;
use myzero1\apibyconf\components\rest\ApiActionProcessing;
use myzero1\apibyconf\example\processing\authenticator\io\JoinIo;
use myzero1\apibyconf\components\rest\ApiAuthenticator;

/**
 * implement the ActionProcessing
 *
 * For more details and usage information on CreateAction, see the [guide article](https://github.com/myzero1/yii2-apibyconf).
 *
 * @author Myzero1 <myzero1@sina.com>
 * @since 0.0
 */
class Join implements ApiActionProcessing
{
    /**
     * @param $params mixed
     * @return array date will return to create action.
     * @throws ServerErrorHttpException
     * @throws \yii\base\InvalidConfigException
     */
    public function processing($params = null)
    {
        // the path and query params will geted by queryParams,and the path params will rewrite the query params.
        $input['get'] = Yii::$app->request->queryParams;
        $input['post'] = Yii::$app->request->bodyParams;
        $validatedInput = $this->inputValidate($input);
        if (Helper::isReturning($validatedInput)) {
            return $validatedInput;
        } else {
            $in2dbData = $this->mappingInput2db($validatedInput);
            $completedData = $this->completeData($in2dbData);
            $handledData = $this->handling($completedData);

            if (Helper::isReturning($handledData)) {
                return $handledData;
            }

            $db2outData = $this->mappingDb2output($handledData);
            // $db2outData = JoinIo::egOutputData(); // for demo
            $result = $this->completeResult($db2outData);
            return $result;
        }
    }

    /**
     * @param  array $input from the request body
     * @return array
     */
    public function inputValidate($input)
    {
        $input = JoinIo::inputValidate($input); // for demo

        if (ApiHelper::isReturning($input)) {
            return $input;
        }

        // more Validate
        $inputFields = [
            'username',
        ];
        $moreValidate = new DynamicModel($inputFields);

        $moreValidate->addRule($inputFields, 'trim');
        $moreValidate->addRule($inputFields, 'safe');
        $moreValidate->addRule(
            ['username'],
            function ($attribute) use ($moreValidate) {
                $user  = ApiAuthenticator::findByUsername($moreValidate->$attribute);
                if ($user != null) {
                    $moreValidate->addError($attribute, $attribute . ' has been used');
                }
            },
            [
                'skipOnEmpty' => false,
            ]
        );

        $moreValidate->load($input, '');

        if (!$moreValidate->validate()) {
            return ApiHelper::getModelError($moreValidate, ApiCodeMsg::BAD_REQUEST);
        }
        return $input;
    }

    /**
     * @param  array $validatedInput validated data
     * @return array
     */
    public function mappingInput2db($validatedInput)
    {
        $inputFieldMap = [
            'demo_name' => 'name',
            'demo_description' => 'description',
        ];
        $in2dbData = ApiHelper::input2DbField($validatedInput, $inputFieldMap);

        return $in2dbData;
    }

    /**
     * @param  array $in2dbData mapped data form input
     * @return array
     */
    public function completeData($in2dbData)
    {
        $in2dbData = ApiHelper::inputFilter($in2dbData);

        $in2dbData['api_token'] = 'api_token';

        return $in2dbData;
    }

    /**
     * @param  array $completedData completed data
     * @return array
     * @throws ServerErrorHttpException
     */
    public function handling($completedData)
    {
        $model = new ApiAuthenticator();

        $model->load($completedData, '');

        // $model->generateAuthKey();
        $model->setPassword($completedData['password']);

        $trans = Yii::$app->db->beginTransaction();
        try {
            $flag = true;
            if (!($flag = $model->save())) {
                $trans->rollBack();
                return ApiHelper::getModelError($model, ApiCodeMsg::INTERNAL_SERVER);
            }

            if ($flag) {
                $trans->commit();
            } else {
                $trans->rollBack();
                throw new ServerErrorHttpException('Failed to save commit reason.');
            }

            return $model->attributes;
        } catch (Exception $e) {
            $trans->rollBack();
            throw new ServerErrorHttpException('Failed to save all models reason.');
        }
    }

    /**
     * @param  array $savedData saved data
     * @return array
     */
    public function mappingDb2output($handledData)
    {
        $outputFieldMap = [
            'name' => 'demo_name',
            'description' => 'demo_description',
        ];
        $db2outData = ApiHelper::db2OutputField($handledData, $outputFieldMap);

        $db2outData['created_at'] = ApiHelper::time2string($db2outData['created_at']);

        $output['username'] = $db2outData['username'];
        $output['created_at'] = $db2outData['created_at'];

        return $output;
    }

    /**
     * @param  array $db2outData completed data form database
     * @return array
     */
    public function completeResult($db2outData = [])
    {
        $result = [
            'code' => ApiCodeMsg::SUCCESS,
            'msg' => ApiCodeMsg::SUCCESS_MSG,
            'data' => is_null($db2outData) ? new \stdClass() : $db2outData,
        ];

        return $result;
    }

    /**
     * @return array
     */
    public function egOutputData()
    {
        return JoinIo::egOutputData(); // for demo
    }
}