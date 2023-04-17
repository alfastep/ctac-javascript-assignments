const list = document.querySelector('#list');

Array.from(list.children).forEach(element => {
  if (element.innerHTML === 'Apples') {
    element.innerHTML = 'Granny Smith Apples';
  }

  if (element.innerHTML === 'Oat Milk') {
    element.remove();
  }
});

const kombucha = document.createElement('li');
kombucha.innerHTML = 'Kombucha';

list.appendChild(kombucha);

Array.from(list.children).forEach(element => element.remove());

const newList = ['protein bars', 'almonds', 'peanut butter'];

newList.forEach(element => {
  const newItem = document.createElement('li');
  newItem.innerHTML = element;
  list.appendChild(newItem);
});

Array.from(list.children).forEach(element => {
  if (element.innerHTML === 'almonds') {
    element.className = 'important';
  }
});