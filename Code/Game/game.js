// Variables

var clicks = 0;
var auto_clicks = 0;
var auto_redeem = 0;
var auto_clicks_increment = 1;
var increment = 1;
var lvl = 1;
var lvl_upgrade_value = lvl * 50;
var auto_upgrade_value = lvl - 1;

// Functions

function oncl() {
  clicks += increment;
  textrefresh();
}

function checkauto() {
  if (auto_clicks == auto_upgrade_value) {
    auto_clicks++;
    autocl();
    autorefresh();
  } else {
    alert("No more autoclick for you, naughty Osacr");
  }
}

function autocl() {
  setInterval(function () {
    clicks++;
    textrefresh();
  }, 1000);
}

function checkincre() {
  if (increment == lvl) {
    increment++;
    increrefresh();
  } else if (increment != lvl) {
    alert("You need to level up before you can buy more.");
  } else {
    alert("The game seems to be experiencing some bugs.");
  }
}

function lvlup() {
  if (clicks >= lvl_upgrade_value) {
    lvl++;
    lvlrefresh();
  } else {
    alert("You do not have enough points to level up!");
  }
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
