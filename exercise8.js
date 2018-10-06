function pasanganTerbesar(num) {
  // you can only write your code here!
    var arr = num.toString().split('');
  var hasil = [];
  for (var i = 0; i < arr.length - 1; i++) {
    hasil[i] = Number(arr[i] + arr[i + 1]);
  }
  var terbesar_sementara= hasil[0];
  for (var j = 1; j < hasil.length; j++){
    if(hasil[j] > terbesar_sementara){
      terbesar_sementara = hasil[j];
    }
  }
  return terbesar_sementara;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99