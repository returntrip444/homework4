# homework4


beginning stages of code quiz

creating timer, answers, questions, and new pages to direct whether answers are correct or wrong

created array for codeTime, codeCorrectAnswers, codeWrongAnswers, codeQuestions

created question answers and true or falso statements use using var questions followed by questions and correct answers and also a loop
for questions length using  for (var i = 0; i < codeQuestions.length; i++

created timer using:


    function setTime() {
        var timerInterval = setInterval(function() {
          secondsLeft--;
          timeEl.textContent = secondsLeft;
      
          if(secondsLeft === 0) {
            clearInterval(timerInterval);
           
          }
      
        }, 1000);
    }

    buttonElement.addEventListener("click", setTime)