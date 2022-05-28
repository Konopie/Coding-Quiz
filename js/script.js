// question counter
var questionIdCounter = 0;

// declare questions
const questions = [
    {
      id: 0,
      question: "Inside which HTML element do we put the JavaScript?",
      answers: [
          { text: "<scripting>", isCorrect: false},
          { text: "<script>", isCorrect: true},
          { text: "<javascript>", isCorrect: false},
          { text: "<js>", isCorrect: false}
      ]
    },
    {
        id: 1,
        question: "How do you write 'Hello World' in an alert box?",
      answers: [
          { text: 'msgBox("Hello World");', isCorrect: false},
          { text: 'alert("Hello World");', isCorrect: true},
          { text: 'alertBox("Hello World");', isCorrect: false},
          { text: 'msg("Hello World");', isCorrect: false}
      ]
    },
    {
        id: 2,
        question: "How do you create a function in JavaScript?",
      answers: [
          { text: 'function = myFunction()', isCorrect: true},
          { text: 'function myFunction()', isCorrect: false},
          { text: 'funciton: myFunction()', isCorrect: false},
          { text: 'function = myFunction', isCorrect: false}
      ]
    },
    {
        id: 3,
        question: 'How do you call a function named "myFunction"?',
      answers: [
          { text: 'call function myFunction()', isCorrect: false},
          { text: 'call myFunction()', isCorrect: false},
          { text: 'myFunction()', isCorrect: true},
          { text: 'hey siri call, myFunction()', isCorrect: false}
      ]
    },
    {
        id: 4,
        question: "How to write an IF statement in JavaScript?",
      answers: [
          { text: 'if i = 4 then', isCorrect: false},
          { text: 'if i = 5', isCorrect: false},
          { text: 'if i == 5 then', isCorrect: false},
          { text: 'if (i = 5)', isCorrect: true}
      ]
    },
    {
        id: 5,
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
      answers: [
          { text: 'if (i != 5)', isCorrect: true},
          { text: 'if i != 5 then', isCorrect: false},
          { text: 'if (i <> 5)', isCorrect: false},
          { text: 'if i ~ 5', isCorrect: false}
      ]
    },
    {
        id: 6,
        question: "How does a FOR loop start?",
      answers: [
          { text: 'for (i = 0; i <= 5)', isCorrect: false},
          { text: 'for i = 1 to 5', isCorrect: false},
          { text: 'for (i = 0; i <= 5; i++)', isCorrect: true},
          { text: 'for (i <= 5; i++)', isCorrect: false}
      ]
    },
    {
        id: 7,
        question: "How do you write 'Hello World' in an alert box?",
      answers: [
          { text: 'msgBox("Hello World");', isCorrect: false},
          { text: 'alert("Hello World");', isCorrect: true},
          { text: 'alertBox("Hello World");', isCorrect: false},
          { text: 'msg("Hello World");', isCorrect: false}
      ]
    },
    {
        id: 8,
        question: "How can you add a comment in a JavaScript?",
      answers: [
          { text: '<!-- This is a Comment -->', isCorrect: false},
          { text: '// This is a Comment', isCorrect: true},
          { text: '~~ This is a Comment ~~', isCorrect: false},
          { text: '_- This is a Comment -_', isCorrect: false}
      ]
    },
    {
        id: 9,
        question: "How do you find the number with the highest value of x and y?",
      answers: [
          { text: 'top(x,y)', isCorrect: false},
          { text: 'Math.ceil(x,y)', isCorrect: false},
          { text: 'Math.max(x,y)', isCorrect: true},
          { text: 'ceiling(x,y)', isCorrect: false}
      ]
    },
]

// declare variables 
var startBtn = document.querySelector("#startBtn")
var question = document.getElementById("question")
var answers = document.getElementById("answers")
var results = document.getElementById("results")

var opt1 = document.getElementById("opt1")
var opt2 = document.getElementById("opt2")
var opt3 = document.getElementById("opt3")
var opt4 = document.getElementById("opt4")

var currentResults = document.getElementById("currentResult")

// create the question
var createQuestion = function() {
    // question id to id
    var id = questionIdCounter;

    // change start button to next button 
    startBtn.textContent = "Next";

    // create question text from question array id
    question.innerText = questions[id].question;

    // create option text from question id
    opt1.innerText = questions[id].answers[0].text;
    opt2.innerText = questions[id].answers[1].text;
    opt3.innerText = questions[id].answers[2].text;
    opt4.innerText = questions[id].answers[3].text;

    // true or false value of the options
    opt1.value = questions[id].answers[0].isCorrect;
    opt2.value = questions[id].answers[1].isCorrect;
    opt3.value = questions[id].answers[2].isCorrect;
    opt4.value = questions[id].answers[3].isCorrect;

    // empty string to hold selected value
    var selected = "";

    // listeners
    opt1.addEventListener("click", () => {
        selected = opt1.value,
        console.log(opt1.value),
        currentResults.innerText = opt1.value,
        createQuestion();
    });
    opt2.addEventListener("click", () => {
        selected = opt2.value,
        console.log(opt2.value),
        currentResults.innerText = opt2.value,
        createQuestion();
    });
    opt3.addEventListener("click", () => {
        selected = opt3.value,
        console.log(opt3.value),
        currentResults.innerText = opt3.value,
        createQuestion();
    });
    opt4.addEventListener("click", () => {
        selected = opt4.value,
        console.log(opt4.value),
        currentResults.innerText = opt4.value,
        createQuestion();
    });

    questionIdCounter++;
}

startBtn.addEventListener("click", createQuestion)