// Assignment code here
var resultEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var lowerEl = document.getElementById("lower");
var upperEl = document.getElementById("upper");
var numberEl = document.getElementById("number");
var symbolEl = document.getElementById("symbol");
var generateEl = document.getElementById("generate");

var char= "";

generateEl.addEventListener("click", function(e) {
  var length = lengthEl.value;
  var selLower = lowerEl.checked;
  var selUpper = upperEl.checked;
  var selNumber = numberEl.checked;
  var selSymbol = symbolEl.checked;

    if (selLower) {
      char += "abcdefghijklmnopqrstuvwxyz";
    }

    if (selUpper) {
      char += "ABCDEFGHIKJLMNOPQRSTUVWXYZ";
    }

    if (selNumber) {
      char += "1234567890";
    }

    if (selSymbol) {
      char += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
    }



    resultEl.value = genPassword(length,char);
  
  // console.log(passObj.passCharacters);
    }
);

function genPassword(length, char) {
  var pass = "";
  for (var i =0; i<parseInt(length); i++) {

    pass += char.charAt(Math.floor(Math.random() * char.length));
  }
  // debugger;
  var test = function () {
  if (lowerEl.checked) {
    var low = /[abcdefghijklmnopqrstuvxyz]/g;
    var result = pass.match(low);
    if (result == null) {
      genPassword(length, char);
    }
  }

  if (upperEl.checked) {
    var low = /[ABCDEFGHIJKLMNOPQRSTUVXYZ]/g;
    var result = pass.match(low);
    if (result == null) {
      genPassword(length, char);
    }
  }

  if (numberEl.checked) {
    var low = /[0123456789]/g;
    var result = pass.match(low);
    if (result == null) {
      genPassword(length, char);
    }
  }

  if (symbolEl.checked) {
    var low = /[!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    var result = pass.match(low);
    if (result == null) {
      genPassword(length, char);
    }
  }
}
  test()
  return pass;
}


// // resultEl.innerText = generatePassword ();
//  function generatePassword (selLower, selUpper, selNumber, selSymbol, length) {
//   if (length < 8) {
//     length = 8;
//   }
//   else if (length >128) {
//     length = 128;
//   }
//   else {return length;}

//   if (selLower) {
//     passObj.passCharacters += "abcdefghijklmnopqrstuvwxyz";
//   }

//   if (selUpper) {
//     passObj.passCharacters += "ABCDEFGHIKJLMNOPQRSTUVWXYZ";
//   }

//   if (selNumber) {
//     passObj.passCharacters += "1234567890";
//   }

//   if (selSymbol) {
//     passObj.passCharacters += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//   }
// }

// console.log(passObj.passCharacters);

// generatePassword();
// console.log(passObj.passCharacters);

// var generatedPassword = function () {
//   for (var i = 0; i <= length; i++) {
//     var randomPassword = Math.floor(Math.random() * passObj.passCharacters.length);
//     passObj.password += passObj.passCharacters.substring(randomPassword, randomPassword+1);
//   }
// }
// var generate = function () {
//   passObj.passLength = window.prompt("Please enter the desired length of your password. Minimum length of 8 and maximum length of 128 characters.");
//   if (passObj.passLength < 8 || passObj.passLength > 128 ) {
//     window.alert("invalid entry, please try again.");
//     generate ();
//   }
//   var passLower = window.confirm("do you want to include lowercase characters?");
//   if (passLower) {
//     passObj.passCharacters += "abcdefghijklmnopqrstuvwxyz";
//   }

//   var passUpper = window.confirm("do you want to include uppercase characters?");
//   if (passUpper) {
//     passObj.passCharacters += "ABCDEFGHIKJLMNOPQRSTUVWXYZ";
//   }

//   var passNum = window.confirm("do you want to include numbers?");
//   if (passNum) {
//     passObj.passCharacters += "1234567890"
//   }

//   var passSpecial = window.confirm("do you want to include special characters?")
//   if (passSpecial) {
//     passObj.passCharacters += "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
//   }
// }

// var passObj = {
//   password: "",
//   passCharacters: "",
//   passLength: ""
// }



// }

// var final = function(){
//   generate();
//   for (var i=0; i <= parseInt(passObj.passLength); i++) {
//     var randomPassword = Math.floor (Math.random()* parseInt(passObj.passCharacters.length));
//     passObj.password += passObj.passCharacters.substring(randomPassword, randomPassword+1 );
//     console.log(passObj.passCharacters);
//     console.log(randomPassword);
//     console.log(passObj.password);
//   }

// }

// final();

// // Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
