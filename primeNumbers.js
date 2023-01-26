function showPrimes(limit) {
  const composite = [];
  const primes = [];

  for (var i = 2; i <= limit; i++) {
    let isPrime = true;
    for (var j = 2; j < limit; j++) {
      if (i % j === 0) {
        isPrime = false;
        break;
      }
    }
  }

  //   console.log(composite);
  console.log(primes);
}

showPrimes(20);
