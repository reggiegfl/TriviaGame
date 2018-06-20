var number =60

var intervalId;
$("#quiz").hide();

//  The run function sets an interval
//  that runs the decrement function once a second.
//  *****BUG FIX******** 
//  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
  console.log(number);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#timeLeft").html("<h2>" + number + "</h2>");


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Time Up!");
  }
}
//  The stop function
function stop() {
  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
  score();
}
function score(){
    q1 = document.quiz.question1.value;
    q2 = document.quiz.question2.value;
    q3 = document.quiz.question3.value;
    q4 = document.quiz.question4.value;
    q5 = document.quiz.question5.value;
    correct = 0;

        if (q1 === "The Meadows") {
        correct++;
    } 
        if (q2 === "1989") {
        correct++;
    }
        if (q3 === "The Venetian") {
        correct++;
    }    
        if (q4 === "Benjamin Siegel") {
        correct++;
    }
        if (q5 === "Oscar Goodman") {
        correct++;
    }
console.log(q1, q2, q3, q4, q5, correct);
//$("#number_correct").html("You got " + correct + " correct")
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct";
}
$("#start").on("click", function(){
    run();
    $("#welcome").hide();
    $("#quiz").show();
})