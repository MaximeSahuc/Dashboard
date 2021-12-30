/* Copyright 30-12-2021 Maxime Sahuc */

const BASE_URL = location.href.substring(0, location.href.lastIndexOf('/'));

/* Spotify */
const SPOTIFY_CLIENT_ID = 'SPOTIFY_CLIENT_ID';
const SPOTIFY_CLIENT_SECRET = 'SPOTIFY_CLIENT_SECRET';
const SPOTIFY_LOGIN_URL = 'https://accounts.spotify.com/fr/authorize?response_type=token&client_id=' + SPOTIFY_CLIENT_ID + '&scope=user-read-currently-playing&redirect_uri=' + BASE_URL + '/connect.php';

/* Meteo */
const URL_METEO_SEMAINE = 'https://forecast7.com/fr/49d490d11/le-havre/';
const URL_METEO_ACTUELLE = 'https://fcc-weather-api.glitch.me/api/current?lat=YOUR_LAT&lon=YOUR_LONG';
const METEO_VILLE = 'Le Havre';

/* News */
const NEWS_API_KEY = 'NEWS_API_KEY';



function update_heure() {
    // update toutes les secondes
    setTimeout(update_date, 1000);
    
    const date = new Date();
    var heure = date.getHours();
    const minutes = date.getMinutes();

    if(heure < 10) {
        heure = '0' + heure;
    }

    const hm = heure + ':' + minutes;
    document.getElementById('heure').innerHTML = hm;
}

function update_date() {
    // update toutes les secondes
    setTimeout(update_date, 1000);

    const formatter = new Intl.DateTimeFormat('fr', { month: 'long' });
    const date = new Date();

    const jour = date.getDate();
    const mois = uppercaseFirstLetter(formatter.format(date));
    const annee = date.getFullYear();

    document.getElementById('date').innerHTML = jour + ' ' + mois + ' ' + annee;
}

function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

setTimeout(update_heure, 0);
setTimeout(update_date, 0);