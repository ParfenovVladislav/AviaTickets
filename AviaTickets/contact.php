<?php 
include_once($_SERVER['DOCUMENT_ROOT'].'/includes/core.php');
include_once($_SERVER['DOCUMENT_ROOT'].'/includes/header.php');
?>
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