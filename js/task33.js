// Пиши код ниже этой строки
function findMatches(firstArray, ...secondArray) {
  const matches = []; // Не изменяй эту строку
for (const item of secondArray) {
if (firstArray.includes(item)) {
matches.push(item);
}
}
  // Пиши код выше этой строки
  return matches;
}
