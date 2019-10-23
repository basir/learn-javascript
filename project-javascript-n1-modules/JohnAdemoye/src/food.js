// 4
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

// 5
exports.food = food;

// 7
export const getSpecials = () =>
  food.filter(
    food => food.startsWith('N') || food.endsWith('e') || food.includes('r')
  );
