function repeatStringNumTimes(str, num) {
	// SOLUTION #1 USING IF CONDITION AND FOR LOOP
	// var res = "";
	// if (num <= 0) {
	// 	return "";
	// } else {
	// 	for (var i = 0; i < num; i++) {
	// 		res += str;
	// 	}
	// 	console.log(res);
	// }

	// SOLUTION #2 USING WHILE LOOP
	var accumelatedStr = "";
	while (num > 0) {
		accumelatedStr += str;
		num--;
	}
	return accumelatedStr;

	// SOLUTION #3 USING RECURSION
	// if (num < 1) {
	// 	return "";
	// } else {
	// 	return str + repeatStringNumTimes(str, num - 1);
	// }

	// SOLUTION #4 USING TERNARY OPERATOR
	// return num > 0 ? str + repeatStringNumTimes(str, num - 1) : "";
}

repeatStringNumTimes("abc", 3);
console.log(repeatStringNumTimes("sd", 3));
