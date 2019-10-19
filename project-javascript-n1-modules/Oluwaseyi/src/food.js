const food = ['Saffron', 'Kale', ' Clementine', 'Peaches','Nori','Kobe','Olive','Rosemary'];
module.exports = food;
export function getSpecials(arrayName) {
      let filteredArray = arrayName.filter(arrayItems => {
            if(arrayItems[0]==='K' || arrayItems[arrayItems.length -1]==='e' || arrayItems.indexOf('r') !== -1){
                return arrayItems
                };
            });

        }
