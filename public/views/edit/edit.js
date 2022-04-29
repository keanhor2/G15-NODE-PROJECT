let create_quiz=document.querySelector(".create_quiz");
// start code here -----------------------
create_quiz.style.display="none";

function displayQuiz(){
    create_quiz.style.display="block";
}


// let display_quiz = document.querySelector(".display_quiz");
let showCreate = document.querySelector(".buutonShow");
showCreate.addEventListener("click",displayQuiz);


const URL = ""

function getURL() {
    alert("The URL of this page is: " + window.location.href);
}