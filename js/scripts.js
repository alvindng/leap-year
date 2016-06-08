$(document).ready(function(){
  var isLeap = function(year){
    if(year%4 === 0){
      return true;
    }
    else{
      return false;
    }
  };

  $("#input").submit(function(event){
    var yearInput = $("#year").val();
    leapYN = isLeap(yearInput);
    $(".year").text(yearInput);
    if(leapYN === true){
    }
    else{
      $(".not").text("NOT")
    }
    event.preventDefault();
  });

})
