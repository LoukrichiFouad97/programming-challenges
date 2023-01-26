const address = {
  street: "main street",
  city: "boston",
  zipCode: 28004,
};

function showAddress(address) {
  for (const key in address) {
    if (Object.hasOwnProperty.call(address, key)) {
      console.log(address[key]);
    }
  }
}

showAddress(address);
