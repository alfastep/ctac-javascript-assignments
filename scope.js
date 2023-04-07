function outer() {
  let a = "hello";
  let b = {
    firstName: 'Stephen',
    lastName: 'Alfa'
  };
  console.log(a);
  console.log(b);

  function inner(a, b) {
    console.log(a);
    console.log(b);

    a = "goodbye";
    b = {
      firstName: 'Jane',
      lastName: 'Doe'
    };

    b.firstName = 'John';

    console.log(a);
    console.log(b);
  }

  inner(a, b);

  console.log(a);
  console.log(b);
}

outer();