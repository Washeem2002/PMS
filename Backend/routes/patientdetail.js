const {Router}=require('express');
const app=Router();
const patient=require("../Models/Patient");
app.post("/patient",(req,res)=>{
    patient.findOne({"_id":req.body.id}).then((result)=>{
      res.json(result)
    })
  
  });
module.exports=app;