// Start Javascript // 
const container =document.getElementById("container");
const homequiz =document.querySelector(".home_quiz");
// show about display block and none
// container.style.display="block";
homequiz.style.display="none";

function displayNext(){
    container.style.display="none";
    contain_form.style.display="block";
}

let buttonNext = document.getElementById("start_page");
buttonNext.addEventListener("click",displayNext);




// -----------------

const contain_form = document.querySelector(".contain_form");
let haderss = document.querySelector(".haderss");
contain_form.style.display="none";
haderss.style.display="none";

function get_help (){
    contain_form.style.display="none";
    homequiz.style.display="block";
    haderss.style.display="block";

}

let get_helps = document.querySelector(".bubmitss");
get_helps.addEventListener("click",get_help);