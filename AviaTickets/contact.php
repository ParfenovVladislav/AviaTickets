<!DOCTYPE HTML>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<title>AviaTickets</title>
<link rel="shortcut icon" href="style/images/favicon.png"/>
<link rel="stylesheet" type="text/css" href="style.css" media="all" />
<link rel="stylesheet" type="text/css" href="style/css/view.css" media="all" />
<link rel="stylesheet" type="text/css" href="style/type/marketdeco.css" media="all" />
<link rel="stylesheet" type="text/css" href="style/type/merriweather.css" media="all" />
<!--[if IE 8]>
<link rel="stylesheet" type="text/css" href="style/css/ie8.css" media="all" />
<![endif]-->
<!--[if IE 9]>
<link rel="stylesheet" type="text/css" href="style/css/ie9.css" media="all" />
<![endif]-->
<script type="text/javascript" src="style/js/jquery-1.7.1.min.js"></script>
<script type="text/javascript" src="style/js/ddsmoothmenu.js"></script>
<script type="text/javascript" src="style/js/html5.js"></script>
<script type="text/javascript" src="style/js/jquery.fitvids.js"></script>
<script type="text/javascript" src="style/js/selectnav.js"></script>
<script type="text/javascript" src="style/js/twitter.min.js"></script>
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
				<li><a href="#">Guest</a>
					<ul>
			            <li><a href="login.php">Sign-in</a></li>
			            <li><a href="register.php">Register</a></li>
			        </ul>
				</li>
			</ul>
		</div>
		<div class="triangle-l"></div>
		<div class="triangle-r"></div>
  </nav>
  <!-- #access --> 
</header>
<!-- #branding -->


    <!-- Begin Form -->
    <div class="form-container">
      <div class="response"></div>
      <form class="forms" action="#" method="post">
        <fieldset>
          <ol>
            <li class="form-row text-input-row">
              <input type="text" name="name" class="text-input defaultText required" title="Name (Required)"/>
            </li>
            <li class="form-row text-input-row">
              <input type="text" name="email" class="text-input defaultText required email" title="Email (Required)"/>
            </li>
            <li class="form-row text-input-row">
              <input type="text" name="subject" class="text-input defaultText" title="Subject"/>
            </li>
            <li class="form-row text-area-row">
              <textarea name="message" class="text-area required"></textarea>
            </li>
            <li class="form-row hidden-row">
              <input type="hidden" name="hidden" value="" />
            </li>
            <li class="button-row">
              <input type="submit" value="Send" name="submit" class="btn-submit" />
            </li>
          </ol>
          <input type="hidden" name="v_error" id="v-error" value="Required" />
          <input type="hidden" name="v_email" id="v-email" value="Enter a valid email" />
        </fieldset>
      </form>
    </div>
    <!-- End Form -->
        
  

	<footer id="colophon" role="contentinfo">
		<div id="supplementary" class="four">
		</div><!-- #supplementary -->
		<div id="site-generator">
			Copyright 2019 - Parfenov & Nekrut
		</div>

	</footer><!-- #colophon -->
	</div><!-- #wrapper -->
</div><!-- #page -->

<script type="text/javascript" src="style/js/scripts.js"></script>
</body>
</html>