import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Search() {
 ;
  const[date,setdata]=useState([]);
  const navigate=useNavigate();
  

  return (
    <div className='w-full h-full flex flex-col gap-5'>
      <input type="text" placeholder="Search..." className="bg-black border-2 border-red-900 text-black text-[25px] h-[50px] rounded-lg focus:ring-blue-500 focus:border-blue-500   block w-full p-1.5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none" onChange={(e)=>{
fetch("http://localhost:5000/search",{
  method:"POST",
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({field:e.target.value})
}).then((result)=>{return result.json()}).then((result)=>{console.log(result);setdata(result)})


      }}></input>
      {date.map((arr,i)=>{
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
      })}  

    </div>
  );
}

export default Search;
