const users = [
  {
    id: 1,
    name: 'John',
    email: 'john@mail.com'
  },
  {
    id: 2,
    name: 'Jane',
    email: 'jane@mail.com'
  },
  {
    id: 3,
    name: 'Lon',
    email: 'lon@mail.com'
  },
  {
    id: 4,
    name: 'Lane',
    email: 'lane@mail.com'
  },
];

function fetchUserById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find(user => user.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(`User with ID ${id} does not exist`);
      }
    }, 1000);
  });
}

fetchUserById(1)
  .then(user => console.log(user))
  .catch(error => console.log(error));

fetchUserById(2)
  .then(user => console.log(user))
  .catch(error => console.log(error));

// Test example just to see if the error would correctly log to the console.
fetchUserById(8)
  .then(user => console.log(user))
  .catch(error => console.log(error));



