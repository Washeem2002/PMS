import React, { useEffect } from 'react';
import { useRef ,useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RxCross2 } from 'react-icons/rx';
import { IoIosArrowDown } from "react-icons/io";
const Report=()=>{
   const{id}=useParams();
    const ref=useRef(null);
    const ref1=useRef(null);
    const [image,setimage]=useState(null);
    const [data,setdata]=useState("");
    const navigate=useNavigate()
    const handle=(e)=>{
      if (!ref.current) {
        return;
      }
  
      ref.current.style.height="auto"
      ref.current.style.height = `${ref.current.scrollHeight}px`;
      setdata(e.target.value)
    }
  

    useEffect(()=>{
        fetch("http://localhost:5000/patient",{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({id})
         }).then((result)=>{return result.json()}).then((result)=>{console.log("report") ;setimage(result.img)})
         
    },[]);
    const submit=()=>{
        fetch("http://localhost:5000/query",{
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({status:"report",_id:id,data:data})
         }).then((result)=>{return result.json()}).then((result)=>{})
         navigate(-1)
    }
  return (
    <>
    <div>
   {image!==null? <div className={`w-full h-full relative bg-white rounded-[16px] text-black`}>
        <div className='w-full h-full flex justify-center lm:rounded-[16px] '>
         <div className='w-full lm:max-w-[630px] h-full  bg-white  flex flex-col lm:rounded-[16px] gap-[10px] overflow-auto p-[15px] '>
            <div className='w-full  shrink-0 text-[23px] flex items-center justify-between'><RxCross2 onClick={()=>{navigate(-1)}}></RxCross2><div className='py-1 px-5 bg-green-500 rounded-full text-[20px]' onClick={submit}>Add report</div></div>
            {/*Comment start*/}
           
   {/*Comment end*/}
   <div className="w-full h-fit  bg-white rounded-lg lm:p-3 flex gap-[10px] ">
    
    <div className='w-fit  h-100 flex  flex-col items-center relative gap-[5px]'><div className='w-[40px] h-[40px] shrink-0  rounded-full cursor-pointer bg-slate-700 flex justify-center items-center overflow-hidden'>
     {/* <div className='w-fit h-fit text-[30px]'>H</div> */}
     <img src={image} className='w-100 h-100' alt="image not find"></img>
     </div>
     <div className='w-[1px] h-full bg-white'></div></div>
    <div className='w-full flex flex-col gap-3  h-fit '>
     
      <form className='w-full h-full flex flex-col gap-3'>
          <textarea className='w-full resize-none h-auto   focus:outline-none text-[20px] font-[600]' ref={ref} onChange={(e)=>{handle(e)}} rows={1} placeholder='Post Your Report'></textarea>
         

      </form>
      


    </div>
    
    
   </div>

         </div>
         
        </div>
      
    </div>:<div className='w-full h-full flex justify-center items-center text-[200px]'> Loading...</div>}
    </div>
    </>
  );
  
    
}

export default Report;