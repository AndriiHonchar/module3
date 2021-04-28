// const values = Object.values(salaries);
//   for (let value of values) {
//   if (salaries.hasOwnProperties(value)) {
//   totalSalary+=value;
//   }
//   }
  
// const salaries = { mango: 100, poly: 150, alfred: 80 };

// function countTotalSalary(salaries) {
//   let totalSalary = 0;
//   // Пиши код ниже этой строки
//   // const totalValues = [];
//  // const values = Object.values(salaries);
//   for (let value in salaries) {
//   if (salaries.hasOwnProperty(value)) {
//   totalValues.push(value);
//     // totalSalary+=value;
//   }
//   }
//   // console.log(totalValues);
//   // for (const item of totalValues) {
//   // totalSalary+=item;
  
//   // Пиши код выше этой строки
//   return totalSalary;
// }



 function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
  // const totalValues = [];
 const values = Object.values(salaries);
  for (let value of values) {
  
  // totalValues.push(value);
    totalSalary+=value;

  }
  // console.log(totalValues);
  // for (const item of totalValues) {
  // totalSalary+=item;
  
  // Пиши код выше этой строки
  return totalSalary;
}

console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 }));

function countTotalSalary(salaries) {
  let totalSalary = 0;
  // Пиши код ниже этой строки
const values = Object.values(salaries);
  for (let value of values) {
  
 
    totalSalary+=value;

  }
  // Пиши код выше этой строки
  return totalSalary;
}