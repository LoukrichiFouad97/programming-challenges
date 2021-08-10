function titleCase(str) {
	var list = str.split(" ");
	var res = [];

	for (var i = 0; i < list.length; i++) {
		var lowered = list[i].toLowerCase();
		var cap = lowered.charAt(0).toUpperCase() + lowered.slice(1);
		res.push(cap);
	}

	return res.join(" ");
}

titleCase("I'm a little tea pot");
