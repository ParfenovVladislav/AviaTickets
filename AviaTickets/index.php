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

<div id="main">

<div id="primary">
  <div id="content" role="main">
    <div class="form-container">
      <div class="response"></div>
      <form class="forms" action="#" method="post">
        <fieldset>
<table align="center" width="100%" border="1">
	<tr>
		<td>
		<section>
    <label class="select-label">Leaving from:</label>
<input type="text" name="leaving" class="text-input defaultText required email" title="Moscow, Russia"/>
</section>
		</td>
		<td>
		<section>
    <label class="select-label">Going to:</label>
<input type="text" name="going" class="text-input defaultText required email" title="Liverpool, United Kingdom"/>
</section>
</td>
	</tr>
	<tr>
		<td>
		<section>
    <label class="select-label">Departuring:</label>
<input type="text" name="email" class="text-input defaultText required email" title="Date"/>
</section>
		</td>
		<td>
		<section>
    <label class="select-label">Preferred class:</label>
	
		<div class="text-input defaultText required email">
    <select class="new-select-style-wpandyou>
        <option value="1">No preference</option>
        <option value="2">First class</option>
        <option value="3">Business</option>
		<option value="3">Economy</option>
    </select>
	</div>
</section>
		</td>
	</tr>
</table>

              <input type="submit" value="Search" name="Search" class="btn-submit" />
        </fieldset>
      </form>
    </div>
 
     <div class="map full">
    	<iframe width="1040" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="http://maps.google.com/maps?ll=40.967132,29.07403&amp;spn=0.047894,0.132093&amp;vpsrc=6&amp;t=m&amp;z=14&amp;output=embed"></iframe>
    </div>
	   
	
  
  </div><!-- #content -->
</div><!-- #primary -->


</div><!-- #main -->

	<footer id="colophon" role="contentinfo">
		<div id="site-generator">
			Copyright 2019 - Parfenov & Nekrut
		</div>

	</footer><!-- #colophon -->
	</div><!-- #wrapper -->
</div><!-- #page -->

<script type="text/javascript" src="style/js/scripts.js"></script>
</body>
</html>