

$(document).ready(function(){
  $("button#btn").click(function(event){


    event.preventDefault();
  var answerOne= parseInt($("input[type=radio][name=questionOne]:checked").val());
  var answerTwo= parseInt($("input[type=radio][name=questionTwo]:checked").val());
  var answerThree= parseInt($("input[type=radio][name=questionThree]:checked").val());
  var answerFour= parseInt($("input[type=radio][name=questionFour]:checked").val());
  var answerFive= parseInt($("input[type=radio][name=questionFive]:checked").val());
  var answerSix= parseInt($("input[type=radio][name=questionSix]:checked").val());
  var answerSeven= parseInt($("input[type=radio][name=questionSeven]:checked").val());
  var answerEight= parseInt($("input[type=radio][name=questionEight]:checked").val());
  var score = (answerOne+answerTwo+answerThree+answerFour+answerFive+answerSix+answerSeven+answerEight);
  document.getElementById("result").innerHTML= "Here is your score " + score + "%"

  });
});
