// Utility Logic

function noInputtedWord(word, text) {//checks if input is empty (prevents errors)
  return ((text.trim().length === 0) || (word.trim().length === 0));
}

// Buisness Logic

function wordCounter(text) {// gives total word count, excluding spaces
  if (text.trim().length === 0) {
    return 0;
  }
  let wordCount = 0;
  const wordArray = text.split(" ");
  wordArray.forEach(function(element) {
    if (!Number(element)) {
      wordCount++;
    }
  });
  return wordCount;
}

function numberOfOccurrencesInText(word, text) { //counts the number of times -word- has appeared in -text- and returns that number
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let wordCount = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      wordCount++;
    }
  });
  return wordCount;
}

function frequencyInText(word, text) { // a function that removes all duplicate words, counts the nuber of times they were repeated, and makes a list in order
  //prevent errors from blank inputs
  if (noInputtedWord(word, text)) {
    return 0;
  }

  //convert user input string into text
  const frequentWordArray = text.split(" ");

  //create blank array for words after they have been counted
  let frequencyOutputArray = [];

  //virtual bookmark for array
  let iCounter = 0; //set to 0
  let arrayLength = frequentWordArray.length; //maximum of timer for loop

  // sort words alphabeticaly, makes repeated words grouped next to eachother
  //         ex: input "green cape blue cape or green blue cape"
  // frequentWordArray [blue, blue, cape, cape, cape, green, green, or]
  frequentWordArray.sort();

  //for loop allows function inside brackets to run for length of original array
  //  steps
  //    i = 0
  //    (i < length) = true
  //    execute code inside brackets
  //    i increases by 1
  //    repeat until (i < length) = false
  for (let i = 0; i < arrayLength; i++) {
    let element = frequentWordArray.at(iCounter); // set -element- to current item in array indicated by bookmark (iCounter)
    let next = frequentWordArray.at(iCounter + 1);// set -next- to next item in array at bookmark + 1 (iCounter + 1)

    //if current item and next item (element & next) are the same...
    if (element.toLowerCase() === next) { 
      frequentWordArray.splice(iCounter, 1);//remove the current item from the list
      //ex:      frequentWordArray [blue, blue, cape, cape, cape, green, green, or]
      //after 1: frequentWordArray [blue, cape, cape, cape, green, green, or]
    }

    // if current item and next item (element & next) are NOT the same...
    else{ 
      let repeatedWord = numberOfOccurrencesInText(element, text) + " " + element;
      //set variable to "(# of times current word appeared) + (what the word is)"
      // ex: repeated word = 2 blue
      frequencyOutputArray.push(repeatedWord);//add variable to new array
      iCounter ++;//move bookmark to next word
    }

  }; //after it has looped for length of original array

  frequencyOutputArray.sort(); //since the # of times word appeared is first in the string, sorting alphabetically orders them from least appeared to most appeared (by the number in front)
  //ex:                    input "green cape blue cape or green blue cape"
  //           frequentWordArray [blue, cape, green, or]
  //(before)frequencyOutputArray [2 blue, 3 cape, 2 green, 1 or]
  // (after)frequencyOutputArray [1 or, 2 blue, 2 green, 3 cape]
  frequencyOutputArray.reverse();//reverse them, now from most -> least
  //(after after)frequencyOutputArray [3 cape, 2 green, 2 blue, 1 or]
  let frequencyOutputString = frequencyOutputArray.join(" <br> ");//makes a string with all the items
  //ex: frequencyOutputString "3 cape 2 green 2 blue 1 or"
  
  return "<p>" + frequencyOutputString + "</p>"; 
  //return string with HTML Brackets
}                           //**//end of function\\**\\

function removeOffensiveLanguage(text) { //replaces words zoinks, muppeteer, biffaroni, and loopdaloop with ******
  const wordArray = text.split(" ");
  let i = 0;
  wordArray.forEach(function(element) {
    if (element.toLowerCase().includes("zoinks") || element.toLowerCase().includes("muppeteer") || element.toLowerCase().includes("biffaroni") || element.toLowerCase().includes("loopdaloop")) {
      wordArray.splice(i, 1, "******");
    }
  i++;
});
return wordArray;
}

/* another way to remove bad words

function removeBadWords(words, text) {
  if (noInputtedWord(word, text)) {
    return 0;
  }
  const wordArray = text.split(" ");
  let cleanWords = [];
  wordArray.forEach(function(element) {
    if (!element.toLowerCase().includes(words)) {
      cleanWords.push(element);
    }
  });
  return cleanWords;
}*/

// UI Logic

function boldPassage(word, text) { //bold all occurences of selected word
  if (noInputtedWord(word, text)) {
    return "";
  }
  let htmlString = "<p>";
  let textArray = text.split(" ");
  textArray.forEach(function(element, index) {
    if (element.toLowerCase().includes(word.toLowerCase())) {
      let short = element.replace(word , "");
      htmlString = htmlString.concat(short + "<b>" + word + "</b>");
    } else {
      htmlString = htmlString.concat(element);
    }
    if (index !== (textArray.length - 1)) {
      htmlString = htmlString.concat(" ");
    }
  });
  return htmlString + "</p>";
}

$(document).ready(function(){
  $("form#word-counter").submit(function(event){ // when submit button is hit
    event.preventDefault();
    //gather values from input fields
    const passage = $("#text-passage").val();
    const word = $("#word").val();
    //get word count & specific word
    const wordCount = wordCounter(passage);
    const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
    //output results in HTML
    $("#total-count").html(wordCount);
    $("#selected-count").html(occurrencesOfWord);
    $("#bolded-passage").html(boldPassage(word, passage));
    $("#word-frequency").html(frequencyInText(word, passage));
  });
});