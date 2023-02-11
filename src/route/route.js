const express = require("express");
const router = new express.Router();
const AtheleteRanking = require("../models/athelete")

//create a collection
router.post("/athlete", async (req,res) => {
    try{
        const addingRecords = new AtheleteRanking(req.body)
        console.log(req.body);
        const insertdata = await addingRecords.save();
        res.status(201).send(insertdata);
    }catch(err){
        res.status(400).send(err);
    }
});

//get handle req
router.get("/athlete", async(req, res) =>{
    try{
        const getAthlete = await AtheleteRanking.find({});
        res.status(201).send(getAthlete);
    }catch(err){
        res.status(400).send(err);
    }
})

//get individual data
router.get("/athlete/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const getbyid = await AtheleteRanking.findById(_id);
        res.status(201).send(getbyid);
    }catch(err){
        res.status(400).send(err);
    }
})

//same you can create to patch(update) 
router.patch("/athlete/:id", async(req, res) =>{
    try{
        const _id = req.params.id;
        const getbyid = await AtheleteRanking.findByIdAndUpdate(_id,req.body, {
            new:true
        });
        res.status(201).send(getbyid);
    }catch(err){
        res.status(500).send(err);
    }
})

router.delete("/athlete/:id", async(req, res) =>{
    try{
        const getbyid = await AtheleteRanking.findByIdAndDelete(req.params.id);
        res.status(201).send(getbyid);
    }catch(err){
        res.status(500).send(err);
    }
})


module.exports = router;