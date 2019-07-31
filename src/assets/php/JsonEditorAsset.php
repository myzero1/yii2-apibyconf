<?php
namespace myzero1\apibyconf\assets\php;
use yii\web\AssetBundle;
/**
 * Main asset for the `adminlte` theming
 */
class JsonEditorAsset extends AssetBundle
{
    public $sourcePath = '@vendor/myzero1/yii2-apibyconf/src/assets/assets';
    //public $baseUrl = '@web';
    public $css = [
        'jsoneditor-5.32.1/dist/jsoneditor.min.css',
        // 'custom.css',
    ];
    public $js = [
        'jsoneditor-5.32.1/dist/jsoneditor.min.js',
        'apibyconf-ready.js',
        'apibyconf-utils.js',
        'apibyconf-callback.js',
        'apibyconf-init.js',
    ];
    public $depends = [
        'yii\web\YiiAsset',
        'yii\bootstrap\BootstrapAsset',
    ];
}