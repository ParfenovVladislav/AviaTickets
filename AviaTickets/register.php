<?php 
include_once($_SERVER['DOCUMENT_ROOT'].'/includes/core.php');
include_once($_SERVER['DOCUMENT_ROOT'].'/includes/header.php');

if (isset($_POST['name']) and isset($_POST['password']) and $_POST['password'] !== '' and $_POST['name'] !== '') {
	$name = $_POST['name']; 
	$password = $_POST['password'];

    //если логин и пароль введены, то обрабатываем их, чтобы теги и скрипты не работали, мало ли что люди могут ввести
    $name = stripslashes($name);
    $name = htmlspecialchars($name);
 $password = stripslashes($password);
    $password = htmlspecialchars($password);
 //удаляем лишние пробелы
    $name = trim($name);
    $password = trim($password);
 // проверка на существование пользователя с таким же логином
    $result = $dbconnect->query("SELECT id FROM users WHERE name='$name'",$db);
    $myrow = $result->fetch_array();
    if (!empty($myrow['id'])) {
    echo ("Извините, введённый вами логин уже зарегистрирован. Введите другой логин.");
    }
 // если такого нет, то сохраняем данные
    $result2 = $dbconnect->query("INSERT INTO users SET name='".$name."', password='".$password."'");
    // Проверяем, есть ли ошибки
    if ($result2=='TRUE')
    {
    echo "Вы успешно зарегистрированы! Теперь вы можете зайти на сайт. <a href='index.php'>Главная страница</a>";
    }
 else {
    echo "Ошибка! Вы не зарегистрированы.";
    }
} else {
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
              <input type="text" name="password" class="text-input" title="Пароль"/>
            </li>
            <li class="button-row">
              <input type="submit" value="Зарегистрироваться" name="Login" class="btn-submit" />
            </li>
          </ol>
          <input type="hidden" name="v_error" id="v-error" value="Required" />
        </fieldset>
      </form>
    </div>
    <!-- End Form -->
        
  


<?php } ?>

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