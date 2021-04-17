let string = ["D", "U", "M", "B", "W", "A", "Y", "S", "I", "D"];

function cetak(num = 7, letterLine = 4, letterLength = 10) {
  let groupLine = 2;
  let outerLine = 0;
  for (i = 0; i < num; i++) {
    outerLine++;

    if (outerLine <= groupLine && outerLine !== letterLine) {
      let innerLine2 = "";

      for (k = 0; k < letterLength; k++) {
        if (k % 2 === 0) {
          innerLine2 += "=";
        }
        if (k % 2 === 1) {
          innerLine2 += "*";
        }
      }

      console.log(innerLine2);
    }

    if (outerLine === letterLine) {
      console.log(string.join(""));
    }

    if (outerLine > groupLine && outerLine !== letterLine) {
      let innerLine1 = "";

      for (j = 0; j < letterLength; j++) {
        if (j % 2 === 0) {
          innerLine1 += "*";
        }
        if (j % 2 === 1) {
          innerLine1 += "=";
        }
      }

      console.log(innerLine1);

      if (outerLine === 5) {
        outerLine = 0;
      }
    }
  }
}

cetak();
