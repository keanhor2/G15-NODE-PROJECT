

let create_quiz=document.querySelector(".create_quiz");
// start code here -----------------------
let buttonshowss = document.getElementById("buttonshowss");
let buttonshowsy = document.getElementById("dataQuiz");
let noneData =document.querySelector("#dataquiz");
create_quiz.style.display="none";

function displayQuiz(){
    create_quiz.style.display="block";
    buttonshowss.style.display="none";
    noneData.style.display="none"
}

// let display_quiz = document.querySelector(".display_quiz");

let showCreate = document.querySelector(".buttonShow");
showCreate.addEventListener("click",displayQuiz);

// create the dom------------------/////
function refreshDom(questions){

    let container = document.getElementById('container');
        container.remove();
        let contain = document.createElement('div');
        contain.id = 'container';
    
    questions.forEach(question => {
        let newQuestion = document.createElement("div");
        newQuestion.className = "question";
        newQuestion.id= question.id;

        let title= document.createElement("div");
        title.className ="title_quiz";

        let textOfTitle = document.createElement("div");
        textOfTitle.className = "name_text";
        textOfTitle.textContent = question.title;

        let answers = document.createElement("div");
        answers.className = "answers";

        let answer1 = document.createElement("div");
        answer1.className = "answer_one";
        answer1.textContent = question.answer1;

        let answer2 = document.createElement("div");
        answer2.className = "answer_two";
        answer2.textContent = question.answer2;

        let answer3 = document.createElement("div");
        answer3.className = "answerr_three";
        answer3.textContent = question.answer3;

        let answer4 = document.createElement("div");
        answer4.className = "answer_four";
        answer4.textContent = question.answer4;

        let icons= document.createElement("div");
        icons.className = "icons";

        let pencil = document.createElement("i");
        pencil.className = "fa fa-pencil fa-2x cons";

        let trash = document.createElement("i");
        trash.className = "fa fa-trash-o fa-2x cons";
        trash.id="delete";
        trash.addEventListener("click",removeQuestion)
        
        title.appendChild(textOfTitle);
        
        contain.appendChild(newQuestion);
        newQuestion .appendChild(title);
        newQuestion.appendChild(answers);
        answers.appendChild(answer1);
        answers.appendChild(answer2);
        answers.appendChild(answer4);
        answers.appendChild(answer3);
        newQuestion.appendChild(icons);
        icons.appendChild(pencil);
        icons.appendChild(trash);

    //    console.log(newQuestion)
    //    console.log(title);
})
document.body.appendChild(contain); 

};
// function getallquiz(){
    //     refreshDom();
    // }
    
    
    // get question 
    function getQuestions() {
        axios.get("/api/items").then(items=>{
            console.log(items.data);
            refreshDom(items.data);
        })
    }
    
    // create question-----------------------------//
    function creatItems() {
        let item_new = {};
        item_new.title =document.getElementById('question').value;
        item_new.answer1 =document.getElementById('answer_a').value;
        item_new.answer2 =document.getElementById('answer_b').value;
        item_new.answer3 =document.getElementById('answer_c').value;
        item_new.answer4 =document.getElementById('answer_d').value;
        axios.post("/api/items", item_new);
        console.log(item_new);
        getQuestions();
        
        // location.reload();
}

// delete itme form database -----------

function removeQuestion(e){
    e.preventDefault();
    if(e.target.id==="delete"){
  
        let id = e.target.parentElement.parentElement.id;
            console.log(id)
        axios.delete("/api/items/"+id);
        getQuestions();
    }
}

const add = document.querySelector(".adds");
add.addEventListener("click",creatItems);
getQuestions()



//action for clik noe place of input-----------
function hidShowInput(){
    
    noneData.style.display="block";
    create_quiz.style.display="none";
    buttonshowss.style.display="block";
    

}

let adds = document.getElementById("addss");
let cancel = document.querySelector(".cancel")
adds.addEventListener("click",hidShowInput);
cancel.addEventListener("click",hidShowInput);


// none --------- about quiz in the container--------

// constainerss.style.display="none"
let constainers = document.querySelector("#container");
let constainerss=document.querySelector(".containerss");
function showHideQuestion (){
    constainers.style.display="none";

}

let showDataquiz = document.querySelector("#dataquiz");
showDataquiz.addEventListener("click",showHideQuestion);


