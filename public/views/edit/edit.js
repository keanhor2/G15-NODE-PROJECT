const URL = "http://localhost:3000/api/items";

function getQuestions() {
    axios.get(URL).then(items=>{
        console.log(items.data);
    })

}


// add question
const add = document.querySelector(".add")
add.addEventListener("click",getQuestions);

let create_quiz=document.querySelector(".create_quiz");
// start code here -----------------------
create_quiz.style.display="none";

function displayQuiz(){
    create_quiz.style.display="block";
}


// let display_quiz = document.querySelector(".display_quiz");
let showCreate = document.querySelector(".buutonShow");
showCreate.addEventListener("click",displayQuiz);



// let bigdiv =document.createElement("div");
// bigdiv.className="question";
// bigdiv.appendChild(divtitle);

// let divtitle = document.createElement("div");
// divtitle.className="title_quiz";
// divtitle.appendChild(divQuiz);



// let divQuiz = document.createElement("div");
// divQuiz.className="name_quiz";


// let divAnswer = document.createElement("anwer");

// console.log(bigdiv);