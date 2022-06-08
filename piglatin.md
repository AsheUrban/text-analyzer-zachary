Describe: pigLatinTranslator()

Test: "It should detect vowel at begining of word"
Code:
const text = "away";
pigLatinTranslator(text);
Expected Output: true

Test: "It should add w to the end if the first letter is a vowel"
Code:
const text = "away";
pigLatinTranslator(text);
Expected Output: awayw

Test: "It should move constanants to the end of string"
Code:
const text = "strange";
pigLatinTranslator(text);
Expected Output: angestr

Test: "It should detect if first letters are qu, then move qu to end"
Code:
const text = "quack";
pigLatinTranslator(text);
Expected Output: ackqu

Test: "It should add ay to the end"
Code:
const text = "strange";
pigLatinTranslator(text);
Expected Output: angestray

