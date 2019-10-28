"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSpecials = getSpecials;
var food = ["Saffron", "Kale", "Clementine", "Peaches", "Nori", "Kobe", "Olive", "Rosemary"];
exports.food = food;

function getSpecials() {
  return food.filter(function (food) {
    return food.startsWith("K") || food.endsWith("e") || food.indexOf("r") >= 0;
  });
}