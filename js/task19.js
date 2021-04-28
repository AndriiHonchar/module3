// const products = [
//   { name: 'Радар', price: 1300, quantity: 4 },
//   { name: 'Сканер', price: 2700, quantity: 3 },
//   { name: 'Дроид', price: 400, quantity: 7 },
//   { name: 'Захват', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   const allPropValues = [];
//   for (const product of products) {
//     if (product.name === propName) {
//       allPropValues.push(product[propName]);
//       }
//   }
//   return allPropValues;
//    // Пиши код выше этой строки
// }

// console.log(getAllPropValues('quantity'));

const products = [
  { name: 'Радар', price: 1300, quantity: 4 },
  { name: 'Сканер', price: 2700, quantity: 3 },
  { name: 'Дроид', price: 400, quantity: 7 },
  { name: 'Захват', price: 1200, quantity: 9 },
];

function getAllPropValues(propName) {
  // Пиши код ниже этой строки
  const allPropValues = [];
  for (const product of products) {
  if (product[propName]) {
    allPropValues.push(product[propName]);
    // console.log(allPropValues);
    }
  }
   return allPropValues;
   // Пиши код выше этой строки
}

console.log(getAllPropValues('name'));