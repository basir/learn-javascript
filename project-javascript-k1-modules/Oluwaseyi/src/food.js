const food = [
  'Saffron',
  'Kale',
  'Clementine',
  'Peaches',
  'Nori',
  'Kobe',
  'Olive',
  'Rosemary'
];
exports.food = food;

export function getSpecials() {
  return food.filter(
    food => food.startsWith('K') || food.endsWith('e') || food.indexOf('r') >= 0
  );
}
