/* Copyright 30-12-2021 Maxime Sahuc */

const token = new URLSearchParams(window.location.search).get('token');

function updateSpotify() {
    setTimeout(updateSpotify, 1000);

    const url = "https://api.spotify.com/v1/me/player/currently-playing";
    var request = new XMLHttpRequest();
    request.open("GET", url, true);
    request.setRequestHeader('Authorization', 'Bearer ' + token);
    request.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            const jsonOBJ = JSON.parse(this.responseText);
            updateInfos(jsonOBJ);
        }

        if(this.status == 401 || this.status == 404) {
            console.log(this.status);
            window.location.replace(BASE_URL);
        }
    };
    
    request.send();

    function updateInfos(data) {
        const musique = data['item'];
        const titre = musique.name;
        var auteur = "";
        const cover = musique['album']['images'][0].url;

        for(i = 0; i < musique['artists'].length; i++){
            auteur += musique['artists'][i].name;
            if(i != musique['artists'].length - 1){
                auteur += ", ";
            }
        }

        document.getElementById("titre_musique").innerHTML = titre;
        document.getElementById("auteur_musique").innerHTML = auteur;
        document.getElementById("cover_musique").src = cover;
    }
}

setTimeout(updateSpotify, 0);