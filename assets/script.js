
var resultEl = document.getElementById("password");
var lengthEl = document.getElementById("length");
var lowerEl = document.getElementById("lower");
var upperEl = document.getElementById("upper");
var numberEl = document.getElementById("number");
var symbolEl = document.getElementById("symbol");
var generateEl = document.getElementById("generate");

var selLower = "abcdefghijklmnopqrstuvwxyz";
var selUpper = "ABCDEFGHIKJLMNOPQRSTUVWXYZ";
var selNumber = "1234567890";
var selSymbol = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

generateEl.addEventListener("click", function() {
  var char = "";
  var length = lengthEl.value;
  
  (lowerEl.checked) ? char += selLower: "";
  (upperEl.checked) ? char += selUpper : "";
  (numberEl.checked) ? char += selNumber :"";
  (symbolEl.checked) ? char += selSymbol :"";

  resultEl.value = genPassword(length,char);
});

function genPassword(length, char) {
  if (length <8 || length > 128) {
    alert("invalid entry please enter number between 8 to 128.");
    return pass = "";
  }
  var pass = "";
  var countReq= lowerEl.checked + upperEl.checked + numberEl.checked + symbolEl.checked;
    if (lowerEl.checked) {
      pass += selLower.charAt(Math.floor(Math.random() * selLower.length));
    } else {"";}
    if(upperEl.checked) {
      pass += selUpper.charAt(Math.floor(Math.random() * selUpper.length));
    } else {"";}
    if(numberEl.checked) {
      pass += selNumber.charAt(Math.floor(Math.random() * selNumber.length));
    } else {"";}
    if (symbolEl.checked) {
      pass += selSymbol.charAt(Math.floor(Math.random() * selSymbol.length));
    } else {"";}
 
    for (var i =0; i<length-countReq; i++) {
      pass += char.charAt(Math.floor(Math.random() * char.length));
    }

  return pass; 
}
