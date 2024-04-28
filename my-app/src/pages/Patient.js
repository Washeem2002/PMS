import React, { useEffect, useState } from 'react';
import { FaExchangeAlt } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
function Patient() {
    const {id}=useParams();
    const[data,setdata]=useState([]);
    const [report, setreport]=useState([]);
    const navigate=useNavigate()
    useEffect(()=>{
        fetch("http://localhost:5000/patient",{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id})
         }).then((result)=>{return result.json()}).then((result)=>{console.log(result);setdata([result]);
         setreport(result.report)});
        
    },[]);
    const discharged=()=>{
      fetch("http://localhost:5000/query",{
         method:"POST",
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({status:"status",_id:id})
      }).then((result)=>{return result.json()}).then((result)=>{
         
            fetch("http://localhost:5000/patient",{
               method:"POST",
               headers: { 'Content-Type': 'application/json' },
               body: JSON.stringify({id})
            }).then((result)=>{return result.json()}).then((result)=>{console.log(result);setdata([result]);
            setreport(result.report)});
           


      })
    }
  return (
    <>
    {data.map((arr,i)=>{
        return(
        <div className='w-full h-full mb-5'>
        <div className='flex flex-wrap gap-3 justify-center'>
            <div className=' w-fit h-full px-3 py-2 bg-slate-500 flex gap-2 justify-center rounded-md min-w-[200px]'>
             <div className='w-[150px] h-[150px]  rounded-full bg-white overflow-hidden flex justify-center items-center'>
                <img src={arr.img} className='w-full h-auto'></img>
             </div>
             <div className='  h-100 flex flex-col px-5 text-[20px] font-[500]'>
                <div className='flex-grow  flex justify-center items-center text-black  text-opacity-50'>Name</div>
                <div className='flex-grow  flex justify-center items-center'>{arr.name}</div>
             </div>

            </div>

            <div className=' w-fit h-100 px-3 py-2 bg-slate-500 flex gap-2 justify-center rounded-md min-w-[200px]'>
             
             <div className='  h-100 flex flex-col px-5 text-[20px] font-[500] '>
                <div className='flex-grow text-black flex justify-center items-center text-opacity-50'>Age</div>
                <div className='flex-grow  flex justify-center items-center'>{arr.age}</div>
             </div>

            </div>

            <div className=' w-fit h-100 px-3 py-2 bg-slate-500 flex gap-2 justify-center rounded-md min-w-[200px]'>
             
             <div className='  h-100 flex flex-col px-5 text-[20px] font-[500]'>
                <div className='flex-grow  flex justify-center items-center  text-black  text-opacity-50'>Mobile No</div>
                <div className='flex-grow  flex justify-center items-center'>{arr.mobileno}
</div>
             </div>

            </div>

            <div className=' w-fit h-100 px-3 py-2 bg-slate-500 flex gap-2 justify-center rounded-md min-w-[200px]'>
             
             <div className='  h-100 flex flex-col px-5 text-[20px] font-[500]'>
                <div className='flex-grow  flex justify-center items-center text-black  text-opacity-50'>Address</div>
                <div className='flex-grow  flex justify-center items-center'>{arr.add}</div>
             </div>

            </div>
            <div className=' w-fit h-100 px-3 py-2 bg-slate-500 flex gap-2 justify-center rounded-md min-w-[200px]'>
             
             <div className='  h-100 flex flex-col px-5 text-[20px] font-[500]'>
                <div className='flex-grow  flex justify-center items-center text-black  text-opacity-50'>Date of Admmit</div>
                <div className='flex-grow  flex justify-center items-center'>{((arr.date).split('T'))[0]}</div>
             </div>

            </div>
            <div className=' w-fit h-100 px-3 py-2 bg-slate-500 flex gap-2 justify-center rounded-md min-w-[200px]'>
             
             <div className='  h-100 flex flex-col px-5 text-[20px] font-[500]'>
                <div className='flex-grow  flex justify-center items-center text-black  text-opacity-50'>Disease</div>
                <div className='flex-grow  flex justify-center items-center'>{arr.disease}</div>
             </div>

            </div>
            <div className=' w-fit h-100 px-3 py-2 bg-slate-500 flex gap-2 justify-center rounded-md min-w-[200px]'>
             
             <div className='  h-100 flex flex-col px-5 text-[20px] font-[500]'>
                <div className='flex-grow  flex justify-center items-center text-black  text-opacity-50'>Depatment</div>
                <div className='flex-grow  flex justify-center items-center'>{arr.department}</div>
             </div>

            </div>
            <div className=' w-fit h-100 px-3 py-2 bg-slate-500 flex gap-2 justify-center rounded-md min-w-[200px] relative'>
             
             <div className='  h-100 flex flex-col px-5 text-[20px] font-[500] '>
                <div className='flex-grow  flex justify-center items-center text-black  text-opacity-50'>Status</div>
                <div className='flex-grow  flex justify-center items-center'>{arr.status}</div>
                <div className='w-[30px] h-[30px] absolute  top-1 right-2 text-[30px]' onClick={discharged}><FaExchangeAlt></FaExchangeAlt></div>
             </div>

            </div>

         


            

        </div>

      
    </div>
    
   
   
   )
    })}
    <div className='w-full bg-slate-200 p-3 flex flex-col gap-2'>
      <div className='w-full p-4 flex justify-center items-center h-full text-xl font-[700] justify-between'> <span>Reports</span><span className='bg-green-500 px-7 py-3 rounded' onClick={()=>{navigate(`/report/${id}`)}}>Add Report</span></div>
     {report.map((arr,i)=>(<div className='w-full min-h-[80px] h-full bg-slate-600 flex gap-2 '>
         <div className='w-[200px] h-100 bg-green-900 flex justify-center items-center text-lg'>{(arr.date).split('T')[0]}</div>
         <div className="w-full overflow-hidden break-words px-[10px] h-100  text-xl text-center ">{arr.detail}</div>
      </div>))}
      {(report.length===0) && (<div className='w-full min-h-[80px] h-full  flex gap-2 text-xl justify-center items-center'>
         No Report yet!!
      </div>)}

    </div>
    </>
  );
}

export default Patient;
