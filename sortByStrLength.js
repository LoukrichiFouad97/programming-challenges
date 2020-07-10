function sortByLength(arr) {
	const sortedArray = arr.sort((a, b) => a.length - b.length);

	// console.log(sortedArray);
	return sortedArray;
}

sortByLength(["Google", "Apple", "Microsoft"]);
sortByLength(["Leonardo", "Michelangelo", "Raphael", "Donatello"]);
sortByLength(["Turing", "Einstein", "Jung"]);
sortByLength(["Tatooine", "Hoth", "Yavin", "Dantooine"]);
sortByLength(["Mario", "Bowser", "Link"]);

/**
 * ➞ ["Apple", "Google", "Microsoft"]
 */
