// dom question

const domQuestion= document.getElementById("title");
const domAnswer1= document.getElementById("A");
const domAnswer2= document.getElementById("B");
const domAnswer3= document.getElementById("C");
const domAnswer4= document.getElementById("D");


// get question to display

let currentQuestion =0;
function renderQuestion(quizQuestion){
        let question =quizQuestion[currentQuestion];

        domQuestion.textContent = question.title;
        domAnswer1.textContent = question.answer1;
        domAnswer2.textContent = question.answer2;
        domAnswer3.textContent = question.answer3;
        domAnswer4.textContent = question.answer4;
}

// check the question for answer and update more answers-----

axios.get("/api/items").then(questions=>{
    let listQuestion = questions.data;
    if(currentQuestion < listQuestion.length){
        renderQuestion(listQuestion);
        currentQuestion += 1; 
    }
});
function checkAnswer(choice){
    axios.get("/api/items").then(questions=>{
        let listQuestion = questions.data;
        // console.log(listQuestion.length);
        if(currentQuestion < listQuestion.length){
            renderQuestion(listQuestion);
            currentQuestion += 1;
        }
    });
}


