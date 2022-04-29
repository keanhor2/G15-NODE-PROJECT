// Start Javascript // 
const container =document.getElementById("container");
const homequiz =document.querySelector(".home_quiz");
const contain_form = document.querySelector(".contain_form")
// show about display block and none
// container.style.display="block";
homequiz.style.display="none";
contain_form.style.display="none"
function displayNext(){
    container.style.display="none";
    homequiz.style.display="block";
}


let buttonNext = document.getElementById("start_page");
buttonNext.addEventListener("click",displayNext);