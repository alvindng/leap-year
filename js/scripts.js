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
    var result = englishWord + "ay";
    $(".word").text(result);
    event.preventDefault();
  });


});
