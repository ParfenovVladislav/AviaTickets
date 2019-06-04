<body>
<div id="page" class="hfeed">
<div id="wrapper">
<header id="branding" role="banner">
  
  <!-- #access --> 
</header>
<!-- #branding -->
<?php
if($_POST["dPoint"] != null and $_POST["aPoint"] != null)
{
function getNumEnding($number)
{
    $number = $number % 100;
    if ($number>=11 && $number<=19) {
        $ending="рейсов";
    }
    else {
        $i = $number % 10;
        switch ($i)
        {
            case (1): $ending = "рейс"; break;
            case (2):
            case (3):
            case (4): $ending = "рейса"; break;
            default: $ending="рейсов";
        }
    }
    return $ending;
}
	include_once($_SERVER['DOCUMENT_ROOT'].'/includes/divheader.php');
    include_once($_SERVER['DOCUMENT_ROOT'].'/includes/core.php');
	
    $config = array (
        "token" => "3ddd617e-7361-4ab4-b5c5-0fde95d179d0",
        "departurePoint" => $_POST["dPoint"],
        "arrivalPoint" =>$_POST["aPoint"],
        "fdate" =>$_POST["fdate"],
        "dIsAirport" =>$_POST["dAirport"],
        "aIsAirport" =>$_POST["aAirport"],
    );

    $pref = $_POST["preferenceVal"];

    $dIsAirport = $_POST["dAirport"];
    $aIsAirport = $_POST["aAirport"];
    $dType = "города";
    $aType = "город";


    $input = array("5133", "4400", "6933", "9185", "7218","11774", "8514", "8295", "3615", "4282", "4512", "6345", "5462", "4376", "7645", "10324");

    $url = "https://api.rasp.yandex.net/v3.0/search/?apikey=".$config["token"]."&format=json&from=".$config["departurePoint"]."&to=".$config["arrivalPoint"]."&lang=ru_RU&page=1&transport_types=plane&date=".$config["fdate"]."&system=iata&transfers=true";
    $content = file_get_contents($url);
    $jsonResult = json_decode($content);          
    if (1)
        {
			$a = ($jsonResult->search->from->title);
            $b = $jsonResult->search->to->title;	
			$c = $_COOKIE['WebEngineerRestrictedArea'];
			$today = date("Y-m-d"); 
			$result = $dbconnect->query("SELECT id FROM users WHERE name='$c'",$db);
			$myrow = $result->fetch_array();
			$result2 = $dbconnect->query("INSERT INTO history SET Uid='".$myrow[id]."', dPoint = '".$a."', aPoint = '".$b."', date = '".$_POST["fdate"]."', Searchdate = '".$today."'");
			
            echo "&nbsp <h2>Всего на ".$config["fdate"].": ".$jsonResult->pagination->total." ".getNumEnding(count($jsonResult->segments))."</h2>"; 
            echo "<h2>Из города ".$a." в город ".$b."</h2>";
            echo "<div class='forms'>
                    <fieldset>
                        <table align='center' width='100%' border='1'>"; 
            echo "<tr><th><h3>Отправление</th><th><h3>Прибытие</th><th><h3>Цена билета</th><th><h3>Пересадки</th></tr>";
                foreach($jsonResult->segments as $flight){ 
                    
                    $price = "";
                    $transferString = "";

                    if (!$flight->has_transfers)
                    {
                        $rand_key = array_rand($input, 1);
                        $price = "от ".$input[$rand_key]."₽";
                        $transferString = "&mdash;";
                    }
                    else{
                        $transferString .= "<div>".$flight->departure_from->title." ";
                        $counter = 1;

                        foreach($flight->transfers as $transfer)
                        {
                            $counter += 1;
                            $transferString .= "&rarr; ".$transfer->title." &rarr;";
                            if ($counter = 1)
                            {
                                $counter = 0;
                                $transferString .= "<br>";
                            }
                        }
                        $transferString .= " ".$flight->arrival_to->title."<div>";
                    }
                     // если такого нет, то сохраняем данные

                    echo "<tr><td><h5><b>".substr($flight->departure,11,8)."<br><h5><b>".substr($flight->departure,0,10)."<br><h5><b>".$flight->departure_from->title.$flight->from->title."</td><td><h5><b>".substr($flight->arrival,11,8)."<br><h5><b>".substr($flight->arrival,0,10)."<br><h5><b>".$flight->to->title.$flight->arrival_to->title."</td><td><h5><b>".$price."</td><th><b>".$transferString."<br></th></tr>";
                    echo "<tr><td></td><td></td></tr>";
                    echo "<tr><td></td><td></td></tr>";
            }
			echo "</table><br></fieldset>";
    }
} //else { echo "<h4>Введите все данные!</h4>";}

    /*          За
				$sql = "SELECT * FROM test WHERE id = '$id'";
				$result_select = $dbconnect->query($sql);
				$object = $result_select->fetch_object();

				$n = $flight->departure;
				$m = $flight->arrival;
				//$l = date_diff($m, $n);
                    echo "<tr><th><h2>".substr($n,11,8)."</th><th><h2>".substr($m,11,8)."</th><th><h2>".$object->price." P.</th><th><h2>".$object->peresadka."</th>";
                    echo "</tr>";
                    $id++;
                    */
?>    
