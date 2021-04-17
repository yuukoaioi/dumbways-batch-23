function jumlahKata(kalimat) {
  let panajngKalimat = kalimat.length;
  let hurufBesar = 0;

  for (i = 0; i < panajngKalimat; i++) {
    if (kalimat[i] === kalimat[i].toUpperCase()) {
      hurufBesar++;
    }
  }
  return hurufBesar;
}

jumlahKata("PapaMakanJerukWaktuBuka");
