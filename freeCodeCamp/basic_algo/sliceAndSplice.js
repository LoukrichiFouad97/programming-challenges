function frankenSplice(arr1, arr2, n) {
	//SOLUTION #1 USING FOR LOOP
	// var localArray = arr2.slice();
	// for (var i = 0; i < arr1.length; i++) {
	// 	localArray.splice(n, 0, arr1[i]);
	// 	n++;
	// }
	// return localArray;

	// SOLUTION #2 USING SPREAD OPERATOR
	var localArray = arr2.slice();
	localArray.splice(n, 0, ...arr1);

	return localArray;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
