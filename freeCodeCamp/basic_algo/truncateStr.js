function truncateString(str, num) {
	// SOLUTION #1
	// var res = "";
	// if (str.length <= num) {
	// 	return str;
	// } else {
	// 	for (var i = 0; i < num; i++) {
	// 		res += str[i];
	// 	}
	// 	return res + "...";
	// }

	// SOLUTION #2 USING .slice(start index, how much do you want to take)
	if (str.length > num) {
		return str.slice(0, num) + "...";
	} else {
		return str;
	}
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11));
console.log(
	truncateString(
		"A-tisket a-tasket A green and yellow basket",
		"A-tisket a-tasket A green and yellow basket".length
	)
);
console.log(
	truncateString(
		"A-tisket a-tasket A green and yellow basket",
		"A-tisket a-tasket A green and yellow basket".length + 2
	)
);
console.log(truncateString("A-", 1));
console.log(truncateString("Absolutely Longer", 2));
