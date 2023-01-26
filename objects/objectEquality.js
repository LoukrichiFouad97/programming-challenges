// create 2 functions that compare two objects
// first function areEquals, second function areSame

// constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

const address1 = new Address("main street", "main city", 28004);
const address2 = new Address("main street", "main city", 28004);

function areEquals(object1, object2) {
  for (let i in object1) {
    if (!i in object2) return "OBjects are not equal";

    return object1[i] === object2[i];
  }
}

function areSame(object1, object2) {
  return object1 === object2;
}

console.log(areEquals(address1, address2));
console.log(areSame(address1, address2));
