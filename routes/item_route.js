const { text } = require('express');
const express = require('express');
const req = require('express/lib/request');
const res = require('express/lib/response');
const { append } = require('express/lib/response');
const router = express.Router();

const itemModel = require("../models/item_model");

// Define dynamic routes
//read all items
router.get('/',(req,res) => {                        
    let questions = itemModel.getQuestions();
    res.send(questions);
})

// read one question
router.get('/:id',(req,res) => {
    let id = req.params.id;
    let questions = itemModel.getQuestions();
    for(let question of questions){
        if(question.id ===id){
            res.send(question);
        }
    }
})
//write items
router.post('/',(req,res) => {
    let newQuestions = req.body.title;
    let newAnswer1 = req.body.answer1;
    let newAnswer2 = req.body.answer2;
    let newAnswer3 =req.body.answer3;
    let newAnswer4 = req.body.answer4;
    let newScore =parseInt(req.body.score);
    let newCorrectAnswer = req.body.correctAnswer;
    let isCreated = itemModel.createQuestion(newQuestions,newAnswer1,newAnswer2,newAnswer3,newAnswer4,newScore,newCorrectAnswer);
    console.log(newQuestions)
    if(isCreated){
        res.status(200).send
        (
            {"message":"Question created successfully"}
        )
    }else{
        res.status(404).send
        (
            {"message":"All field required"}
        )
    }
})

// delete data in items
router.delete("/:id",(req, res)=>{
    let id = req.params.id;
    let isDeleteQuestion = itemModel.removeQuestion(id);
    console.log(isDeleteQuestion);
    if(isDeleteQuestion){
        res.send({"message":"Deleted Question successfully"});
    }else{
        res.send({"message":"id not found"});
    }
})

//Update the Data in Items--------
router.put("/:id",(req,res)=>{
    let id= req.params.id;
    let isUpdate = itemModel.updateQuestion(req.body,id)
    if(isUpdate){
        res.send({"message":"updated"})
    }
})

module.exports = router;
