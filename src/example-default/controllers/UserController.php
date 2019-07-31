<?php
/**
 * @link https://github.com/myzero1
 * @copyright Copyright (c) 2019- My zero one
 * @license https://github.com/myzero1/yii2-apibyconf/blob/master/LICENSE
 */
namespace myzero1\apibyconf\example\controllers;

use \myzero1\apibyconf\components\rest\ApiController;

/**
 * UserController implements the CRUDI actions for the module.
 */
class UserController extends ApiController
{
    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        $parentActions = parent::actions();

        $overwriteActions = [
                'create' => [
                'class' => $this->apiActionClass,
                'processingClass' => '\myzero1\apibyconf\example\processing\user\Create',
            ],
            'update' => [
                'class' => $this->apiActionClass,
                'processingClass' => '\myzero1\apibyconf\example\processing\user\Update',
            ],
            'view' => [
                'class' => $this->apiActionClass,
                'processingClass' => '\myzero1\apibyconf\example\processing\user\View',
            ],
            'delete' => [
                'class' => $this->apiActionClass,
                'processingClass' => '\myzero1\apibyconf\example\processing\user\Delete',
            ],
            'index' => [
                'class' => $this->apiActionClass,
                'processingClass' => '\myzero1\apibyconf\example\processing\user\Index',
            ],
            'export' => [
                'class' => $this->apiActionClass,
                'processingClass' => '\myzero1\apibyconf\example\processing\user\Export',
            ],
            'status' => [
                'class' => $this->apiActionClass,
                'processingClass' => '\myzero1\apibyconf\example\processing\user\Status',
            ],
        ];

        $actions = array_merge($parentActions, $overwriteActions);

        return $actions;
    }
}