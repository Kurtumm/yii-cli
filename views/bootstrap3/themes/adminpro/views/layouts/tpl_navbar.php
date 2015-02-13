<div class="navbar navbar-fixed-top">
	<div class="navbar-inner">
		<div class="container">
			<a class="btn btn-navbar" data-toggle="collapse" data-target=".navbar-inverse-collapse">
				<i class="icon-reorder shaded"></i>
			</a>
			<a class="brand" href="#"> AdminPro </a>

			<div class="nav-collapse collapse navbar-inverse-collapse">
				<?php if(!Yii::app()->user->isGuest):?>
				<ul class="nav nav-icons">
					<li class="active">
						<a href="#"> <i class="icon-group shaded"></i></a>
					</li>
					<li>
						<a href="#"> <i class="icon-inbox shaded"></i></a>
					</li>
					<li>
						<a href="#"> <i class="icon-tasks shaded"></i></a>
					</li>
				</ul>
				<?php endif;?>
				
				<?php if(!Yii::app()->user->isGuest):?>
				<form class="navbar-search pull-left input-append" action="">
					<input type="text" class="span3">
					<button class="btn" type="button">
						<i class="icon-search"></i>
					</button>
				</form>

				<ul class="nav pull-right">
					<li class="dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown">Dropdown <b class="caret"></b></a>
						<ul class="dropdown-menu">
							<li><a href="#">Action</a></li>
							<li><a href="#">Another action</a></li>
							<li><a href="#">Something else here</a></li>
							<li class="divider"></li>
							<li class="nav-header">Nav header</li>
							<li><a href="#">Separated link</a></li>
							<li><a href="#">One more separated link</a></li>
						</ul></li>
					<li><a href="#"> Help </a></li>
					<li><a href="#"> Report </a></li>
					<li class="nav-user dropdown"><a href="#" class="dropdown-toggle"
						data-toggle="dropdown"> <img src="images/samples/user.png"
							class="nav-avatar" /> <b class="caret"></b>
					</a>
						<ul class="dropdown-menu">
							<li><a href="#">Your Profile</a></li>
							<li><a href="#">Edit Profile</a></li>
							<li><a href="#">Account Settings</a></li>
							<li class="divider"></li>
							<li><a href="#">Sign Out</a></li>
						</ul></li>
				</ul>
				<?php else:?>
					<ul class="nav pull-right">

						<li><a href="#">
							Sign Up
						</a></li>

						<li class="divider-vertical"></li>

						<li><a href="#">
							Forgot your password?
						</a></li>
					</ul>
				<?php endif;?>
			</div>
			<!-- /.nav-collapse -->
		</div>
	</div>
	<!-- /navbar-inner -->
</div>
<!-- /navbar -->