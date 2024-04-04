function charCount(text){
    let textWithoutSpace = text.replaceAll(" ","");
    console.log("Number of characters (excluding spaces) are: " + textWithoutSpace.length);
}

function alphaCount(newtext){
    let alphacount = 0;
    for (let i = 0; i < newtext.length; i++){
        if (newtext.charAt(i) >= "a" && newtext.charAt(i) <= "z"){
            alphacount++;
        }
    }
    console.log("Number of alphabets are: " + alphacount);
}

function digitCount(text){
    let digitcount = 0;
    for (let i = 0; i < text.length; i++){
        if (text.charAt(i) >= "0" && text.charAt(i) <= "9"){
            digitcount++;
        }
    }
    console.log("Number of digits are: " + digitcount);
}

function vowelCount(newtext){
    let vowels = ['a','e','i','o','u'];
    let vowelcount = 0;
    for (let i = 0; i < newtext.length; i++){
        if (vowels.includes(newtext[i])){
            vowelcount++;
        }
    }
    console.log("Number of vowels are: " + vowelcount);
}

function consonantCount(newtext){
    let vowels = ['a','e','i','o','u'];
    let consonantcount = 0;
    for (let i = 0; i < newtext.length; i++){
        if (newtext.charAt(i) >= "a" && newtext.charAt(i) <= "z"){
            if(vowels.includes(newtext.charAt(i))){
                continue;
            }else{
                consonantcount++;
            }
        }
    }
    console.log("Number of consonants are: " + consonantcount);
}

function specialCharCount(text){
    let specialcharcount = 0;
    for (let i = 0; i < text.length; i++){
        if(text.charAt(i) == "_" || text.charAt(i) == "$" || text.charAt(i) == "%"){
            specialcharcount++;
        }
    }
    console.log("Number of special characters _, $, % are: " + specialcharcount);
}

function wordCount(text){
    let words = text.split(" ");
    let wordcount = words.length;
    console.log("Number of words are: " + wordcount);
}

function avgWordLength(text){
    let words = text.trim().split(" ");

    let charLength = 0 ;

    for(let i = 0; i < words.length; i++){
        charLength += words[i].length;
    }
    let avgwordlength = charLength / words.length;
    console.log("Average Word Length is: " + avgwordlength); 
}

function textAnalyzer(){

    var text = prompt("Enter the text: ");
    console.log("Your text: " + text);

    var newtext = text.toLowerCase();

    var analyzer = prompt("How do you want to analyze your text?\n(Enter the number or name of the analyzer) \n 1 char-count \n 2 alpha-count \n 3 digit-count \n 4 vowel-count \n 5 consonant-count \n 6 special-char-count \n 7 word-count \n 8 avg-word-length");

    switch(analyzer){
        case "1":
        case "char-count":
            charCount(text);
            break;
        case "2":
        case "alpha-count":
            alphaCount(newtext);
            break;
        case "3":
        case "digit-count":
            digitCount(text);
            break;
        case "4":
        case "vowel-count":
            vowelCount(newtext);
            break;
        case "5":
        case "consonant-count":
            consonantCount(newtext);
            break;
        case "6":
        case "special-char-count":
            specialCharCount(text);
            break;
        case "7":
        case "word-count":
            wordCount(text);
            break;
        case "8":
        case "avg-word-length":
            avgWordLength(text);
            break;
        default: 
            charCount(text);
            alphaCount(newtext);
            digitCount(text);
            vowelCount(newtext);
            consonantCount(newtext);
            specialCharCount(text);
            wordCount(text);
            avgWordLength(text);
    }
}
