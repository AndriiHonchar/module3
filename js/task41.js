// const atTheOldToad = {
//   potions: [
//     { name: 'Зелье скорости', price: 460 },
//     { name: 'Дыхание дракона', price: 780 },
//     { name: 'Каменная кожа', price: 520 },
//   ],
//   // Пиши код ниже этой строки
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(potionName) {
//     if (this.potions.includes(potionName)) {
//       return `Зелье ${potionName} уже есть в инвентаре!`;
//     }

//     this.potions.push(potionName);
//   },
//   removePotion(potionName) {
//     for (const potion of potions) {
//       if (potion.name === potionName) {

//       }
//     }

//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Зелья ${oldName} нет в инвентаре!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Пиши код выше этой строки
// };

// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion());


const atTheOldToad = {
  potions: [
    { name: 'Зелье скорости', price: 460 },
    { name: 'Дыхание дракона', price: 780 },
    { name: 'Каменная кожа', price: 520 },
  ],
  // Пиши код ниже этой строки
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
    if (potion.name === newPotion.name) {
      return `Зелье ${newPotion} уже есть в инвентаре!`;
    }
  }
  this.potions.push(newPotion);
  },
  removePotion(potionName) {
    for (let i = 0; i < this.potions.length; i+=1) {
    if (this.potions[i].name === potionName) {
      this.potions.splice(i, 1);
    }
  }
  return `Зелья ${potionName} нет в инвентаре!`;
  },
  updatePotionName(oldName, newName) {
    for (let i = 0; i < this.potions.length; i+=1) {
    if (this.potions[i].name === oldName) {
      this.potions[i].name = newName;
    }
  }
      return `Зелья ${oldName} нет в инвентаре!`;
  },
  // Пиши код выше этой строки
};

console.table(atTheOldToad.getPotions());

atTheOldToad.addPotion({ name: 'Невидимка', price: 620 });

atTheOldToad.removePotion('Зелье скорости');

atTheOldToad.updatePotionName('Дыхание дракона', 'Полиморф');
