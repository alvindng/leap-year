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
    if(yearInput.toString() === "NaN"){
      alert("please enter a year into the input field");
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
});
