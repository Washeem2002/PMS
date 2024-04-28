import React from 'react';
import Patientdashboard from './Patientdashboard';
import Search from './Search';
import NewPatient from './NewPatient';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from '../Routes/AllRoutes';
function Home() {
  return (
    <div className='min-h-[calc(100vh-51px)]  w-full px-[100px] py-[30px]'>
   
        <AllRoutes></AllRoutes>
        
       
      
    </div>
  );
}

export default Home;
