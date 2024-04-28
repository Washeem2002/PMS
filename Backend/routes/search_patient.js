const {Router}=require('express');
const app=Router();
const patient=require("../Models/Patient")
app.post("/search", (req,res)=>{
     
    patient.aggregate([
        {
          $addFields: {
            lowername: {
              $toLower: "$name" // Use "$name" to reference the "name" field
            }
          }
        },
        {
          $match: {
            lowername: { $regex: req.body.field.toLowerCase() }
          }
        }
      ]).then((result)=>{res.json(result)}).catch((err)=>{console.log(err)})
});
module.exports=app;