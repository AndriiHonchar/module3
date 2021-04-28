function countProps(object) {
  let propCount = 0;
  // Пиши код ниже этой строки
const keys = Object.keys(object);
  for (const key of keys) {
  if (object.hasOwnProperty) {
  propCount = keys.length;
  }
  }
  // Пиши код выше этой строки
  return propCount;
}


function countProps(object) {
  // Пиши код ниже этой строки
  let propCount = 0;

  for (const key in object) {
    if (object.hasOwnProperty(key)) {
      propCount += 1;
    }
  }

  return propCount;
  // Пиши код выше этой строки
}