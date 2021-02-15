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
        ctx.fillStyle = 'blue';
        ctx.fillRect(0, 0, 50, 50);
        ctx.clearRect(25, 25, 25, 25);

        ctx.fillStyle = '#f3f169';
        ctx.fillRect(50, 50, 50, 50);
        ctx.clearRect(50, 50, 25, 25);

        ctx.fillStyle = 'purple';
        ctx.fillRect(100, 100, 50, 50);
        ctx.clearRect(125, 125, 25, 25);

        ctx.fillStyle = 'gray';
        ctx.fillRect(150, 150, 50, 50);
        ctx.clearRect(150, 150, 25, 25);

        ctx.fillStyle = 'green';
        ctx.fillRect(200, 200, 50, 50);
        ctx.clearRect(225, 225, 25, 25);

        ctx.fillStyle = 'pink';
        ctx.fillRect(250, 250, 50, 50);
        ctx.clearRect(250, 250, 25, 25);

        ctx.fillStyle = '#482ff7';
        ctx.fillRect(150, 0, 50, 50);
        ctx.clearRect(175, 25, 25, 25);

        ctx.fillStyle = '#2d6cdf';
        ctx.fillRect(200, 50, 50, 50);
        ctx.clearRect(200, 50, 25, 25);

        ctx.fillStyle = '#46c3db';
        ctx.fillRect(250, 100, 50, 50);
        ctx.clearRect(275, 125, 25, 25);

        ctx.fillStyle = '#581b98';
        ctx.fillRect(300, 150, 50, 50);
        ctx.clearRect(300, 150, 25, 25);

        ctx.fillStyle = '#9c1de7';
        ctx.fillRect(350, 200, 50, 50);
        ctx.clearRect(375, 225, 25, 25);

        ctx.fillStyle = '#22d1ee';
        ctx.fillRect(400, 250, 50, 50);
        ctx.clearRect(400, 250, 25, 25);
    </script>
</body>

</html>
