// Variables

var clicks = 0;
var auto_clicks = 0;
var total_clicks = clicks + auto_clicks;
var auto_clicks_increment = 1000/auto_clicks;
var click_rate = 1000;
var increment = 1;
var lvl = 1;
var lvl_upgrade_value = lvl*50;


//Functions

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

function oncl() {
    clicks += increment;
    if (clicks >= lvl_upgrade_value) {
        lvl = lvl + 1;
    }
    textRefresh();
}

function textRefresh() {
    document.getElementById("scoreDisplay").innerHTML=total_clicks+" Points";
}

function autoClicker() {
    while (auto_clicks != 0) {
        await sleep(click_rate);
        auto_clicks += auto_clicks_increment;
    }
}