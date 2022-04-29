const express = require('express');
const router = express.Router();

const itemModel = require("../models/item_model");

// Define dynamic routes
//read all items
router.get('/',(req,res) => {
    let questions = itemModel.getQuestions();
    res.send(questions);
    if(questions.length>0){
        res.send(questions);
    }else{
        res.send({"message":"Request error"})
    }
})

// read one items

//write items
router.post('/',(req,res) => {
    let newQuestion = req.body.question;
    let newAnswer1 = req.body.answers[0];
    let newAnswer2 = req.body.answers[1];
    let newAnswer3 =req.body.answers[2];
    let newAnswer4 = req.body.answers[3];
    // let newScore = req.body.score;
    let newCorrectAnswer = req.body.correctAnswer;
    itemModel.createQuestion(newQuestion,newAnswer1,newAnswer2,newAnswer3,newAnswer4,newCorrectAnswer);
    res.send("SUCCESSFUL");
    // if(isCreated){
    //     res.status(200),send
    //     (
    //         {"message":"Question created successfully"}
    //     )
    // }else{
    //     res.status(404).send
    //     (
    //         {"message":"All field required"}
    //     )
    // }
})

// delete data in items


module.exports = router;
