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
  const english = text.split(" ");
  let currentWord = " ";
  english.forEach(function(element) {
    if(startsWith(element)){
      currentWord = element + "w";
    }
    else if(element.charAt(0).toLowerCase() === "q" && element.charAt(1).toLowerCase() === "u") {
      currentWord = element.slice(2) + "qu";
    }
    else {
    }
    console.log(currentWord);
    return currentWord;
  });
}

function notVowel(word) {
  const vowels = ["a", "e", "i", "o", "u", "q"];
  let constStr = "";
  let stop = 0;
    for (let letter = 0; letter < word.length && stop === 0; letter++){
      for (let vowel = 0; vowel < 6; vowel++){
        if (word.charAt(letter).toLowerCase() === vowels[vowel]){
          stop = 1;
        }
      }
      if(stop === 0) {
        constStr += word.charAt(letter);
      }
    }
    console.log(constStr);
    return constStr;
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
