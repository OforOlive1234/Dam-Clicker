// Variables

var clicks = 0;
var auto_clicks = 0;
var click_rate = 1000;
var increment = 1;
var lvl = 1;
var lvl_upgrade_value = lvl*50;


//Functions

function oncl() {
    clicks += increment;
    if (clicks >= lvl_upgrade_value)
        lvl += 1;
    }
    textRefresh();
}

function textRefresh() {
    document.getElementById("scoreDisplay").innerHTML=clicks+" Points";
}

function lvlRefresh() {
        document.getElementById("levelDisplay").innerHTML=lvl;
}