const fs = require('fs');
const { v4: uuidv4 }= require('uuid');

// link to path of the database
const PATH = ('./database/data.json');
 
// read  data of items from file
function getDataOfitems(){
  return JSON.parse(fs.readFileSync(PATH));
}

// save data of items
function saveDataOfitems(items){
    fs.writeFileSync(PATH, JSON.stringify(items,null,2));
}

// get all question of quiz
function getQuestions(){
    let getItems = getDataOfitems();
    return getItems;
}

// create question in quiz 
function createQuestion(title,answer1,answer2,answer3,answer4,score,correctAnswer){
    //read items
    let getItems = getDataOfitems();
    // create new question and answers
    let item = 
    {"id":uuidv4(),
    "title":title,
    "answer1":answer1,
    "answer2":answer2,
    "answer3":answer3,
    "answer4":answer4,
    "score":score,
    "correctAnswer":correctAnswer
    }
    getItems.push(item);

    //save data again
    saveDataOfitems(getItems);
}
// remove data one by one 


module.exports=
{
    getQuestions,
    createQuestion,
    removeQuestion
}

