import { food, getSpecials } from './food';
import menu, { getVeg } from './menu';

// 6
console.log(food);

// 8
console.log(getSpecials());

// 12
var myMenu = new menu(['Saft', 'Pfirsich', 'Schokolade']);
myMenu.getAll(); // 13

// 14
console.log(getVeg());
