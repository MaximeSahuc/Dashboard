/* Copyright 30-12-2021 Maxime Sahuc */

function updateCovidSemaine() {
    const url = "https://services1.arcgis.com/5PzxEwuu4GtMhqQ6/arcgis/rest/services/Synthese_Covid19_France/FeatureServer/4/query?f=json&where=1%3D1&returnGeometry=false&spatialRel=esriSpatialRelIntersects&outFields=*&orderByFields=FIRST_Jour_dt%20desc&resultOffset=0&resultRecordCount=7&resultType=standard&cacheHint=true";

    var request = new XMLHttpRequest();

    request.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            const jsonOBJ = JSON.parse(this.responseText);
            updateCovid(jsonOBJ);
        }
    };
    
    request.open("GET", url, true);
    request.send();

    function updateCovid(arr) {
        google.charts.load('current', { 'packages': ['corechart'] });
        google.charts.setOnLoadCallback(drawGraphCovid);

        function drawGraphCovid() {
            var data = [['Date', 'Nouveaux cas']];

            const nombreValeursGraph = 6;
            for (i = nombreValeursGraph; i >= 0; i--) {
                data.push([arr['features'][i]['attributes'].Jour, arr['features'][i]['attributes'].Cas_Evol]);
            }

            const dataTable = google.visualization.arrayToDataTable(data);

            const options = {
                curveType: 'function',
                backgroundColor: 'transparent',
                legend: { position: 'none' }
            };

            const graph = new google.visualization.LineChart(document.getElementById('graph_covid'));

            graph.draw(dataTable, options);

            // MAJ toute les 10 minutes
            setTimeout(updateCovidSemaine, 600000);
        }
        
    }
}

setTimeout(updateCovidSemaine, 0);