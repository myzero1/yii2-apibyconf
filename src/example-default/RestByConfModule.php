<?php

namespace myzero1\apibyconf\example;

use Yii;
use yii\base\Module as BaseModule;
use yii\base\BootstrapInterface;
use myzero1\apibyconf\components\rest\ApiHelper;

/**
 * example module definition class
 */
class apibyconfModule extends BaseModule implements BootstrapInterface
{
    /**
     * {@inheritdoc}
     */
    public $controllerNamespace = 'myzero1\apibyconf\example\controllers';

    /**
    /**
    /**
     * {@inheritdoc}
     */
    public function bootstrap($app)
    {
        if ($app instanceof \yii\web\Application) {
            Yii::$app->params['apibyconfAuthenticator_ab6446ae49cf579a847bfab947702375'] = 'httpBearerAuth';
            Yii::$app->params['apibyconfUnAuthenticateActions_ab6446ae49cf579a847bfab947702375'] = [
                'post /authenticator/login',
                'post /authenticator/join',
            ];
            $apiUrlRules = ApiHelper::getApiUrlRules($this->id);
            $app->getUrlManager()->addRules($apiUrlRules, false);
        }
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
