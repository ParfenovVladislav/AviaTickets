<?php
if (isset ($_GET['exit']))
	{
		setcookie('WebEngineerRestrictedArea', '', time()-60*60*24); 
		header ("Location: ".'index.php');
		exit();
	}
?>

<!DOCTYPE HTML>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    <title>AviaTickets</title>
    <link rel="shortcut icon" href="style/images/favicon.png" />
    <link rel="stylesheet" type="text/css" href="style/css/style.css" media="all" />
    <link rel="stylesheet" type="text/css" href="style/css/zebra_datepicker.min.css" media="all" />
    <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">  <!-- ДОБАВЛЕНО -->
    <link rel="stylesheet" type="text/css" href="style/type/marketdeco.css" media="all"/>

    <!-- <script type="text/javascript" src="style/js/jquery-1.7.1.min.js"></script> -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
    <script type="text/javascript" src="style/js/ddsmoothmenu.js"></script>
    <script src="style\js\zebra_datepicker.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>   <!-- ДОБАВЛЕНО -->
</head>

<body>
    <div id="page" class="hfeed">
        <div id="wrapper">
            <header id="branding" role="banner">
                <h1 id="site-title">
                    <a href="index.php" title="Serendipity" rel="home">AviaTickets</a>
                </h1>
                <nav id="access" class="access" role="navigation">
                    <div id="menu" class="menu">
                        <ul id="tiny">
                            <li><a href="index.php">Book Tickets</a></li>
                            <li><a href="contact.php">Contact us</a></li>
                            <?php if (isset($_COOKIE['WebEngineerRestrictedArea'])){ ?> 
                            <li><a href="#"><?php echo $_COOKIE['WebEngineerRestrictedArea'] ?></a>
                                <ul>
                                    <li><a href="?exit">Exit</a></li>
                                </ul>
                            </li>
                            <?php } else { ?>
                            <li><a href="#">Guest</a>
                                <ul>
                                    <li><a href="login.php">Sign-in</a></li>
                                    <li><a href="register.php">Register</a></li>
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