// dom question
const container = document.getElementById('container');
const domTextInQuiz = document.querySelector(".inQuiz");
const domExit = document.getElementById('exit');
const domQuestion= document.getElementById("title");
const domAnswer1= document.getElementById("A");
const domAnswer2= document.getElementById("B");
const domAnswer3= document.getElementById("C");
const domAnswer4= document.getElementById("D");
const domLengthQuestion = document.getElementById("lengthOfQuestion");
const domScore = document.getElementById("score");
const domTotalOfScore = document.querySelector(".total");
const domTotalScore = document.getElementById("totalScore");
const domReplay = document.getElementById("btnReplay");


// replay
function Replay(e){
    if(e.target.id =="btnReplay"){
        location.reload();
    }
}
document.body.addEventListener("click",Replay);


let currentQuestion =0;
//
// set first question that we want to display.
//
axios.get("/api/items").then(questions=>{
    let listQuestion = questions.data;
    if(currentQuestion < listQuestion.length){
        renderQuestion(listQuestion);
        currentQuestion += 1; 
    }
    domScore.textContent = listQuestion[currentQuestion].score;
    domLengthQuestion.textContent = currentQuestion +"/"+listQuestion.length;
});
//
// get question to display
//
function renderQuestion(quizQuestion){
        let question =quizQuestion[currentQuestion];

        domQuestion.textContent = question.title;
        domAnswer1.textContent = question.answer1;
        domAnswer2.textContent = question.answer2;
        domAnswer3.textContent = question.answer3;
        domAnswer4.textContent = question.answer4;
}

//
//check score and compute scores
//@para choice
//
domTotalOfScore.style.display ="none";

let score = 0;
function checkAnswer(choice){
    // click to next until all questions
    TotalScore(choice); 
    // console.log(choice);
    axios.get("/api/items").then(questions=>{
        let listQuestion = questions.data;
        if(currentQuestion === listQuestion.length){
            domTextInQuiz.style.display = 'none';
            domExit.style.display = "none";
            container.style.display="none";
            domTotalOfScore.style.display ="block";
        }
        if(currentQuestion < listQuestion.length){
             renderQuestion(listQuestion);
             domScore.textContent = parseInt(listQuestion[currentQuestion].score); 
             currentQuestion += 1;
        }
        domLengthQuestion.textContent = currentQuestion +"/"+listQuestion.length; 
    });
}

// compute score
let indexOfQuestion = 0;
let computeScore =0;
function TotalScore(answer) {
    if(answer!== null){
        axios.get("/api/items").then(res=>{
            let questions = res.data;
            if(indexOfQuestion >0){
                let question = questions[indexOfQuestion-1];
                console.log(question);
                console.log(question.correctAnswer)

                if(indexOfQuestion<= questions.length){
                    console.log(question.correctAnswer)
                    if(question.correctAnswer === answer){
                        console.log("correctAnswer")
                        computeScore += question.score;
                    }
                    domTotalScore.textContent ="Total Score : " + computeScore +"%";
                }
            }
            indexOfQuestion++;
        })
    }
}
TotalScore();