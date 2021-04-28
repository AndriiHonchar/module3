const bookShelf = {
  books: ['Последнее королевство', 'Мгла', 'Страж снов'],
  updateBook(oldName, newName) {
    // Пиши код ниже этой строки
	const bookIndex = this.books.indexOf(oldName);
	this.books.splice(bookIndex, 1, newName);
	
    // Пиши код выше этой строки
  },
};