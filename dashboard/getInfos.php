<!-- Copyright 30-12-2021 Maxime Sahuc -->

<?php
    $bdd = new PDO('mysql:host=127.0.0.1;dbname=YOUR_DB_NAME', 'YOUR_DB_LOGIN', 'YOUR_DB_PASSWORD');
    $reponse = $bdd->query('SELECT * FROM YOUR_TABLE ORDER BY request_date DESC LIMIT 1'); 

    while ($data = $reponse->fetch()) {
        $temp = $data['temp'];
        $humi = $data['humi'];
    }

    if($_GET['value'] === 'temp'){
        echo $temp;
    }

    if($_GET['value'] === 'humi'){
        echo $humi;
    }
?>