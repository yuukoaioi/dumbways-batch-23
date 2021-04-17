var data = [
  ["T", "S", "Q", "P", "R"],
  ["W", "U", "V"],
];

var datalain = [
  ["M", "L", "O", "N"],
  ["T", "S", "Q", "P", "R"],
  ["W", "U", "V"],
];

function sort(d) {
  for (i = 0; i < d.length; i++) {
    for (j = 0; j < d[i].length; j++) {
      d[i].sort();
    }
  }

  for (k = 0; k < d.length; k++) {
    d.sort((a, b) => a.length - b.length);
  }
}

sort(data);
sort(datalain);

data;
// datalain;
