var par = document.getElementsByClassName("par");
setInterval(function () {
par[0].style.color = "white";
setTimeout(function () {
par[0].style.color = "#FFB830";
}, 500)
}, 1000)