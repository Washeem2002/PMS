const {Router}=require('express');
const app=Router();
const patient=require("../Models/Patient")
app.post("/post",(req,res)=>{
    console.log(req.body);
    patient.create({
        name:req.body.name,
        mobileno:req.body.mobileno,
        add:"dfgbdf",
        age:req.body.age,
        img:req.body.img,
        disease:req.body.disease,
        department:req.body.dpt,
        status:"Active",
        date:new Date(),
        report:[]
      }).then((result)=>{ 
        
        console.log(result);
        res.json(result);
      
      
      }).catch((err)=>{ console.log(err)});
});
module.exports=app;