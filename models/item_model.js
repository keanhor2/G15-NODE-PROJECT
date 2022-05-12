
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

    //save data 
    saveDataOfitems(getItems);
    return true;
};
// remove data one by one 
function removeQuestion(id){
     //read items
    let getItems = getDataOfitems();
    // define id each questions

    let index = getItems.findIndex(item => item.id === id);
    console.log(index);
    if(index !== -1){
        getItems.splice(index, 1);
    }
    //save data
    saveDataOfitems(getItems);
    return true;
}


// Update the Items in Data

function updateQuestion(item,id){
    // read all data
    let getItems = getDataOfitems();
    // define id to update question
    let index = getItems.findIndex(item => item.id===id);
    if (index !==-1){
        let newItem = getItems[index];
        if(item.title !== undefined){
            newItem.title = item.title
        }
        if(item.answer1 !== undefined){
            newItem.answer1 = item.answer1
        }
        if(item.answer2 !== undefined){
            newItem.answer2 = item.answer2
        }
        if(item.answer3 !== undefined){
            newItem.answer3 = item.answer3
        }
        if(item.answer4 !== undefined){
            newItem.answer4 = item.answer4
        }
        if(item.score !== undefined){
            newItem.score = item.score
        }
        if(item.correctAnswer !== undefined){
            newItem.correctAnswer = item.correctAnswer
        }
    }
    //save data
    saveDataOfitems(getItems);
    return true
}

module.exports=
{
    getQuestions,
    createQuestion,
    removeQuestion,
    updateQuestion
}

