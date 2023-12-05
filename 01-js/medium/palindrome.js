/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
  */

  function isAlphanumeric(char) {
    return /[a-zA-Z0-9]/.test(char);
  }

function isPalindrome(str) {
  var start = 0;
  var end = str.length - 1;

  while (start <= end) {
    // Find the next valid starting character
    while (!isAlphanumeric(str[start]) && start <= end) {
      start++;
    }

    // Find the next valid ending character
    while (!isAlphanumeric(str[end]) && start <= end) {
      end--;
    }

    // Check if characters are equal (case-insensitive)
    if (str[start] && str[end] && str[start].toLowerCase() !== str[end].toLowerCase()) {
      return false;
    }

    start++;
    end--;
  }


  return true;
}

module.exports = isPalindrome;
