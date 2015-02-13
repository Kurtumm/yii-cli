<?php

/**
 * Controller is the customized base controller class.
 * All controller classes for this application should extend from this base class.
 */
class MasterController extends Controller
{

	public $pageTitle;

	public $nav = array();

	public function init()
	{
		$this->nav = array(
			//'encodeLabel' => false,
			'items' => array(
				array('label' => 'Home',
				      'url' => array('/home')),

				array('label' => 'Login',
				      'url' => array('/site/login'),
				      'visible' => Yii::app()->user->isGuest),
				array('label' => 'Logout (' . Yii::app()->user->name . ')',
				      'url' => array(
					      '/site/logout'),
				      'visible' => !Yii::app()->user->isGuest)
				/*
				  array('label'=>'Menu', 'url'=>array('/url'), 'active'=>$this->id=='controllerId',
				  'items' => array(
				  array(
				  'label' => 'Sub 1',
				  'url' => array('/brand/view', 'id'=>1)),
				  array(
				  'label' => 'Sub 2',
				  'url' => array('/brand/view', 'id'=>2)),
				  ),
				  'itemOptions' => array('class' => 'dropdown'),
				  'submenuOptions' => array('class' => 'dropdown-menu'),
				  ),
				 */
			),
			'htmlOptions' => array('class' => 'nav navbar-nav'),);
	}
}
