<?php
$templateParams = $generator->getApiActionProcessingParams();

echo "<?php\n";
?>
/**
 * @link https://github.com/myzero1
 * @copyright Copyright (c) 2019- My zero one
 * @license https://github.com/myzero1/yii2-apibyconf/blob/master/LICENSE
 */

namespace <?= $templateParams['namespace'] ?>;

use Yii;
use yii\db\Query;
use yii\web\ServerErrorHttpException;
use myzero1\apibyconf\components\rest\Helper;
use myzero1\apibyconf\components\rest\ApiHelper;
use myzero1\apibyconf\components\rest\HandlingHelper;
use myzero1\apibyconf\components\rest\ApiCodeMsg;
use myzero1\apibyconf\components\rest\ApiActionProcessing;
use <?= $templateParams['ioClass'] ?> as Io;

/**
 * implement the ActionProcessing
 *
 * For more details and usage information on CreateAction, see the [guide article](https://github.com/myzero1/yii2-apibyconf).
 *
 * @author Myzero1 <myzero1@sina.com>
 * @since 0.0
 */
class <?= $templateParams['className'] ?> implements ApiActionProcessing
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
            
            $completedData = HandlingHelper::before($completedData, Io::class);
            $handledData = $this->handling($completedData);
            $handledData = HandlingHelper::after($handledData);

            if (Helper::isReturning($handledData)) {
                return $handledData;
            }

            $db2outData = $this->mappingDb2output($handledData);
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
        return Io::inputValidate($input); // for demo
    }

    /**
     * @param  array $validatedInput validated data
     * @return array
     */
    public function mappingInput2db($validatedInput)
    {
        $inputFieldMap = [
            'demo_name' => 'name735',
            'demo_description' => 'description735',
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
        // $in2dbData = ApiHelper::inputFilter($in2dbData); // You should comment it, when in search action.

        return $in2dbData;
    }

    /**
     * @param  array $completedData completed data
     * @return array
     * @throws ServerErrorHttpException
     */
    public function handling($completedData)
    {
        $result = [];

        $query = (new Query())
            ->from('user t')
            // ->groupBy(['t.id'])
            // ->join('INNER JOIN', 'info i', 'i.user_id = t.id')
            ->andFilterWhere([
                'and',
<?php foreach ($templateParams['inputsKeysWhere'] as $key => $value) { ?>
                <?=sprintf("['=', '%s', \$completedData['%s']],\n", $value, $value)?>
<?php } ?>
            ]);

        $outFieldNames = [
            't.id as id',
        ];

        $query->select(['1']);
        $result['total'] = intval($query->count());

        $pagination = ApiHelper::getPagination($completedData);
        $query->limit($pagination['page_size']);
        $offset = $pagination['page_size'] * ($pagination['page'] - 1);
        $query->offset($offset);
        $result['page'] = intval($pagination['page']);
        $result['page_size'] = intval($pagination['page_size']);

        // $sortStr = ApiHelper::getArrayVal($completedData, 'sort', '');
        // $sort = ApiHelper::getSort($sortStr, array_keys($outFieldNames), '+id');
        // $query->orderBy([$sort['sortFiled'] => $sort['sort']]);

        $query->select($outFieldNames);

        //  var_dump($query->createCommand()->getRawSql());exit;

        $items = $query->all();
        $result['items'] = $items;

        return $result;
    }

    /**
     * @param  array $savedData saved data
     * @return array
     */
    public function mappingDb2output($handledData)
    {
        $outputFieldMap = [
            'name735' => 'demo_name',
            'description735' => 'demo_description',
        ];

        $db2outData = $handledData;

        foreach ($db2outData['items'] as $k => $v) {
            $db2outData['items'][$k] = ApiHelper::db2OutputField($db2outData['items'][$k], $outputFieldMap);

            // $db2outData['items'][$k]['created_at'] = ApiHelper::time2string($db2outData['items'][$k]['created_at']);
            // $db2outData['items'][$k]['updated_at'] = ApiHelper::time2string($db2outData['items'][$k]['updated_at']);
        }

        return $db2outData;
    }

    /**
     * @param  array $db2outData completed data form database
     * @return array
     */
    public function completeResult($db2outData = [])
    {
        $result = [
            'code' => ApiCodeMsg::OK,
            'msg' => ApiCodeMsg::OK_MSG,
            'data' => is_null($db2outData) ? new \stdClass() : $db2outData,
        ];

        return $result;
    }

    /**
     * @return array
     */
    public function egOutputData()
    {
        return Io::egOutputData(); // for demo
    }
}
