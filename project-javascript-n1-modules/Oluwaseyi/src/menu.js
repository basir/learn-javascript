class menu {
  constructor(items) {
    this._items = items;
  }
  getAll() {
    this._items.forEach(arrayItems => {
      console.log(arrayItems);
    });
  }
}
export default menu;
export function getVeg() {
  const vegFood = ["cabbage", "lettuce", "cucumber"];
  return vegFood;
}
