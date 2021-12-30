<!-- Copyright 30-12-2021 Maxime Sahuc -->

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="index.css"/>
    
    <script src="https://www.gstatic.com/charts/loader.js"></script>
    
    <script src="js/main.js"></script>
    <script src="js/meteo.js"></script>
    <script src="js/news.js"></script>
    <script src="js/covid.js"></script>
    <script src="js/spotify.js"></script>

    <title>Dashboard</title>
</head>
<body>
    
    <!-- DATE & HEURE -->
    <div id="infos" class="container">
        <h1 id="heure"></h1>
        
        <h2 id="date"></h2>
    </div>

    <!-- SPOTIFY -->
    <div id="spotify" class="container">
        <img src="https://i.scdn.co/image/ab67616d0000b273b1cbf16bf56739716424e653" id="cover_musique" alt="cover musique"/>        

        <div id="infos_musique">
            <h4 id="titre_musique">
                Across The Rainbow
            </h4>

            <h5 id="auteur_musique">
                TABAL
            </h5>
        </div>
    </div>

    <!-- ACTUS -->
    <div id="actus" class="container"></div>

    <!-- PANNEL PRINCIPAL -->
    <div id="center">
        
    </div>

    <!-- METEO -->
    <div id="meteo" class="container">
        <h1 id="ville" class="center"></h1>
        <h1 id="temp" class="center"></h1>

        <div id="meteo_infos">
            <p id="temp_min_max" class="center"></p>
        </div>
            
        <a class="meteosemaine" data-font="Arial" data-textcolor="#eaeaea"  data-suncolor="#ffd50b" data-cloudfill="#ffffff" data-raincolor="#3c667d"></a>
    </div>

    <div id="infos_appart">
        <div id="temp_appart" class="container">
            <h3>Température</h3>
            <h1 id="valeur_temp_appart"></h1>
        </div>

        <div id="humi_appart" class="container">
            <h3>Humidité</h3>
            <h1 id="valeur_humi_appart"></h1>
        </div>
    </div>

    <!-- COVID -->
    <div id="covid" class="container">
        <h4 id="titre_covid" class="center">Nouveaux cas COVID</h4>
        <div id="graph_covid" style="width: 326px; height: 296px"></div>
    </div>

</body>
</html>