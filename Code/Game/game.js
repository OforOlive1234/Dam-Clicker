// Variables

var clicks = 0;
var auto_clicks = 0;
var auto_redeem = 0;
var auto_clicks_increment = 1;
var increment = 1;
var lvl = 1;
var lvl_upgrade_value = lvl*50;


// Functions

function oncl() {
    clicks += increment;
    textrefresh();
}

function checkauto() {
    if (auto_clicks == 0) {
        auto_clicks++;
        autocl();
        autorefresh();
    } else if (auto_clicks > 0) {
        alert("You need to level up before you can buy more.");
    } else {
        alert("The game seems to be experiencing some bugs.")
    }
}

function autocl() {
    setInterval(function () {
            clicks++;
            textrefresh();
        }, 1000);
}


function lvlup() {
    if (clicks >= lvl_upgrade_value) {
        lvl++;
    } else if (clicks < lvl_upgrade_value) {
        alert("You do not have enough points to level up!");
    }
    lvlrefresh();
}


function textrefresh() {
    document.getElementById("scoreDisplay").innerHTML=clicks+" Points";
}

function lvlrefresh() {
    document.getElementById("levelDisplay").innerHTML="Level "+lvl;
}

function autorefresh() {
    document.getElementById("autoDisplay").innerHTML="Autoclickers: "+auto_clicks;
}