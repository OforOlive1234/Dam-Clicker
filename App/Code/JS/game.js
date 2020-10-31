// Variables

var clicks = 0;
var auto_clicks_increment = 1000/clicks;
var click_rate = 1000;
var increment = 1;
var lvl = 1;
var lvl_upgrade_value = lvl*50;


//Functions

function oncl() {
    clicks += increment;
    textRefresh();
}

function autocl() {
    clicks += auto_clicks_increment;

}

function textRefresh() {
    document.getElementById("scoreDisplay").innerHTML=clicks+" Points";
}