function longestWord(sen) {
  var re = /[^a-z\s]/gi,
    newSen = sen.replace(re, ''),
    arr = newSen.split(' '),
    i = 0,
    max = arr[0];
  for (i = 0; i < arr.length; i += 1) {
    if (arr[i].length > max.length) {
      max = arr[i];
    }
  }
  return max;
}
