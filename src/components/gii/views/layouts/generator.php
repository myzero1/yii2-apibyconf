<?php
use yii\helpers\Html;

/* @var $this \yii\web\View */
/* @var $generators \yii\gii\Generator[] */
/* @var $activeGenerator \yii\gii\Generator */
/* @var $content string */

$generators = Yii::$app->controller->module->generators;
$activeGenerator = Yii::$app->controller->generator;
?>
<?php $this->beginContent('@vendor/myzero1/yii2-apibyconf/src/components/gii/views/layouts/main.php'); ?>
<div class="row">
    <div class="col-lg-12 col-md-12 col-sm-12">
        <br>
        <?= $content ?>
        <br>
        <br>
        <br>
        <hr>
        <h1>Gii menu</h1>
        <br/>
        <div class="list-group">
            <?php
            $classes = ['list-group-item', 'd-flex', 'justify-content-between', 'align-items-center'];
            foreach ($generators as $id => $generator) {
                $label = Html::tag('span', Html::encode(str_replace(' Generator', '', $generator->getName()))) . '<span class="icon"></span>';
                echo Html::a($label, ['default/view', 'id' => $id], [
                    'class' => $generator === $activeGenerator ? array_merge($classes, ['active']) : $classes,
                ]);
            }
            ?>
        </div>
    </div>
</div>

<?php $this->endContent(); ?>
