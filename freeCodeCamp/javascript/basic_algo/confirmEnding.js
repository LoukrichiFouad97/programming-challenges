function confirmEnding(str, target) {
	var negValueOfTarget = -Math.abs(target.length); // always returns negative value
	var slicedStr = str.slice(negValueOfTarget);

	if (slicedStr === target) {
		return true;
	} else {
		return false;
	}

	console.log(str.substr(-target.length));
}

confirmEnding("Bastian", "n");
confirmEnding("Congratulation", "on");
confirmEnding("Connor", "n");
confirmEnding(
	"Walking on water anda specification are easy if both are frozen",
	"specification"
);
confirmEnding("He has to givename", "name");
confirmEnding("Open sesame", "sametrue");
confirmEnding("Open sesame", "sagefalse");
confirmEnding("Open sesame", "gamefalse");
confirmEnding(
	"If you want to you must hurry. We dont know how much longer we can withstand the nothing",
	"mountain"
);
confirmEnding("Abstraction", "action");
