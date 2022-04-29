const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

// link to path of the database
const PATH = ('./database/data.json');
 
// read  data of items from file
function getDataOfitems(){
  return JSON.parse(fs.readFileSync(PATH));
}

// save data of items
function saveDataOfitems(items){
    fs.writeFileSync(PATH, JSON.stringify(items,null,4));
}

// get all question of quiz
function getQuestions(){
    let getItems = getDataOfitems();
    return getItems;
}

// create question in quiz 
function createQuestion(newQuestions,newAnswer1,newAnswer2,newAnswer3,newAnswer4,newCorrectAnswer){
    // get all question
    let  getItems = getDataOfitems();
    // define id 
    
    
    // create new question 
    let newQuestion = {"id":uuidv4(),"question":newQuestions, "answers":[newAnswer1,newAnswer2,newAnswer3,newAnswer4],"correctAnswer":newCorrectAnswer}
    for(let item of getItems){
        let question = item.quiz;
        question.push(newQuestion)
    }
    //save data
    saveDataOfitems(getItems);
}
// remove data one by one 


// update in question

module.exports=
{
    getQuestions,
    createQuestion,
    removeQuestion
}

