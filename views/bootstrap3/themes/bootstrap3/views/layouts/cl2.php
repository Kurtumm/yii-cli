<?php /* @var $this Controller */ ?>
<?php $this->beginContent('//layouts/main'); ?>
<?php require_once 'tpl_header.php'; ?>
    <div class="container">
        <div class="col-lg-3 col-md-3 col-sm-3">
            <nav>
                <?php
                $this->widget('zii.widgets.CMenu', array(
                    'items'=>$this->menu,
                    'htmlOptions'=>array('class'=>'nav nav-stacked'),
                ));
                ?>
            </nav>
        </div>
        <div class="col-lg-9 col-md-9 col-sm-9">
            <?php
            if(isset($this->breadcrumbs)) {
                $this->widget('zii.widgets.CBreadcrumbs', array(
                    'links'=>$this->breadcrumbs,
                    'separator'=>' ',
                    'tagName'=>'ol',
                    'activeLinkTemplate'=>'<li><a href="{url}">{label}</a></li>',
                    'inactiveLinkTemplate'=>'<li><span>{label}</span></li>',
                    'htmlOptions'=>array(
                        'class'=>'breadcrumb'
                    ),
                ));
            }
            ?>
            <?php if(isset($this->pageHeader)) echo '<div class="page-header"><h1>'.$this->pageHeader.'</h1></div>';?>

            <?php echo $content;?>
        </div>
    </div>
<?php //Yii::app()->clientScript->registerCssFile(Yii::app()->theme->baseUrl.'/assets/css/navbar-fixed-top.css'); ?>
<?php //Yii::app()->clientScript->registerCssFile(Yii::app()->theme->baseUrl.'/assets/css/style.css'); ?>
<?php $this->endContent(); ?>