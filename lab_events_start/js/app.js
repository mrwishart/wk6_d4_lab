const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Hello world!");
  const title = this.title.value;
  const author = this.author.value;
  const category = this.category.value;
  const injection = document.querySelector('#reading-list');

  // make book div
  const newBook = document.createElement("div");
  newBook.classList.add("book");

  // make 3 child divs (title, author, category)
  const newTitle = document.createElement("div");
  newTitle.classList.add("title");
  newTitle.textContent = title;
  const newAuthor = document.createElement("div");
  newAuthor.classList.add("author");
  newAuthor.textContent = author;
  const newCategory = document.createElement("div");
  newCategory.classList.add("category");
  newCategory.textContent = category;

  // attach children to book divs
  newBook.appendChild(newTitle);
  newBook.appendChild(newAuthor);
  newBook.appendChild(newCategory);

  // attach book div to injection point
  injection.appendChild(newBook);

}

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const submit = document.querySelector('form');
  submit.addEventListener('submit', handleSubmit);
})
