const {Router}=require('express');
const app=Router();
const patient=require("../Models/Patient");
app.get("/get",(req,res)=>{
    patient.find({}).then((result)=>{
        console.log(result)
        res.json(result);
    }).catch((err)=>{console.log(err)})
});
module.exports=app;