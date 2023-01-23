function drowStars(n) {

}

function showStars(rows) {
  for (var i = 1; i <= rows; i++) {
    let stars = "";
    for (var j = 0; j < i; j++) {
      stars += "*";
    }
    console.log(stars);
  }
}


showStars(10)
