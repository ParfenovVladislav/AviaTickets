<?php
include_once($_SERVER['DOCUMENT_ROOT'].'/includes/core.php');

if (isset($_POST['name']) and isset($_POST['password']) and $_POST['password'] !== '' and $_POST['name'] !== '') {
	if (preg_match("/^[a-zA-Z0-9]{3,30}$/", $_POST['name'])) {
		$user = $dbconnect->query("SELECT * FROM users WHERE name='".$_POST['name']."'");
		$U = $user->num_rows;
		if ($U == 1){
			$user_data = $user->fetch_array();
			if ($_POST['password'] == $user_data['password']){
				setcookie("WebEngineerRestrictedArea",$_POST['name'],time()+60*60*24);
				header ("Location: ".'index.php');
				} else {
					$update_error = TRUE;
				}
			} else {
				$error_pass = TRUE;
			}
		} else {
			$error_login = TRUE;
		}
	} else {
		$syntax_error = TRUE;
	}
	
include_once($_SERVER['DOCUMENT_ROOT'].'/includes/header.php');
?>


    <!-- Begin Form -->
    <div class="form-container">
      <div class="response"></div>
      <form class="forms" action="#" method="post">
        <fieldset>
          <ol>
            <li class="form-row text-input-row">
              <input type="text" name="name" class="text-input" title="Логин"/>
            </li>
            <li class="form-row text-input-row">
              <input type="password" name="password" class="text-input" title="Пароль"/>
            </li>
            <li class="button-row">
              <input type="submit" value="Вход" name="Login" class="btn-submit" />
            </li>
          </ol>
          <input type="hidden" name="v_error" id="v-error" value="Required" />
        </fieldset>
      </form>
    </div>
    <!-- End Form -->
        
  

	<footer id="colophon" role="contentinfo">
		<div id="supplementary" class="four">
		</div><!-- #supplementary -->
		<div id="site-generator">
			Copyright 2019 - Парфенов & Некрут
		</div>

	</footer><!-- #colophon -->
	</div><!-- #wrapper -->
</div><!-- #page -->

<script type="text/javascript" src="style/js/scripts.js"></script>
</body>
</html>