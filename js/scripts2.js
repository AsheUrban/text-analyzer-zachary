// Utility Logic

function noInputtedWord() {
  for (let i=0; i < arguments.length; i++) {
    if (arguments[i].trim().length === 0) {
      return true;
    }
  }
  return false;
}
//Buisiness Logic

function pigLatinTranslator(text) {
  const pigLatin = text.split(" ");
  
}

function startsWith(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < 5; i++){
      if (word.charAt(0).toLowerCase() === vowels[i]) {
        return true;
        break;
      }
      else{
      }
  }
  return false;
}

//UI Logic
