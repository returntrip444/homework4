

// Creating array for correct Answers, wrong Answers, and questions, time

var codeCorrectAnswers =  ["javascript", "cascading style sheet", "img href", "set-animate", "Console log" ];
var codeQuestions = ["what is the most common computer language for modifying a web page", "what does CSS stand for?", "How do you refrence an image in a HTML?", "How do you make an image move in an html?", "where in the inspect page can you find strings and arrays?"];
var codeWrongAnswers = ["DOM", "CSS", "Jquery", "HTML", "Consumer style sheet", "cascading syntax sheet", "console syntax sheet", "computer style sheet", "img-src", "img.setAttribute", "console.log", "img.QuerySelector", "set-ChildDiv", "img-href", "img-src","document.getElementById", "Application", "Inspect", "Dev tools", "navigator"];
var timeEl = ["6000 miliseconds"]

// set time for code quiz to 60 secondsLeft


function  () {
    codeCorrectAnswers.textContent = "";
    codeCorrectAnswers.textContent = codeCorrectAnswers.length
    for (var i = 0; i < codeCorrectAnswers.length; i++) {
        var newItem = document.createElement();
        newItem.textContent = codeCorrectAnswers[i]
        codeCorrectAnswers.appendChild(newItem)

        codeWrongAnswers.textContent = "";
        codeWrongtAnswers.textContent = codeWrongtAnswers.length
        for (var i = 0; i < codeWrongAnswers.length; i++) {
            var newItem = document.createElement();
            newItem.textContent = codeWrongAnswers[i]
            codeWrongAnswers.appendChild(newItem)

            codeQuestion.textContent = "";
        codeQuestions.textContent = codeQuestions.length
            for (var i = 0; i < codeCorrectAnswers.length; i++) {
                var newItem = document.createElement();
                newItem.textContent = codeQuestions[i]
                codeQuestions.appendChild(newItem)

    }
}
renderToDo();
console.log(todos);


function setTime () {
    secondsLeft= (i < timeEl.length i++)
    timeEl.textContent
    var imgEl= document.createElement("img")
    window.setTimeout( setTime, "6000 milliseconds");

}

// put in window.setTimeout for time ended after question




