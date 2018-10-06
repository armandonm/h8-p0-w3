function angkaPalindrome(n) {
  // you can only write your code here!
     var digits = [];
    var m = n;
    while (m > 0) {
        digits.unshift(m % 10);
        m = Math.trunc(m / 10);
    }

    var carryFlag = false;
    var midPoint = Math.floor(digits.length / 2);

    for (var i = 0; i < digits.length; i++) {
        var copyFrom = digits[i];
        var copyTo = digits[digits.length - 1 - i] + carryFlag;
        if (copyTo === 10) {
            digits[digits.length - 1 - i] = 0;
            carryFlag = true;
        }
        else {
            var digit = (i < midPoint) ? copyFrom : copyTo;
            carryFlag = copyTo > digit;
            digits[i] = digits[digits.length - 1 - i] = digit;
        }
    }

    return digits.reduce((acc, next) => 10 * acc + next, 0);
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001