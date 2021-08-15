// function uniqueStr(str) {
// 	var convertedStr = Array.from(new Set(str.split(""))).toString();
// 	var x = convertedStr.split(",").join("").toLowerCase();
// 	return x;
// }

function mutation(arr) {
	// var uniqueFirstElement = uniqueStr(arr[0]);
	// var uniqueSecondElement = uniqueStr(arr[1]);
	// var firstElementLength = arr[0].length;
	// var secondElementLength = arr[1].length;
	// var result = [];

	// for (var i = 0; i < firstElementLength; i++) {
	// 	for (let j = 0; j < secondElementLength; j++) {
	// 		if (uniqueFirstElement[i] == uniqueSecondElement[j]) {
	// 			result.push(uniqueFirstElement[i]);
	// 		}
	// 	}
	// }

	// if (result.length == secondElementLength) {
	// 	return true;
	// } else {
	// 	return false;
	// }

	var test = arr[1].toLowerCase();
	var target = arr[0].toLowerCase();

	for (var i = 0; i < test.length; i++) {
		if (target.indexOf(test[i]) < 0) return false;
	}
	return true;
}

mutation(["floor", "for"]);
