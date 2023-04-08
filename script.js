// Assignment Code
var characters = "!@#$%^&*()";
var numbers = "1234567890";
var lowercase = "abcdefghijklmnopqrstuvwzyx";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var generateBtn = document.querySelector("#generate");
var possibleChars = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
};

function generatePassword() {
  var userInput = prompt("How long would you like the password to be? Please choose between 8 and 128 characters.")
  if (!userInput) {
    return "Try Again";
   } else if (userInput > 7 && userInput <129) {
    var isLowercase = window.confirm("Would you like lowercase characters in your password?")
    if(isLowercase) {
      // if user wants lowercase characters, add them to possible characters
      possibleChars = possibleChars.concat(lowercase);
    }
    var isUppercase = window.confirm("Would you like uppercase characters in your password?") 
    if(isUppercase) {
      possibleChars = possibleChars.concat(uppercase);
    }
    var isNumbers = window.confirm("Would you like to have numbers in your password?") 
    if(isNumbers) {
      possibleChars = possibleChars.concat(numbers);
    }
    var isCharacters = window.confirm("Would you like to have special characters in your password?") 
    if(isCharacters) {
      possibleChars = possibleChars.concat(characters);
    }

    console.log(lowercase.charAt(0));

    // generate the password
    var password = ""
    for (let i = 0; i < userInput; i++) {
      password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
      //inside loop, get random character from possibleChars and add it to password

    }
    // loop for password length (ex if userInput is 9, loop 9 times)


    //after loop is done, return password

    return password


   } else {
    return generatePassword()
   }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


