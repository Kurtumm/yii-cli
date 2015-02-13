<?php
$assets = Yii::app()->theme->baseUrl.'/assets';
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>APanel</title>
		<!-- STYLES: BOOTSTRAPS -->
		<link type="text/css" href="<?php echo $assets;?>/bootstrap/css/bootstrap.css" rel="stylesheet">
		<link type="text/css" href="<?php echo $assets;?>/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
		<!-- STYLES: THEMES -->
		<link type="text/css" href="<?php echo $assets;?>/css/theme.css" rel="stylesheet">
		<link type="text/css" href="<?php echo $assets;?>/css/theme-responsive-767.css" rel="stylesheet">
		<link type="text/css" href="<?php echo $assets;?>/css/theme-responsive-768-979.css" rel="stylesheet">
		<link type="text/css" href="<?php echo $assets;?>/images/icons/css/font-awesome.css" rel="stylesheet">
		<!--FONTS-->
		<link type="text/css" href='http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,400,600' rel='stylesheet'>
	</head>
	
	<body>
		<?php require_once 'tpl_navbar.php';?>
		
		<div class="wrapper">
			<div class="container">
				<?php echo $content;?>
			</div>
		</div>
		
		<?php require_once 'tpl_footer.php';?>
		
		<!-- SCRIPTS: BASE -->
		<script src="<?php echo $assets;?>/js/jquery-1.9.1.min.js"></script>
		<script src="<?php echo $assets;?>/js/jquery-ui-1.10.1.custom.min.js"></script>
		<script src="<?php echo $assets;?>/bootstrap/js/bootstrap.min.js"></script>
	
		<!-- SCRIPTS: FLOT  -->
		<script src="<?php echo $assets;?>/js/flot/jquery.flot.js"></script>
	</body>
</html>