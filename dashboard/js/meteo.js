/* Copyright 30-12-2021 Maxime Sahuc */

function meteo_semaine() {
    const widget = document.getElementsByClassName("meteosemaine"),
        array = [];
    if (0 !== widget.length) {
        for (var t = function(t) {
                var link = widget[t],
                    obj = {};
                obj.href = URL_METEO_SEMAINE,
                obj.font = link.getAttribute("data-font"), 
                obj.textcolor = link.getAttribute("data-textcolor"), 
                obj.suncolor = link.getAttribute("data-suncolor"), 
                obj.raincolor = link.getAttribute("data-raincolor"),
                obj.mode = "Forecast",

                (r = document.getElementById(obj.id)) && link.removeChild(r), 
                array[obj.id] = document.createElement("iframe"), 
                array[obj.id].setAttribute("id", "weatherframe"), 
                array[obj.id].setAttribute("scrolling", "no"), 
                array[obj.id].setAttribute("frameBorder", "0"), 
                array[obj.id].setAttribute("width", "100%"), 
                array[obj.id].setAttribute("src", "https://weatherwidget.io/w/"), 
                array[obj.id].style.display = "block", 
                array[obj.id].style.position = "absolute", 
                array[obj.id].style.top = "0", 
                array[obj.id].onload = function() {
                    array[obj.id].contentWindow.postMessage(obj, "https://weatherwidget.io")
                }, 
                
                link.style.display = "block", 
                link.style.position = "relative", 
                link.appendChild(array[obj.id])
                
            }, cpt = 0, size = Math.min(widget.length, 10); cpt < size; cpt++) {
            var r;
            t(cpt)
        }
        window.addEventListener("message", function(link) {
            (array[link.data.wwId].style.height = link.data.wwHeight + "px", array[link.data.wwId].parentNode.style.height = link.data.wwHeight + "px")
        })

        // update toutes les 24 heures
        setTimeout(meteo_semaine, 3600000);
    } else {setTimeout(meteo_semaine, 1500);}
}

function meteo_actuelle() {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            const jsonOBJ = JSON.parse(this.responseText);
            updateCurrentTemp(jsonOBJ);
        }
    };
    
    request.open("GET", URL_METEO_ACTUELLE, true);
    request.send();

    function updateCurrentTemp(arr) {
        const data = arr['main'];

        const currentTemp = data.temp;
        const tempMin = data.temp_min;
        const tempMax = data.temp_max;
        const villeData = arr.name;

        if(villeData == METEO_VILLE){
            document.getElementById("ville").innerHTML = villeData;
            document.getElementById("temp").innerHTML = Math.floor(currentTemp) + decodeURI("%C2%B0");
            document.getElementById("temp_min_max").innerHTML = "Max. " + Math.floor(tempMax) + decodeURI("%C2%B0") + " Min. " + Math.floor(tempMin) + decodeURI("%C2%B0");

            // update toutes les 10 minutes
            setTimeout(meteo_actuelle, 600000);
        }else{
            console.warn("Mauvaisse ville (" + villeData + "), actualisation..")
            setTimeout(meteo_actuelle, 0);
        }
    }
}

function update_temp_appart() {
    // update toutes les secondes
    setTimeout(update_temp_appart, 1000);
    var request = new XMLHttpRequest();
    const url = BASE_URL + "/getInfos.php?value=temp";

    request.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            document.getElementById("valeur_temp_appart").innerHTML = this.responseText + decodeURI("%C2%B0");
        }
    };

    request.open("GET", url, true);
    request.send();
}

function update_humi_appart() {
    // update toutes les secondes
    setTimeout(update_humi_appart, 1000);
    var request = new XMLHttpRequest();
    const url = BASE_URL + "/getInfos.php?value=humi";

    request.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            document.getElementById("valeur_humi_appart").innerHTML = this.responseText + "%";
        }
    };

    request.open("GET", url, true);
    request.send();
}

setTimeout(meteo_semaine, 0);
setTimeout(meteo_actuelle, 0);
setTimeout(update_temp_appart, 0);
setTimeout(update_humi_appart, 0);