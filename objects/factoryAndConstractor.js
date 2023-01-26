// create a new address object with factory and constructor function

// constructor function
function Address(street, city, zipCode) {
  this.street = street;
  this.city = city;
  this.zipCode = zipCode;
}

// factory function
function address(street, city, zipCode) {
  return {
    street,
    city,
    zipCode,
  };
}

const constructorAddress = new Address("main street", "main city", 28004);
const factoryAddress = address("main street", "main city", 28004);

console.log(constructorAddress);
console.log(factoryAddress);
