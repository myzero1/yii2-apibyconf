<?php

namespace myzero1\apibyconf\example;

use Yii;
use yii\base\Module as BaseModule;
use yii\base\BootstrapInterface;
use myzero1\apibyconf\components\rest\ApiHelper;

/**
 * example module definition class
 */
class ApiByConfModule extends BaseModule implements BootstrapInterface
{
    /**
     * {@inheritdoc}
     */
    public $controllerNamespace = 'example\controllers';
    public $docToken = 'docTokenAsMyzero1';
    public $apiTokenExpire = 86400; // 24h
    public $runningAsDocActions = ['*' => '*']; // all action
    public $fixedUser = [ 'id' => 1, 'username' => 'myzero1',];

    /**
     * {@inheritdoc}
     */
    public function bootstrap($app)
    {
        if ($app instanceof \yii\web\Application) {
            Yii::$app->params['apibyconfAuthenticator_4c0122e47a06f9a82ddcecf3bd46264a'] = 'noAuthenticator';
            Yii::$app->params['apibyconfUnAuthenticateActions_4c0122e47a06f9a82ddcecf3bd46264a'] = [
                'post /authenticator/login',
                'post /authenticator/join',
            ];
            $apiUrlRules = ApiHelper::getApiUrlRules($this->id);
            $app->getUrlManager()->addRules($apiUrlRules, $append = true);
        }

        Yii::setAlias('@example', '@vendor/myzero1/yii2-apibyconf/src/example');
    }

    /**
     * {@inheritdoc}
     */
    public function init()
    {
        parent::init();

        // custom initialization code goes here
    }
}
