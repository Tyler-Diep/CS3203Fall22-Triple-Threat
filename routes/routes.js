const express = require('express');
const router = express.Router();
module.exports = router;
const Model = require('../models/model');
//Find by ID | Get by ID | Update

//Post Method
/*
router.post('/post', (req, res) => {
    res.send('Post API')
}) */

//Get all Method 
router.get('/getAll/', async (req, res) => {
    try{
        const data = await Model.find();
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

//Get by Data Based on ID
router.get('/getOne/:id', async (req, res) => {

    try{ 
        const data = await Model.findById(req.params.id);
        res.json(data);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
})

//Update by ID Method
/*
router.patch('/update/:id', async (req, res) => {

    try{
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true};

        const result = awat Model.findByIdAndUpdate{id, updatedData, options};
        
        res.send(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
    
}) */

//Delete by ID Method
/*
router.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
}) */