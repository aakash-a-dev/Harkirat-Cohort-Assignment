/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  const lowerCaseStr = str.toLowerCase();

  // Define an array of vowels
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  // Initialize a variable to store the count of vowels
  let vowelCount = 0;

  // Iterate through each character in the string
  for (let i = 0; i < lowerCaseStr.length; i++) {
      // Check if the current character is a vowel
      if (vowels.includes(lowerCaseStr[i])) {
          // If it is, increment the vowel count
          vowelCount++;
      }
  }

  // Return the final count of vowels
  return vowelCount;
}

module.exports = countVowels;