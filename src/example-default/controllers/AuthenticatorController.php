<?php
/**
 * @link https://github.com/myzero1
 * @copyright Copyright (c) 2019- My zero one
 * @license https://github.com/myzero1/yii2-apibyconf/blob/master/LICENSE
 */
namespace myzero1\apibyconf\example\controllers;

use \myzero1\apibyconf\components\rest\ApiController;

/**
 * AuthenticatorController implements the CRUDI actions for the module.
 */
class AuthenticatorController extends ApiController
{
    /**
     * {@inheritdoc}
     */
    public function actions()
    {
        $parentActions = parent::actions();

        $overwriteActions = [
                'join' => [
                'class' => $this->apiActionClass,
                'processingClass' => '\myzero1\apibyconf\example\processing\authenticator\Join',
            ],
            'login' => [
                'class' => $this->apiActionClass,
                'processingClass' => '\myzero1\apibyconf\example\processing\authenticator\Login',
            ],
        ];

        $actions = array_merge($parentActions, $overwriteActions);

        return $actions;
    }
}
