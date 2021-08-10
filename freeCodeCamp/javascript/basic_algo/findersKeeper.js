function findElement(arr, func) {
	// SOLUTION #1 USING FOR LOOP
	// for (var i = 0; i < arr.length; i++) {
	// 	if (func(arr[i])) {
	// 		return arr[i];
	// 	}
	// }
	// return undefined;

	// SOLUTION #2 USING FIND METHOD
	// return arr.find(func);

	// SOLUTION #3 USING Map() & IndexOf() methods
	return arr[arr.map(func).indexOf(true)];
}

// findElement([1, 2, 3, 4], (num) => num % 2 === 0);
console.log(findElement([1, 2, 3], (num) => num % 2 === 0));
