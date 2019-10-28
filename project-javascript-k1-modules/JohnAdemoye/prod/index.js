'use strict';

var _food = require('./food');

var _menu = require('./menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// 6
console.log(_food.food);

// 8
console.log((0, _food.getSpecials)());

// 12
var myMenu = new _menu2.default(['Saft', 'Pfirsich', 'Schokolade']);
myMenu.getAll(); // 13

// 14
console.log((0, _menu.getVeg)());