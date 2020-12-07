// Variables

var clicks = 0;
var auto_clicks = 0;
var auto_redeem = 0;
var auto_clicks_increment = 1;
var increment = 1;
var lvl = 1;
var lvl_upgrade_value = 50;

var auto_cost = auto_clicks * 10;
var incre_cost = increment * 15;

// Functions

function oncl() {
  clicks += increment;
  textrefresh();
}

function checkauto() {
  if (clicks >= auto_cost) {
    auto_clicks++;
    autocl();
    autorefresh();
  } else if (auto_clicks >= lvl) {
    alert("You need to level up before you can buy more.");
  } else {
    alert("The game seems to be experiencing some bugs.");
  }
}

function autocl() {
  setInterval(function () {
    clicks++;
    textrefresh();
  }, 1000);
}

function checkincre() {
  if (clicks >= incre_cost) {
    increment++;
    increrefresh();
  } else {
    alert("The game seems to be experiencing some bugs.");
  }
}

function lvlup() {
  if (clicks >= lvl_upgrade_value) {
    lvl++;
    lvlrefresh();
    lvlupgradeupdate();
  } else {
    alert("You do not have enough points to level up!");
  }
}

function lvlupgradeupdate() {
  lvl_upgrade_value = lvl_upgrade_value * 2;
}

function textrefresh() {
  document.getElementById("scoreDisplay").innerHTML = clicks + " Points";
}

function lvlrefresh() {
  document.getElementById("levelDisplay").innerHTML = "Level " + lvl;
}

function autorefresh() {
  document.getElementById("autoDisplay").innerHTML =
    "Autoclickers: " + auto_clicks;
}

function increrefresh() {
  document.getElementById("increDisplay").innerHTML =
    "Click Increment: " + increment;
}
