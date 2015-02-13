<?php $this->beginContent('//layouts/main'); ?>
    <div class="container">
        <?php echo $content; ?>
    </div>
<?php Yii::app()->clientScript->registerCssFile(Yii::app()->theme->baseUrl.'/assets/css/signin.css'); ?>
<?php Yii::app()->clientScript->registerCssFile(Yii::app()->theme->baseUrl.'/assets/css/style.css'); ?>
<?php $this->endContent(); ?>