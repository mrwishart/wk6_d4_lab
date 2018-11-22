const handleSubmit = (event) => {
  event.preventDefault();
  console.log("Hello world!");
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  const submit = document.querySelector('form');
  submit.addEventListener('submit', handleSubmit);
})
