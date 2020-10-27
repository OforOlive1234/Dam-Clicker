// Variables

var clicks = 0;
var auto_clicks = 0;
var click_rate = 1000;
var lvl = 1;


//Functions

function oncl() {
    score += lvl;
    textRefresh();
}

function textRefresh() {
    document.getElementById("scoreDisplay").innerHTML=clicks+" Points";
}