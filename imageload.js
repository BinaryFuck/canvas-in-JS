<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <canvas id="c" width="500" height="500"></canvas>
    <script>
        var c = document.querySelector("#c");
        var ctx = c.getContext("2d");

        var image = new Image();
        image.onload = function() {
            console.log("Image Loading");
            ctx.drawImage(image, 0, 0, c.width, c.height);
            var saveImage = c.toDataURL();
            window.open(saveImage);

        }
        image.src = "load.jpg"
    </script>
</body>

</html>
