// dom question
const domQuestion= document.getElementById("title");
const domAnswer1= document.getElementById("A");
const domAnswer2= document.getElementById("B");
const domAnswer3= document.getElementById("C");
const domAnswer4= document.getElementById("D");
const domLengthQuestion = document.getElementById("lengthOfQuestion");
const domScore = document.getElementById("score");
// get question to display
let currentQuestion =0;
let score = 0;


// get question to display

function renderQuestion(quizQuestion){
        let question =quizQuestion[currentQuestion];

        domQuestion.textContent = question.title;
        domAnswer1.textContent = question.answer1;
        domAnswer2.textContent = question.answer2;
        domAnswer3.textContent = question.answer3;
        domAnswer4.textContent = question.answer4;
}

// set first question that we want to display.
axios.get("/api/items").then(questions=>{
    let listQuestion = questions.data;
    if(currentQuestion < listQuestion.length){
        renderQuestion(listQuestion);
        currentQuestion += 1; 
    }
    domScore.textContent = listQuestion[score].score;
    domLengthQuestion.textContent = currentQuestion +"/"+listQuestion.length;
});
function checkAnswer(choice){
    // click and go all questions
    axios.get("/api/items").then(questions=>{
        let listQuestion = questions.data;
        console.log(listQuestion.length);
        if(currentQuestion < listQuestion.length){
            renderQuestion(listQuestion);
            domScore.textContent = listQuestion[currentQuestion].score; 
            currentQuestion += 1;
        }
        domLengthQuestion.textContent = currentQuestion +"/"+listQuestion.length;  
    });
}




