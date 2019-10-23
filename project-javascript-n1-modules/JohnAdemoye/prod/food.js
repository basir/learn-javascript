'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 4
var food = ['Saffron', 'Kale', 'Clementine', 'Peaches', 'Nori', 'Kobe', 'Olive', 'Rosemary'];

// 5
exports.food = food;

// 7
var getSpecials = exports.getSpecials = function getSpecials() {
  return food.filter(function (food) {
    return food.startsWith('N') || food.endsWith('e') || food.includes('r');
  });
};