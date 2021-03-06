//Back End
var isVowel = function(letter){
  var vowels = ["a","e","i","o","u","y"];
  var m = 0;
  vowels.forEach(function(vowel){
    if(letter===vowel){
      m += 1;
    }
    else{}
  });
  if(m>0){
    return true;
  }
  else{
    return false;
  }
}

var isConsonant = function(letter){
  var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","z"];
  var m = 0;
  consonants.forEach(function(consonant){
    if(letter===consonant){
      m += 1;
    }
    else{}
  });
  if(m>0){
    return true;
  }
  else{
    return false;
  }
}

var pigLatinWord = function(englishWord){
  var numOfConsonants;
  var pLWord = englishWord;
  var quWord = englishWord;


  if (englishWord.charAt(0) === "q" && englishWord.charAt(1) === "u") {
    quWord = quWord + "qu";
    quWord = quWord.slice(2);
    return quWord + "ay";
  }
  else if(englishWord.charAt(0)==="y"){
    pLWord = pLWord + 'y';
    pLWord = pLWord.slice(1);
    return pLWord + "ay"
  }
  else if(isConsonant(englishWord.charAt(0))===true) {
    for(i=0;isConsonant(englishWord.charAt(i))===true;i++){
      pLWord = pLWord + englishWord.charAt(i);
      numOfConsonants +=1;
      pLWord = pLWord.slice(1);
    }
    return pLWord + "ay";
  }
  else if(isConsonant(englishWord.charAt(0))===false){
    pLWord = pLWord + "ay";
    return pLWord;
  }
}

var pigLatinPhrase = function(phrase){
  var wordArray = phrase.split(" ");
  var pLPhrase = "";
  wordArray.forEach(function(word){
    pLPhrase = pLPhrase + pigLatinWord(word) + " ";
  });
  return pLPhrase;
}

var regExWord = function(enWord){
  debugger;
  var consonants = /\b(y|qu|[bcdfghjklmnpqrstvwxz]+)/g;
  var pLPhrase = "";
  (enWord).match(/\b\w+/g).forEach(function(word){
    if(consonants.test(enWord)===true){
      pLPhrase = pLPhrase + word.concat(word.match(consonants)[0]).replace(consonants, "").concat("ay") + " ";
    }
    else{
      pLPhrase = pLPhrase + word + "ay" + " ";
    }
  });
  // var pLWord = enWord.concat(enWord.match(consonants)[0]).replace(consonants, "").concat("ay");
  return pLPhrase;
}

//front end
$(document).ready(function(){
  var yearInput;
  var isLeap = function(){
    if ((yearInput%4 === 0) && (yearInput%100 !== 0)||(yearInput % 400 === 0)){
      return true;
    }
    else{
      return false;
    }
  };

  $("#input").submit(function(event){
    // debugger;
    yearInput = parseInt($("#year").val());
    if(isNaN(yearInput) === true || yearInput<0){
      alert("please enter a positive year into the input field");
    }
    else{
      $(".year").text(yearInput);
      if(isLeap() === true){
        $(".not").text("");
      }
      else{
        $(".not").text("NOT");
      }
    }
    event.preventDefault();
  });

  $("#plForm").submit(function(event){
    var englishWord = $("#plInput").val().toLowerCase();
    var result = regExWord(englishWord);
    $(".word").text(result);
    event.preventDefault();
  });


});
