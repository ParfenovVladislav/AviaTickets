<?php 
include_once($_SERVER['DOCUMENT_ROOT'].'/includes/core.php');
include_once($_SERVER['DOCUMENT_ROOT'].'/includes/header.php');
$c = $_COOKIE['WebEngineerRestrictedArea'];
?>
			    <!-- Begin Form -->
    <div class="form-container">
<h4>История поиска пользователя <?php echo $c ?>:</h4>
<?php
			
			$result = $dbconnect->query("SELECT id FROM users WHERE name='$c'",$db);
			$myrow = $result->fetch_array();
				$sql = "SELECT * FROM history WHERE Uid = '".$myrow[id]."'";
				$result_select = $dbconnect->query($sql);  
				echo "<div class='forms'>
                    <fieldset>
                        <table align='center' width='100%' border='1'>"; 
            echo "<tr><th><b>Номер поиска</th><th><b>Дата поиска</th><th><b>Откуда</th><th><b>Куда</th><th><b>Дата перелета</th></tr><br>";
$id = 0;
				while ($object = $result_select->fetch_object()) {
					$id++;
                    echo "<tr><th><h2>".$id."</th><th><h2>".$object->Searchdate."</th><th><h2>".$object->dPoint."</th><th><h2>".$object->aPoint."</th><th><h2>".$object->date."</th>";
                    echo "</tr>";
				} 
				if ($id == 0) echo "<h5><b>Извините, вы еще не искали билеты!</h5><br>";
				echo "</table><br></fieldset>";
?> 
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