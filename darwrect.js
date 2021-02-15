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
        ctx.strokeRect(50, 50, 50, 50);
        ctx.fillRect(100, 100, 50, 50);
        ctx.strokeRect(150, 150, 50, 50);
        ctx.fillRect(200, 200, 50, 50);
    </script>
</body>

</html>
