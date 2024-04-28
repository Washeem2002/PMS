import React from 'react';
import {Routes,Route} from "react-router-dom";
import Home from '../pages/Home';
import Search from '../pages/Search';
import NewPatient from '../pages/NewPatient';
import Patientdashboard from '../pages/Patientdashboard';
import Patient from '../pages/Patient';
import Report from '../pages/report';
function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Patientdashboard></Patientdashboard>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route path="/add" element={<NewPatient></NewPatient>}></Route>
        <Route path='/patient/:id' element={<Patient></Patient>}></Route>
        <Route path="/report/:id"  element={<Report></Report>}></Route>
    </Routes>
  );
}

export default AllRoutes;
