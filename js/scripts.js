var answers= ["var CarName","True","=","while(i<=10)","Both the head section and the body","onclick","myFunction()","alert("Hello World")"];
var pointPercorrect= 12.5;

function percentage(score) {
  return "HERE IS YOUR SCORE" + parseInt(score) + "%";

}
$(document).ready(fuction(){
  $("#questions").submit(function(event) {
    $("#results").text("");
    var score=0;
    var answerOne= ($("input[type=radio][name=questionOneAnswer]:checked").val());
    var answerTwo= ($("input[type=radio][name=questionTwoAnswer]:checked").val());
    var answerThree= ($("input[type=radio][name=questionThreeAnswer]:checked").val());
    var answerFour= ($("input[type=radio][name=questionFourAnawer]:checked").val());
    var answerFive= ($("input[type=radio][name=questionFiveAnswer]:checked").val());
    var answerSix= ($("input[type=radio][name=questionSixAnswer]:checked").val());
    var answerSeven= ($("input[type=radio][name=questionSevenAnswer]:checked").val());
    var answerEight= ($("input[type=radio][name=questionEightAnswer]:checked").val());


    if(answerOne===12.5%&&answerTwo===12.5%&&answerThree===12.5&&answerFour===12.5&&answerFive===12.5&&answerSix===12.5&&answerSeven===12.5&&answerEight===12.5||answerOne===0) {
      $("#excellentlyPaassed").text("Excellent ");
    });
});
