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

  // attach children to book divs

  // attach book div to injection point
  injection.appendChild(newBook);

}

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const submit = document.querySelector('form');
  submit.addEventListener('submit', handleSubmit);
})
