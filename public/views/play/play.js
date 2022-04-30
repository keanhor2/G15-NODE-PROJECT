

// create the dom------------------/////
function refreshDom(questions){

    let container = document.getElementById('container');
        container.remove();
        let contain = document.createElement('div');
        contain.id = 'container';
    
    questions.forEach(question => {
        let newQuestion = document.createElement("div");
        newQuestion.className = "question";

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

        let iconse= document.createElement("div");
        iconse.className = "icons";

        let trash = document.createElement("i");
        trash.className = "fa fa-arrow-right fa-2x cons";
      
    

        
        title.appendChild(textOfTitle);
        
        contain.appendChild(newQuestion);
        newQuestion .appendChild(title);
        newQuestion.appendChild(answers);
        answers.appendChild(answer1);
        answers.appendChild(answer2);
        answers.appendChild(answer4);
        answers.appendChild(answer3);
        newQuestion.appendChild(iconse);
        // iconse.appendChild(pencil);
        iconse.appendChild(trash);
})
document.body.appendChild(contain); 

};

    // get question 
function getQuestions() {
    axios.get("/api/items").then(items=>{
    // console.log(items.data);
    refreshDom(items.data);
    });
}
    
getQuestions()


let constainers = document.querySelector("#container");
let constainerss=document.querySelector(".containerss");
function showHideQuestion (){
    constainers.style.display="none";
}

showHideQuestion();


