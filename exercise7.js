function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  var kalimatSplit= kalimat.split(' ')
  
  var result =0;
  for (var i =0; i < kalimatSplit.length; i++){
    result +=1;
  }
  return result;
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5