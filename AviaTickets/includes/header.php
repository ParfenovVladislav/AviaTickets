<?php
if (isset ($_GET['exit']))
	{
		setcookie('WebEngineerRestrictedArea', '', time()-60*60*24); 
		header ("Location: ".'index.php');
		exit();
	}
?><!DOCTYPE HTML>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>Авиабилеты</title>
<link rel="shortcut icon" href="style/images/favicon.png"/>
<link rel="stylesheet" type="text/css" href="style/css/style.css" media="all"/>
<link rel="stylesheet" type="text/css" href="style/type/marketdeco.css" media="all"/>
<link rel="stylesheet" type="text/css" href="style/css/datepicker.css" media="all" />
<link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css"> 
	
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
<script type="text/javascript" src="style/js/ddsmoothmenu.js"></script>
<script type="text/javascript" src="style/js/datepicker.js"></script>
<script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
</head>

<body>
<div id="page" class="hfeed">
<div id="wrapper">
<header id="branding" role="banner">
  <h1 id="site-title"> 
  	<a href="index.php" title="AviaTickets" rel="home">Авиабилеты</a> 
  </h1>
  <nav id="access" class="access" role="navigation">
        <div id="menu" class="menu">
        	<ul id="tiny">
				<li><a href="index.php">Подбор авиабилетов</a></li>
				<li><a href="contact.php">Связь с нами</a></li>
				<?php if (isset($_COOKIE['WebEngineerRestrictedArea'])){ ?>
				<li><a href="#"><?php echo $_COOKIE['WebEngineerRestrictedArea'] ?></a>
					<ul>
			            <li><a href="?exit">Выход</a></li>
			        </ul>
				</li>
				<?php } else { ?>
				<li><a href="#">Гость</a>
					<ul>
			            <li><a href="login.php">Вход</a></li>
			            <li><a href="register.php">Регистрация</a></li>
			        </ul>
				</li>
				<?php } ?>
			</ul>
		</div>
		<div class="triangle-l"></div>
		<div class="triangle-r"></div>
  </nav>
  <!-- #access --> 
</header>
<!-- #branding -->
