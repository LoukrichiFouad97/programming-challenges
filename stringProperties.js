// you have given an object show any string properties that object contains.

function showProperties(object) {
  for (const key in object) {
    if (typeof object[key] === "string") {
      console.log(object[key]);
    } else {
      console.log("not string");
    }
  }
}

const person = {
  name: "John",
  age: 34,
  address: "ras el ain",
};

showProperties(person);
