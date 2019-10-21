/* Require food array from food.js and log to console. */
const { food } = require("./food.js");
console.log("FOODS:");
console.log(food);
/* Imports the getSpecial function and log to console */
import { getSpecials } from "./food.js";
console.log("SPECIALS:");
console.log(getSpecials());
/* Import the class 'menu' from menu.js and add a new instance */
import menu from "./menu.js";
const newObject = new menu(food);
/* Prints all menu items to the console through the 'getAll' function */
console.log("MENU:");
newObject.getAll();
/* Imports the named export 'getVeg' and logs food to console */
import { getVeg } from "./menu.js";
console.log("VEGS:");
console.log(getVeg());
