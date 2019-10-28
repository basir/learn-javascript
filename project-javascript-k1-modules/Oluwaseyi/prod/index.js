"use strict";

var _food = require("./food.js");

var _menu = require("./menu.js");

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* Require food array from food.js and log to console. */
var _require = require("./food.js"),
    food = _require.food;

console.log("FOODS:");
console.log(food);
/* Imports the getSpecial function and log to console */

console.log("SPECIALS:");
console.log((0, _food.getSpecials)());
/* Import the class 'menu' from menu.js and add a new instance */

var newObject = new _menu2.default(food);
/* Prints all menu items to the console through the 'getAll' function */
console.log("MENU:");
newObject.getAll();
/* Imports the named export 'getVeg' and logs food to console */

console.log("VEGS:");
console.log((0, _menu.getVeg)());