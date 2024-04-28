const { ObjectId } = require('mongodb');
const mongoose=require('mongoose');
const report=new mongoose.Schema({
  
  "detail":{type:String},
  "date":{type:Date}
})
const patient=new mongoose.Schema({
    "img":{type:String},
    "name":{type:String},
    "age":{type:Number},
    "add":{type:String},
    "disease":{type:String},
    "department":{type:String},
    "date":{type:Date},
    "mobileno":{type:Number},
    "status":{type:String},
    "report":[report],
    
  },{collection:"Patient"});
  const model=mongoose.model('Patient',patient);
module.exports=model