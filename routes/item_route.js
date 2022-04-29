const express = require('express');
const router = express.Router();

const itemModel = require("../models/item_model");

// Define dynamic routes
//read all items
router.get('/',(req,res) => {
    let questions = itemModel.getQuestions();
    res.send(questions);
})

//write items
router.post('/',(req,res) => {
    let newQuestions = req.body.title;
    let newAnswer1 = req.body.answer1;
    let newAnswer2 = req.body.answer2;
    let newAnswer3 =req.body.answer3;
    let newAnswer4 = req.body.answer4;
    let newScore = req.body.score;
    let newCorrectAnswer = req.body.correctAnswer;
    let isCreated = itemModel.createQuestion(newQuestions,newAnswer1,newAnswer2,newAnswer3,newAnswer4,newScore,newCorrectAnswer);

    if(isCreated){
        res.status(200),send
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


module.exports = router;
