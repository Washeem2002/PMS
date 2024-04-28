import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Patientdashboard() {
  const [data,setdata]=useState(null);
  const[active,setactive]=useState(false);
  const[disc,setdisc]=useState(false);
  const navigate=useNavigate()
  useState(()=>{
    fetch("http://localhost:5000/get").then((result)=>{ return result.json()}).then((result)=>{setdata(result)});
  },[])
  
  return (
    <>
    <div className='w-full h-full flex flex-col gap-2 bg-white'>
      
    { data!==null ? data.map((arr,i)=>{
        return(
          <div className='w-full h-[200px] bg-slate-700 rounded-xl flex p-5' onClick={()=>{navigate(`/patient/${arr._id}`)}}>
          <div className='w-fit h-full flex justify-center items-center'>
             <div className='w-[150px] h-[150px] bg-red-900 rounded-full overflow-hidden flex justify-center items-center'>
             <img src={arr.img} className='w-100 h-100' alt="image not find"></img>
             </div>
            
          </div>
          <div className='flex-grow h-full flex  p-4 justify-between'>
            <div className='w-fit h-full flex flex-col text-[30px] gap-2'>
             <div className='flex-grow w-full flex justify-center items-center font-[500]'>Name </div>
             <div className='flex-grow w-full flex justify-center items-center text-[25px] font-[400]'>{arr.name} </div>
             
 
            </div>
            <div className='w-fit h-full flex flex-col text-[30px] gap-2'>
             <div className='flex-grow w-full flex justify-center items-center font-[500]'>Age </div>
             <div className='flex-grow w-full flex justify-center items-center text-[25px] font-[400]'>{arr.age} </div>
             
 
            </div>
            <div className='w-fit h-full flex flex-col text-[30px] gap-2'>
             <div className='flex-grow w-full flex justify-center items-center font-[500]'>Disease</div>
             <div className='flex-grow w-full flex justify-center items-center text-[25px] font-[400]'>{arr.disease} </div>
             
 
            </div>
            <div className='w-fit h-full flex flex-col text-[30px] gap-2'>
             <div className='flex-grow w-full flex justify-center items-center font-[500]'>Depatment </div>
             <div className='flex-grow w-full flex justify-center items-center text-[25px] font-[400]'>{arr.department} </div>
             
 
            </div>
            <div className='w-fit h-full flex flex-col text-[30px] gap-2'>
             <div className='flex-grow w-full flex justify-center items-center font-[500]'>Status </div>
             <div className='flex-grow w-full flex justify-center items-center text-[25px] font-[400]'>{arr.status} </div>
             
 
            </div>
          </div>
 
         </div>
        )
      }):<div className='w-full h-100 text-[100px] flex justify-center items-center'> loading</div>  }

        
       
    </div>
    </>
  );
}

export default Patientdashboard;
