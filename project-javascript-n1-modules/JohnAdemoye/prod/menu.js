'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 9
var menu = function () {
  // 10
  function menu(items) {
    _classCallCheck(this, menu);

    this.items = items;
  }

  // 11


  _createClass(menu, [{
    key: 'getAll',
    value: function getAll() {
      this.items.forEach(function (item) {
        return console.log(item);
      });
    }
  }]);

  return menu;
}();

exports.default = menu;
var getVeg = exports.getVeg = function getVeg() {
  var vegFood = ['carrots', 'tomatoes', 'cabbage'];
  return vegFood;
};