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
  if (noInputtedWord(text)) {
    return 0;
  }
  const english = text.split(" ");
  let currentWord = " ";
  let translation = [];
  let capital = 0;
  english.forEach(function(element) {
    if(startsWith(element)) {
      currentWord = element + "w";
    }
    else if(element.charAt(0).toLowerCase() === "q" && element.charAt(1).toLowerCase() === "u") {
      currentWord = element.slice(2) + "qu";
    }
    else {
      let prefix = notVowel(element);
      currentWord = element.slice(prefix.length) + prefix;
    }
    if (capital === 0) {
      currentWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);
      capital = 1;
    }
    currentWord += "ay";
    translation.push(currentWord);
  });
  console.log(translation.join(" "), ".")
  return translation.join(" ") + ".";
}

function startsWith(word) {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < 5; i++) {
      if (word.charAt(0).toLowerCase() === vowels[i]) {
        return true;
        break;
      }
      else {
      }
  }
  return false;
}

function notVowel(word) {
  const vowels = ["a", "e", "i", "o", "u", "q"];
  let constStr = "";
  let stop = 0;
    for (let letter = 0; letter < word.length && stop === 0; letter++) {
      for (let vowel = 0; vowel < 6; vowel++){
        if (word.charAt(letter).toLowerCase() === vowels[vowel]) {
          stop = 1;
      }}
      if(stop === 0) {
        constStr += word.charAt(letter);
    }}
    return constStr;
}
//UI Logic
$(document).ready(function(){
  $("form#pigLatin").submit(function(event){
    event.preventDefault();
    const translateInput = $("#text-passage").val();
    console.log(translateInput);
    console.log(pigLatinTranslator(translateInput));
    $("#output").html(pigLatinTranslator(translateInput));
  });
});