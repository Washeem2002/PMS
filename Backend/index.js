const express=require("express");
const mongoose=require("mongoose");
const cors=require('cors');
const path=require('path');
const patientadd=require("./routes/patientadd");
const fetch_patient=require("./routes/fetch_patient");
const search_patient=require("./routes/search_patient");
const patient_detail=require("./routes/patientdetail");
const patient_update=require("./routes/detail_update");
const app=express();
const patient=require("./Models/Patient")
app.use(express.json({limit: '100mb'}));
app.use(cors({
    origin: '*'
}));



mongoose.connect("mongodb+srv://jkrowling:123@cluster0.gcyqs6j.mongodb.net/?retryWrites=true&w=majority",{dbName:"HMS"}).then(()=>{console.log("connected")})
app.use(patientadd);
app.use(fetch_patient);
app.use(search_patient);
app.use(patient_detail);
app.use(patient_update);



app.listen(5000,()=>{console.log("app is running")})