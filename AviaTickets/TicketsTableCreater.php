<body>
<div id="page" class="hfeed">
<div id="wrapper">
<header id="branding" role="banner">
  
  <!-- #access --> 
</header>
<!-- #branding -->
<?php
	include_once($_SERVER['DOCUMENT_ROOT'].'/includes/divheader.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/includes/core.php');
	
    $config = array (
        "token" => "3ddd617e-7361-4ab4-b5c5-0fde95d179d0",
    );

    $url = "https://api.rasp.yandex.net/v3.0/search/?apikey=3ddd617e-7361-4ab4-b5c5-0fde95d179d0&format=json&from=c146&to=c213&lang=ru_RU&page=1&date=2019-05-31&transport_types=plane";
    $content = file_get_contents($url);
    $jsonResult = json_decode($content);          
    if (1)
        {
			$a = ($jsonResult->segments[0]->from->title);
			$b = $jsonResult->segments[0]->to->title;
            echo "&nbsp <h2>Всего на 31 мая 2019 года: ".count($jsonResult->segments)." рейсов первого класса</h2>"; 
            echo "<h2>Из города ".$a." в город ".$b."</h2>";
            echo "<div class='forms'>
                    <fieldset>
                        <table align='center' width='100%' border='1'>"; 
            echo "<tr><th><h3>Время отправления</th><th><h3>Время прибытия</th><th><h3>Цена билета</th><th><h3>Пересадки</th></tr>";
			$id = 1;
                foreach($jsonResult->segments as $flight){  
				
				$sql = "SELECT * FROM test WHERE id = '$id'";
				$result_select = $dbconnect->query($sql);
				$object = $result_select->fetch_object();

				$n = $flight->departure;
				$m = $flight->arrival;
				//$l = date_diff($m, $n);
                    echo "<tr><th><h2>".substr($n,11,8)."</th><th><h2>".substr($m,11,8)."</th><th><h2>".$object->price." P.</th><th><h2>".$object->peresadka."</th>";
                    echo "</tr>";
					$id++;
            }
			echo "</table></fieldset>";
    }
?>    
