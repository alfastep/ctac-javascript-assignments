function Person(firstName, lastName, favoriteColor, favoriteNumber, favoriteFoods) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.favoriteColor = favoriteColor;
  this.favoriteNumber = favoriteNumber;
  this.favoriteFoods = favoriteFoods;
  this.family = [];
}

Person.prototype.fullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

Person.prototype.toString = function () {
  return `${this.fullName()}, Favorite Color: ${this.favoriteColor}, Favorite Number: ${this.favoriteNumber}`;
};

Person.prototype.addToFamily = function (person) {
  if (person instanceof Person && !this.family.includes(person)) {
    this.family.push(person);
  }
  return this.family.length;
};

let peter = new Person("Peter", "Oleary", "Green", 42, ['pasta', 'pizza']);
console.log(peter.fullName());
console.log(peter.toString());

let andrew = new Person("Andrew", "Oleary", "Blue", 39, ['hamburger', 'fries']);
console.log(andrew.fullName());
console.log(andrew.toString());

let john = new Person("John", "Oleary", "Orange", 37, ['cookies', 'bread']);
console.log(john.fullName());
console.log(john.toString());

console.log(peter.addToFamily(andrew));
console.log(peter.addToFamily(john));
console.log(peter.addToFamily(peter));

console.log(andrew.addToFamily(john));
console.log(andrew.addToFamily(peter));
console.log(andrew.addToFamily(andrew));

console.log(john.addToFamily(andrew));
console.log(john.addToFamily(peter));
console.log(john.addToFamily(john));
