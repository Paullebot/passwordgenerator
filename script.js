var generateBtn = document.querySelector('#generate');
  console.log(generateBtn);

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

//password selects from arrays
var numbersArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var lettersArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
var specialCharactersArr = ['!', '@', "#", '$', '%', '^', '&', '*', '-', '+', '?'];

function generatePassword() {
  var newPassword = '';
  var finalArr = [];

  // length prompt
   var lengthPassword = prompt(
    'Pick a number of characters for your password between 8 and 128'
    );

  // y/n prompts
  var criteriaLower = prompt('Use lowecase? y/n');
    console.log(criteriaLower);
  var criteriaUpper = prompt('Use uppercase? y/n');
    console.log(criteriaUpper);
  var criteriaNum = prompt('Use numbers? y/n');
    console.log(criteriaNum);
  var criteriaSpecial = prompt('Use special characters? y/n');
  console.log(criteriaSpecial);

  //list of criteria
  var criteriaList = {
    lower: criteriaLower,
    upper: criteriaUpper,
    number: criteriaNum,
    special: criteriaSpecial,
  };

  // If'n' for all
  if (
    criteriaLower === 'n' &&
    criteriaUpper === 'n' &&
    criteriaNum === 'n' &&
    criteriaSpecial === 'n'   
  ) {
    alert('You need to answer y to at least one criterion!');
    return;
  }

    // If user enters yes for numbers
    if (criteriaNum === 'y') {
      finalArr = finalArr.concat(numbersArr);
      var randomNum = numbersArr[Math.floor(Math.random() * numbersArr.length)];
      newPassword += randomNum;
    }
  
    // If user enters yes for special characters
    if (criteriaSpecial === 'y') {
      finalArr = finalArr.concat(specialCharactersArr);
      var randomSpeChar =
        specialCharactersArr[
          Math.floor(Math.random() * specialCharactersArr.length)
        ];
      newPassword += randomSpeChar;
    }

  // If user enters yes for uppercase
    if (criteriaUpper === 'y') {
    var uppercaseLettersArr = lettersArr.map(letter => letter.toUpperCase());
    finalArr = finalArr.concat(uppercaseLettersArr);
    var randomUpper =
      uppercaseLettersArr[
        Math.floor(Math.random() * uppercaseLettersArr.length)
      ];
    newPassword += randomUpper;
  }

    // If user enter yes for lowercase
    if (criteriaLower === 'y') {
      finalArr = finalArr.concat(lettersArr);
      var randomLower = lettersArr[Math.floor(Math.random() * lettersArr.length)];
      newPassword += randomLower;
    }
    var remainingLength = lengthPassword - newPassword.length;
    for (var i = 0; i < remainingLength; i++) {
      var randomPasswordString =
        finalArr[Math.floor(Math.random() * finalArr.length)];
      newPassword += randomPasswordString;
    }

  console.log(newPassword);
  return newPassword;
}

// event listener for button
generateBtn.addEventListener('click', writePassword);