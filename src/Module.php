<?php

namespace myzero1\apibyconf;

/**
 * v1 module definition class
 */
class Module extends \yii\base\Module
{
    /**
     * {@inheritdoc}
     */
    // public $controllerNamespace = 'myzero1\apibyconf\controllers';

    /**
     * {@inheritdoc}
     */
    public function init()
    {
        parent::init();
        //由于RESTful遵循的是无状态可将用户session关闭
        \Yii::$app->user->enableSession = false;
        //关闭登录失败跳转
        \Yii::$app->user->loginUrl = null;
    }
}
