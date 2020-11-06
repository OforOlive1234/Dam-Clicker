// Variables

var clicks = 0;
var auto_clicks = 0;
var auto_clicks_increment = 1;
var increment = 1;
var lvl = 1;
var lvl_upgrade_value = lvl*50;


//Functions

function oncl() {
    clicks += increment;
    textRefresh();
}

function autocl() {
    setInterval(function () {
            clicks++;
            textRefresh();
        }, 1000);
}


function textRefresh() {
    document.getElementById("scoreDisplay").innerHTML=clicks+" Points";
}