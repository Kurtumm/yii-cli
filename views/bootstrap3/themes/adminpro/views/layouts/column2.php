<?php /* @var $this Controller */ ?>
<?php $this->beginContent('//layouts/main'); ?>
<div class="row">
	<div class="span3">
		<?php require_once 'tpl_sidebar.php';?>
	</div>
	
	<div class="span9">
		<div class="content">
			<?php echo $content;?>
		</div>
	</div>
</div>
<?php $this->endContent(); ?>