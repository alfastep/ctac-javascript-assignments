const addItemForm = document.querySelector('#addItem');
const addToDoButton = document.querySelector('#addToDo');
const toDoList = document.querySelector('ul');

function removeItems() {
  const li = document.querySelectorAll('li');
  li.forEach(element => {
    element.addEventListener('click', () => {
      element.remove();
    });
  });
}

removeItems();

addToDoButton.addEventListener('click', event => {
  event.preventDefault();
  const item = document.querySelector('#item').value;
  const newLi = document.createElement('li');
  newLi.innerHTML = `${item}`;
  newLi.className = 'list-group-item list-group-item-action ml-5 mr-5';
  toDoList.appendChild(newLi);
  addItemForm.reset();
  removeItems();
});
