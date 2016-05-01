function letterChanges(str) {
  var vowels = ['a', 'e', 'i', 'o', 'u'],
      alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'],
      i = 0,
      newStr = '',
      az = -1;
  for (i = 0; i < str.length; i += 1) {
    az = alpha.indexOf(str.charAt(i));
    if (az < 0) {
      newStr += str.charAt(i);
      continue;
    }
    var newChar = alpha[az+1];
    if (vowels.indexOf(newChar) > -1) {
      newChar = newChar.toUpperCase();
    }
    newStr += newChar;
  }
  return newStr;
}
