<?php
/**
 * @link https://github.com/myzero1
 * @copyright Copyright (c) 2019- My zero one
 * @license https://github.com/myzero1/yii2-apibyconf/blob/master/LICENSE
 */

namespace example\processing\authenticator\io;

use Yii;
use yii\base\DynamicModel;
use yii\web\ServerErrorHttpException;
use myzero1\apibyconf\components\rest\Helper;
use myzero1\apibyconf\components\rest\ApiCodeMsg;
use myzero1\apibyconf\components\rest\ApiHelper;
use myzero1\apibyconf\components\rest\ApiIoProcessing;

/**
 * implement the UpdateProcessing
 *
 * For more details and usage information on CreateAction, see the [guide article](https://github.com/myzero1/yii2-apibyconf).
 *
 * @author Myzero1 <myzero1@sina.com>
 * @since 0.0
 */
class JoinIo implements ApiIoProcessing
{

    /**
     * @param  array $input from the request body
     * @return array
     */
    public static function inputValidate($input)
    {
        $inputFields = [
            'username',
            'password',
            'sort',
            'page',
            'page_size',
        ];

        // get
        $modelGet = new DynamicModel($inputFields);

        $modelGet->addRule($inputFields, 'trim');
        $modelGet->addRule($inputFields, 'safe');


        $modelGet->load($input['get'], '');

        if (!$modelGet->validate()) {
            return ApiHelper::getModelError($modelGet, ApiCodeMsg::INPUT_VALIDATION_FAILED);
        }

        // post
        $modelPost = new DynamicModel($inputFields);

        $modelPost->addRule($inputFields, 'trim');
        $modelPost->addRule($inputFields, 'safe');

        $modelPost->addRule(['username'], 'required');
        $modelPost->addRule(['username'], 'match', ['pattern' => '/^.\w{1,32}$/i', 'message' => '\'{attribute}\':invalid username']);
        $modelPost->addRule(['password'], 'required');
        $modelPost->addRule(['password'], 'match', ['pattern' => '/^.{1,32}$/i', 'message' => '\'{attribute}\':invalid password']);

        $modelPost->load($input['post'], '');

        if (!$modelPost->validate()) {
            return ApiHelper::getModelError($modelPost, ApiCodeMsg::INPUT_VALIDATION_FAILED);
        }

        $getAttributes = Helper::inputFilter($modelGet->attributes);
        $postAttributes = Helper::inputFilter($modelPost->attributes);
        $attributes = array_merge($postAttributes, $getAttributes);

        return array_merge($modelGet->attributes, $attributes);
    }

    /**
     * @return array
     */
    public static function egOutputData()
    {
        $egOutputData = 'a:1:{s:9:"dataTitle";s:9:"dataValue";}';

        return ApiHelper::filterEgOutputData($egOutputData);
    }
}
