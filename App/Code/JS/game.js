// Variables

var clicks = 0;
var auto_clicks = 0;
var click_rate = 1000;
var increment = 1;
var lvl = 1;


//Functions

function oncl() {
    score += increment;
    textRefresh();
}

function textRefresh() {
    document.getElementById("scoreDisplay").innerHTML=clicks+" Points";
}

function lvlRefresh() {
        document.getElementById("levelDisplay").innerHTML="Level "+lvl;
}