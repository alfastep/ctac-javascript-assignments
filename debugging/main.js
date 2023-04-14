// Changed up the structure of each object in the array
const storeOwners = [
  {
    name: "charles",
    stores: 1,
    location: null
  },
  {
    name: "sally",
    stores: 1,
    location: null
  },
  {
    name: "cassandra",
    stores: 1,
    location: null
  },
  {
    name: "Danny Shavez",
    stores: 1,
    location: "in NM"
  }
];


// const listNumberOfStores = function () {
//   for (let i = 0; i < storeOwners.length; i++) {
//     let totalLocations = totalLocations + i;
//   }
//   return i;
// };

// let locations = listNumberOfStores;

// Not sure if this function is supposed to be used
function tellMeMyStores() {
  console.log("Hey, can you tell me how many stores you have?");
  if (locations > 0) {
    console.log("Of course, we have " + totalLocations + " stores");
  }
}

function hasStore() {
  console.log("Hey, can you tell me who owns stores?")
  storeOwners.forEach((storeOwner) => {
    if (storeOwner.location !== null) {
      console.log("Yes, " + storeOwner.name + " that lives " + storeOwner.location + " owns one too.");
    } else {
      console.log("Yes, " + storeOwner.name + " has one");
    }
  });


  // for (let i = 0; i < 2; i++) {
  //   people = Object.keys(storeOwners);
  //   console.log(storeOwners);
  //   let person = people.toString();
  //   console.log("Yes, " + person + " has one");
  // }
}

// tellMeMyStores();
hasStore();

// let man = Object.keys(storeOwners[2]);
// let mister = man[2];

// let whereHeLives = mister.location;
// console.log("Yes, " + mister + " that lives " + whereHeLives + " owns one too.");