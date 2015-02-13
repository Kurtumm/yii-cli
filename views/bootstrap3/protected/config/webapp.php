<?php
$params = require dirname(__FILE__) . '/params.php';
return CMap::mergeArray(
	require(dirname(__FILE__) . '/main.php'), array(
		'components' => array(
			'clientScript' => array(
				'defaultScriptFilePosition' => CClientScript::POS_END,
				'coreScriptPosition' => CClientScript::POS_END,
				'packages' => array(
					'jquery' => array(
						'baseUrl' => 'assets/jquery/',
						'js' => array(
							'jquery-2.1.3.min.js',
//							'jquery-migrate-1.2.1.min.js',
							'jquery-ui.min.js',
							'jquery.cookie.js',
						),
					),
					'bootstrap' => array(
						'baseUrl' => 'assets/bootstrap/',
						'css' => array(
							'css/bootstrap.min.css',
							'css/font-awesome.min.css',
							'css/navbar-fixed-top.css',
							'css/style.css'
						),
						'js' => array(
							'js/bootstrap.min.js',),
						'depends' => array(
							'jquery'
						),
					),
				),
			),
			'urlManager' => array(
				'showScriptName' => false,
				'rules' => array(),
			),
		),
		'modules' => array(// uncomment the following to enable the Gii tool
		),
		'params' => array(// this is used in contact page
		),
	)
);