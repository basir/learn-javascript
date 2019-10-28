// 9
export default class menu {
  // 10
  constructor(items) {
    this.items = items;
  }

  // 11
  getAll() {
    this.items.forEach(item => console.log(item));
  }
}

export const getVeg = () => {
  const vegFood = ['carrots', 'tomatoes', 'cabbage'];
  return vegFood;
};
