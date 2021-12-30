# Dashboard

A simple and modern dashboard that displays useful information.
## Features

- Date & time
- Weather
- News
- Current playing song on Spotify
- COVID statistics
- Temperature & humidity of the home


## Screenshot

![App Screenshot](https://i.imgur.com/Zc0n30M.png)


## Installation

 - Download all files on your web-server.
 - Go to the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/applications) and create a new application.
 - In your app dashboard, click on the "Edit Settings" button and add a new redirect URL to http://localhost/dashboard/connect.php, then click "save".
 - Update environment variables
 - To view your home temperature and humidity, you need to create a MySQL database with a table that contain three entries (one for the date (with a date time type with the default value at CURRENT_TIMESTAMP) one for temperature and one for humidity), then update the file getInfos.php with your database settings. You can update your database with the IOT sensor of your choice (in my case, an ESP8266 with a DHT22 sensor).
 - Go to [localhost/dashboard](http://localhost/dashboard/), connect with your Spotify, put your browser in full-screen with a scale of 175% and enjoy!


## Environment Variables

To run this project, you will need to edit the following environment variables to your main.js file (located in the js folder).

`SPOTIFY_CLIENT_ID` Can be found on your Spotify app dashboard.

`SPOTIFY_CLIENT_SECRET` Can be found on your Spotify app dashboard by clicking the "Show Client Secret" button.

`URL_METEO_SEMAINE` Replace 'le-havre' in the URL by your city name.

`URL_METEO_ACTUELLE` Replace YOUR_LAT and YOUR_LONG in the URL by the latitude and longitude of your location.

`METEO_VILLE` Replace it by your city name.

`NEWS_API_KEY` Replace it by your API Key. Get it on [newsapi.org](https://newsapi.org/).
## License

[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/legalcode/)


## Author

- [Maxime Sahuc](https://github.com/MaximeSahuc)

