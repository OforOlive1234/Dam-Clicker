// Variables

var clicks = 0;
var auto_clicks = 0;
var auto_clicks_increment = 1000/auto_clicks;
var click_rate = 1000;
var increment = 1;
var lvl = 1;
var lvl_upgrade_value = lvl*50;


//Functions

function oncl() {
    clicks += increment;
    if (clicks >= lvl_upgrade_value) {
        lvl = lvl + 1;
    }
    textRefresh();
}

function textRefresh() {
    document.getElementById("scoreDisplay").innerHTML=clicks+" Points";
}