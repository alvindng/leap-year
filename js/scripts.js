var isVowel = function(letter){
  var vowels = ["a","e","i","o","u"];
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
  var consonants = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"];
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
var pigLatin = function(englishWord){
  var numOfConsonants;
  var pLWord = englishWord;
  for(i=0;isConsonant(englishWord.charAt(i))===true;i++){
    pLWord = pLWord + englishWord.charAt(i);
    numOfConsonants +=1;
    pLWord = pLWord.slice(1);
  }
  return pLWord + "ay";
}

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
    var englishWord = $("#plInput").val();
    var result = pigLatin(englishWord);
    $(".word").text(result);
    event.preventDefault();
  });


});
