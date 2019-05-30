<?php
    header( 'Content-Type: text/html; charset=utf-8');

    $config = array (
        "token" => "3ddd617e-7361-4ab4-b5c5-0fde95d179d0",
    );
    $url = "https://api.rasp.yandex.net/v3.0/search/?apikey=3ddd617e-7361-4ab4-b5c5-0fde95d179d0&format=json&from=c146&to=c213&lang=ru_RU&page=1&date=2019-05-26&transport_types=plane";
    $content = file_get_contents($url);
    $jsonResult = json_decode($content);          
    if (1)
        {
            echo "&nbsp Total flights ".count($jsonResult->segments).""; 
            echo "<br>From ".$jsonResult->segments[0]->from->title." to ".$jsonResult->segments[0]->to->title."";
            echo "<table><tr><th>Departure time</th><th>Arrival time</th><th>Время в пути</th><Билеты от></tr>";
                foreach($jsonResult->segments as $flight){  
                    echo "<tr><td>".substr($flight->departure,11,8)."</td><td>".substr($flight->arrival,11,8)."</td>";
                    echo "</tr>";
            }
    }
?>