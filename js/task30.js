//   const completed = false;
//   const category = 'Общее';
// const priority = 'Обычный';
  
// function makeTask(data) {
//   const completed = false;
//   const category = 'Общее';
// const priority = 'Обычный';
  // Пиши код ниже этой строки
  // const {completed = false, category = 'Общее', priority = 'Обычный',} = data;
  // Пиши код выше этой строки
// }

// makeTask({ category: 'Финансы', text: 'Забрать проценты' });

// const {text, category:category = 'Общее', priority:priority = 'Обычный', completed = false}=data;
// const {text, category = 'Общее', priority = 'Обычный', completed =
//  false}  =data;

function makeTask(data) {
  const completed = false;
  const category = 'Общее';
  const priority = 'Обычный';
  // Пиши код ниже этой строки
return {category, priority, ...data, completed};
  // Пиши код выше этой строки
}