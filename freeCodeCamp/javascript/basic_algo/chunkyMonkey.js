// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// 1 - Understand the problem
// you have given an array divid it into sub arrays using # size
// @desc a function that splits an array into groups
// @param {Array} the main array that will be split into sub arrays
// @param {Number} the length of the sub arrays
// @return {Array} 2D array

function chunkArrayInGroups(arr, size) {
	// 3 - Break it down
	// ** create an array to return it at the end
	// ** loop over the arr and divide it into small groups using size 
	// ** put all of the groups in a new array
	// ** return that array that contains all of the groups
	var newArr = [];
	var index = 0;

	while (index < arr.length) {
		newArr.push(arr.slice(index, index + size));
		index += size;
	}

	return newArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "e", "f"], 2));
// console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));

// 2 - Explore Examples
// chunkArrayInGroups(["a", "b", "c", "d"], 2) ==> [['a', "b"], ['b', "c"]]
// chunkArrayInGroups(["a", ["b", "c"], "d"], 2) ==> [['a', ['b', 'c']], 'd']
// chunkArrayInGroups(['a', 'b', 'c'], "") ==> ['a', 'b', 'c'] or undefined
// chunkArrayInGroups({}, "") ==> undefined

// 4 - simplify
// find the difficulty in what you are trying to do
// temp ignore it
// write simplified solutions
// incorporate it back in
