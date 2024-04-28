const {Router}=require('express');
const app=Router();
const patient=require("../Models/Patient");
app.post("/query",(req,res)=>{
    console.log(req.body)
    if(req.body.status==="status")
    {
      patient.updateOne({"_id":req.body._id},{$set:{status:"Discharged"}}).then((result)=>{console.log();
      res.json(result);
      }).catch((err)=>{console.log(err)});
    }
    else
    {
      patient.updateOne({"_id":req.body._id},{$push:{report:{"detail":req.body.data,"date":new Date()}}}).then((result)=>{console.log(result)}).then((err)=>{console.log(err)});
    }
  })
module.exports=app;