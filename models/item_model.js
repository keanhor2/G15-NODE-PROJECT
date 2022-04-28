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
    fs.writeFileSync(PATH, JSON.stringify(items));
}

// get all question of quiz
function getQuestions(){
    let getItems = getDataOfitems();
    return getItems;
}

// create question in quiz 


// remove data one by one 


// update in question

module.exports=
{
    getQuestions
   
}

