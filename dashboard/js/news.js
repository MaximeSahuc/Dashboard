/* Copyright 30-12-2021 Maxime Sahuc */

function updateNews() {
    var request = new XMLHttpRequest();
    const url = "https://newsapi.org/v2/top-headlines?country=fr&apiKey=" + NEWS_API_KEY;

    request.onreadystatechange = function() 
    {
        if (this.readyState == 4 && this.status == 200) 
        {
            const jsonOBJ = JSON.parse(this.responseText);
            updateNews(jsonOBJ);
        }
    };
    
    request.open("GET", url, true);
    request.send();

    function updateNews(arr) {
        const articles = arr['articles'];
        var articleDiv = '<h3 id="alaune">À la une</h3>';

        if(arr.status == "ok"){
            const nombreMaxArticles = 6;
            var nombreArticles = 0;
            var i = 0;

            while (true) { 
                const article = articles[i];

                const source = article['source']['name'];
                const titre = article['title'];
                const urlImage = article['urlToImage'];

                if(source != null && titre != null && urlImage != null){
                    articleDiv +=   '<div class="article">' +
                                        '<h3 class="titre_article">' + source + '</h3>' +
                                        
                                        '<div class="info_article">' +
                                            '<h4 class="teaser_article">' + titre + '</h4>' +
                                            '<img src="' + urlImage + '" class="image_article"/>' +
                                        '</div>' +
                                    '</div>';

                    nombreArticles++;
                }

                i++;

                if(nombreArticles >=  nombreMaxArticles) {
                    break;
                }

            }
            document.getElementById("actus").innerHTML = articleDiv;

            // update toutes les 25 minutes
            setTimeout(updateNews, 1500000);
        }else{
            console.warn("Erreur (" + arr.status + "), nouvelle tentative dans 3 secondes.")
            setTimeout(updateNews, 3000);
        }
    }

}

setTimeout(updateNews, 0);