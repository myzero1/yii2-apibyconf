<?php
/**
 * @link https://github.com/myzero1
 * @copyright Copyright (c) 2019- My zero one
 * @license https://github.com/myzero1/yii2-apibyconf/blob/master/LICENSE
 */
namespace example\controllers;

use \myzero1\apibyconf\components\rest\ApiController;

/**
 * BasicController implements the CRUDI actions for the module.
 */
class BasicController extends ApiController
{
    public function behaviors()
    {
        $behaviors = parent::behaviors();

        return $behaviors;
    }
}
