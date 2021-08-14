function bubbleSort(arr) {
	var length = arr.length;
	for (var i = 0; i < length; i++) {
		for (var j = 0; j < length; j++) {
			if (arr[j] > arr[j + 1]) {
				var temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
}

function getIndexToIns(arr, num) {
	// sort the arry
	bubbleSort(arr);
	// arr.sort((a, b) => a - b);

	for (var i = 0; i < arr.length; i++) {
		if (arr[i] >= num) return i;
	}


	return arr.length;
}

// getIndexToIns([30, 55, 485, 10, 20, 40, 60], 30);
console.log(getIndexToIns([10, 20, 30, 40, 50], 35)); // should return 3.
// console.log(getIndexToIns([30, 55, 485, 10, 20, 40, 60], 30));
