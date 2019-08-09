<?php
/**
 * This is the template for generating a module class file.
 */

/* @var $this yii\web\View */
/* @var $generator yii\gii\generators\module\Generator */

$templateParams = $generator->getModuleTemplateParams();

echo "<?php\n";
?>

namespace <?= json_decode($generator->conf, true)['json']['restModuleNamespace'] ?>;

use Yii;
use yii\base\Module as BaseModule;
use yii\base\BootstrapInterface;
use myzero1\apibyconf\components\rest\ApiHelper;

/**
 * <?= $templateParams['moduleID'] ?> module definition class
 */
class ApiByConfModule extends BaseModule implements BootstrapInterface
{
    /**
     * {@inheritdoc}
     */
    public $controllerNamespace = '<?= $templateParams['controllerNamespace'] ?>';
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
            Yii::$app->params['apibyconfAuthenticator_<?= $templateParams['moduleClassMd5'] ?>'] = '<?= $templateParams['apibyconfAuthenticator'] ?>';
            Yii::$app->params['apibyconfUnAuthenticateActions_<?= $templateParams['moduleClassMd5'] ?>'] = [
<?php
foreach ($templateParams['apibyconfUnAuthenticateActions'] as $k => $v) {
        printf("                '%s',\n", $v);
    }
?>
            ];
            $apiUrlRules = ApiHelper::getApiUrlRules($this->id);
            $app->getUrlManager()->addRules($apiUrlRules, $append = true);
        }

        Yii::setAlias('@<?= $templateParams['restModuleAlias'] ?>', '<?= $templateParams['restModuleAliasPath'] ?>');
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
