<?php
/* @var $this SiteController */
/* @var $model ContactForm */
/* @var $form CActiveForm */

$this->pageTitle = Yii::app()->name . ' - Contact Us';
$this->breadcrumbs = array(
	'Contact',
);
?>

<h1>Contact Us</h1>

<?php if (Yii::app()->user->hasFlash('contact')): ?>

	<div class="flash-success">
		<?php echo Yii::app()->user->getFlash('contact'); ?>
	</div>

<?php else: ?>

	<p>
		If you have business inquiries or other questions, please fill out the following form to contact us. Thank you.
	</p>

	<?php
	$form = $this->beginWidget('CActiveForm', array(
		'id' => 'contact-form',
		'enableClientValidation' => true,
		'clientOptions' => array(
			'validateOnSubmit' => true,
		),
	));
	?>

	<p class="note">Fields with <span class="required">*</span> are required.</p>

	<?php echo $form->errorSummary($model); ?>

	<div>
		<?php echo $form->labelEx($model, 'name'); ?>
		<?php
		echo $form->textField($model, 'name', array(
			'class' => 'input-block-level'));
		?>
		<?php echo $form->error($model, 'name'); ?>
	</div>

	<div>
		<?php echo $form->labelEx($model, 'email'); ?>
		<?php
		echo $form->textField($model, 'email', array(
			'class' => 'input-block-level'));
		?>
		<?php echo $form->error($model, 'email'); ?>
	</div>

	<div>
		<?php echo $form->labelEx($model, 'subject'); ?>
		<?php
		echo $form->textField($model, 'subject', array(
			'class' => 'input-block-level'));
		?>
		<?php echo $form->error($model, 'subject'); ?>
	</div>

	<div>
		<?php echo $form->labelEx($model, 'body'); ?>
		<?php
		echo $form->textArea($model, 'body', array(
			'class' => 'input-block-level'));
		?>
		<?php echo $form->error($model, 'body'); ?>
	</div>

	<?php if (CCaptcha::checkRequirements()): ?>
		<div>
			<?php echo $form->labelEx($model, 'verifyCode'); ?>
			<div>
				<?php $this->widget('CCaptcha'); ?>
				<?php
				echo $form->textField($model, 'verifyCode', array(
					'class' => 'input-block-level'));
				?>
			</div>
			<div class="hint">Please enter the letters as they are shown in the image above.
				<br/>Letters are not case-sensitive.</div>
			<?php echo $form->error($model, 'verifyCode'); ?>
		</div>
	<?php endif; ?>

	<div class="form-actions">
		<?php
		echo CHtml::submitButton('Submit', array(
			'class' => 'btn btn-primary'));
		?>
	</div>

	<?php $this->endWidget(); ?>

<?php endif; ?>