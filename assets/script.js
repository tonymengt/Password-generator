// Assignment code here
var passObj = {
  password: "",
  passCharacters: "",
  passLength: ""
}

var generate = function () {
  passObj.passLength = window.prompt("Please enter the desired length of your password. Minimum length of 8 and maximum length of 128 characters.");
  if (passObj.passLength < 8 || passObj.passLength > 128 ) {
    window.alert("invalid entry, please try again.");
    generate ();
  }
  var passLower = window.confirm("do you want to include lowercase characters?");
  if (passLower) {
    passObj.passCharacters += "abcdefghijklmnopqrstuvwxyz";
  }

  var passUpper = window.confirm("do you want to include uppercase characters?");
  if (passUpper) {
    passObj.passCharacters += "ABCDEFGHIKJLMNOPQRSTUVWXYZ";
  }

  var passNum = window.confirm("do you want to include numbers?");
  if (passNum) {
    passObj.passCharacters += "1234567890"
  }

  var passSpecial = window.confirm("do you want to include special characters?")
  if (passSpecial) {
    passObj.passCharacters += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

}

var final = function(){
  generate();
  for (var i=0; i <= parseInt(passObj.passLength); i++) {
    var randomPassword = Math.floor (Math.random()* parseInt(passObj.passCharacters.length));
    passObj.password += passObj.passCharacters.substring(randomPassword, randomPassword+1 );
    console.log(passObj.passCharacters);
    console.log(randomPassword);
    console.log(passObj.password);
  }

}

final();

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
