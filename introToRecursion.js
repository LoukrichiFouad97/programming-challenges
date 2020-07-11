function factorial(num) {
	if (num === 0) {
		return 1;
	} else {
		return num * factorial(num - 1);
	}
}

factorial(5); // => 120 = 1 x 2 x 3 x 4 x 5
