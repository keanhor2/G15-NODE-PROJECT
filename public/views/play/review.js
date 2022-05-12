//
// get question 
//
function getQuestions() {
    axios.get("/api/items").then(items => {
        refreshDom(items.data);
    })
}

//
//Send question to DOM
//@para questions
//
function refreshDom(questions){
    let container = document.getElementById('container');
    container.remove();
    let contain = document.createElement('div');
    contain.id = 'container';
    
    let questionId = 0
    questions.forEach((question)=>{
        questionId += 1;
        let newQuestion = document.createElement("div");
        newQuestion.className = "question";
        newQuestion.id = question.id;

        let title = document.createElement("div");
        title.className = "title_quiz";

        let textOfTitle = document.createElement("div");
        textOfTitle.className = "name_text";
        textOfTitle.textContent = question.title;

        let answers = document.createElement("div");
        answers.className = "answers";
        answers.id = questionId;

        let answer1 = document.createElement("div");
        answer1.className = "answer_one";
        answer1.id="A"
        answer1.textContent = question.answer1;

        let answer2 = document.createElement("div");
        answer2.className = "answer_two";
        answer2.id="B"
        answer2.textContent = question.answer2;

        let answer3 = document.createElement("div");
        answer3.className = "answer_three";
        answer3.id="C"
        answer3.textContent = question.answer3;

        let answer4 = document.createElement("div");
        answer4.className = "answer_four";
        answer4.id="D"
        answer4.textContent = question.answer4;

        let icons = document.createElement("div");
        icons.className = "icons";

        let pencil = document.createElement("i");
        pencil.className = "fa fa-pencil fa-2x cons";
        pencil.id = "edit";
        // pencil.className="upDate";
        // pecils.classList="upDates";
        pencil.addEventListener("click", updateQuestion);



        let trash = document.createElement("i");
        trash.className = "fa fa-trash-o fa-2x cons";
        trash.id = "delete";
        trash.addEventListener("click", removeQuestion)

        title.appendChild(textOfTitle);

        contain.appendChild(newQuestion);
        newQuestion.appendChild(title);
        newQuestion.appendChild(answers);

        answers.appendChild(answer1);
        answers.appendChild(answer2);
        answers.appendChild(answer3);
        answers.appendChild(answer4);
        newQuestion.appendChild(icons);
        // icons.appendChild(pencil);
        // icons.appendChild(trash);
        
        document.body.appendChild(contain);
        // good and bad questions
        let goodAnswers = document.getElementById(questionId);
        for (let element of goodAnswers.childNodes) {
            if (element.id == question.correctAnswer) {
                element.style.background = "teal";
            }else{
                element.style.background = "brown"
            }
        }
    });
};
//
// create question
//
function creatItems() {
    let item_new = {};
    item_new.title = document.getElementById('question').value;
    item_new.answer1 = document.getElementById('answer_a').value;
    item_new.answer2 = document.getElementById('answer_b').value;
    item_new.answer3 = document.getElementById('answer_c').value;
    item_new.answer4 = document.getElementById('answer_d').value;
    item_new.score = document.getElementById('score').value;
    item_new.correctAnswer = document.getElementById('correctAnswers').value;
    axios.post("/api/items", item_new);
    console.log(item_new);
    getQuestions();

    location.reload();
}
//
// delete question
//
function removeQuestion(e) {
    e.preventDefault();
    if (e.target.id === "delete") {
        let id = e.target.parentElement.parentElement.id;
        let isExecuted = confirm("Are you sure to delete this question?");
        if (isExecuted) {
            axios.delete("/api/items/" + id);
        }
        getQuestions();
    }
}


// const add = document.querySelector(".adds");
// add.addEventListener("click", creatItems);
// getQuestions();


// function to Update the data ---------
// let contains = document.querySelector("#container");
// let tiltels = document.querySelector("#question");

// // let checkUpdate = document.querySelector(".checkUpdate");

// let hidcontainer =document.querySelector(".containerse");
// let createQuiz =document.querySelector(".createQuiz");
// let hidcreatequiz = document.getElementsByName("createQuestion");

// let dataquiz = document.querySelector(".dataQuiz");
// hodhidupDates=document.querySelector(".hodhidupDates");


function updateQuestion(e) {
    e.preventDefault();
    if (e.target.id === "edit") {
        let id = e.target.parentElement.parentElement.id;
        // checkUpdate.textContent=id;
        axios.patch("/api/items/" + id);
        getQuestions();
    }

}

//MAIN

// showCreate.addEventListener("click", displayQuiz);
// add.addEventListener("click", creatItems);
// adds.addEventListener("click", hidShowInput);
// cancel.addEventListener("click", hidShowInput);
getQuestions();