/**
 * Created by Elena on 12.12.2015 г..
 */
(function () {
    var canvas = document.getElementById("js-worship");
    var ctx = canvas.getContext("2d");

    ctx.font = "30px Tahoma";
    ctx.fillText("I love JavaScript", 10, 50);

    //ctx.fillStyle = "#f1da4e";
    ctx.fillStyle = 'rgb(241,218,78)';
    ctx.fillRect(50, 80, 135, 135);

    //ctx.fillStyle = "#000";
    ctx.fillStyle = 'black';
    ctx.font = "bold 80px Arial narrow";
    ctx.fillText("JS", 100, 200);
})();
