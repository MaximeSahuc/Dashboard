<!-- Copyright 30-12-2021 Maxime Sahuc -->

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="index.css"/>
    <script src="js/main.js"></script>
    <title>Connect</title>
</head>
<body>
    <script>
        var token = window.location.hash.split("=")[1].split("&")[0];
        console.log("token: " + token);

        var url = BASE_URL + "/main.php?token=" + token;
        window.location.replace(url);
    </script>
</body>
</html>