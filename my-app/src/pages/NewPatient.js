import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewPatient() {
  const ref=useRef(null);
  const[image,setimage]=useState(null);
  const[name,setname]=useState(null);
  const[age,setage]=useState(null);
  const[mobile,setmobile]=useState(null);
  const[add,setadd]=useState(null);
  const[disease,setdisease]=useState(null);
  const[dpt,setdpt]=useState(null);
  const navigate=useNavigate();
 
  const handleimage=(e)=>{
    console.log(e.target.files[0]);
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=()=>{
      setimage(reader.result)
      console.log(reader.result);
    }
    reader.onerror=error=>{
      console.log(error)
    };

   
  }
  const submit=(e)=>{
    e.preventDefault()

    fetch("http://localhost:5000/post",{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },body:JSON.stringify({
       
        name:name,
        mobileno:mobile,
        add:add,
        age:age,
        img:image,
        disease:disease,
        dpt:dpt,
      })
    }).then((rsp)=>{return rsp.json()}).then((rsp)=>{
      navigate("/")
    })
  }
  return (
    <form className='w-full h-full flex  gap-[100px] justify-center' >
      <div className=' flex flex-col jusitify-center gap-3 bg-white'>
        <input type='file' accept='image/*' ref={ref} className='hidden' onChange={handleimage}></input>
       <div className='w-[150px] h-[150px] bg-stone-200 rounded-full flex justify-center items-center overflow-hidden'>
      { (image!=null) && (<img src={(image)} alt='' className='w-100 h-auto '></img>)}
       </div>
       <div className='px-3 py-2  rounded-full bg-slate-400 text-center' onClick={()=>{ref.current.click()}}>Upload Profile</div>

      </div>
      <div className='w-[500px]  flex flex-col gap-4'>
         <div >
           <label for="name" class="block mb-2 font-bold text-gray-600">Name</label>
           <input type="text" id="name" name="name" placeholder="Put in your fullname." class="border border-gray-300 shadow p-3 w-full rounded  focus:outline-none" onChange={(e)=>{setname(e.target.value)}}  required/>
         </div>
         <div >
           <label for="name" class="block mb-2 font-bold text-gray-600">Age</label>
           <input type="number" id="name" name="name" placeholder="Put in Patient Age." class="border border-gray-300 shadow p-3 w-full rounded  focus:outline-none" onChange={(e)=>{setage(e.target.value)}} required/>
         </div>
         <div >
           <label for="name" class="block mb-2 font-bold text-gray-600">Mobile no.</label>
           <input type="number" id="name" name="name" placeholder="Put in Patient Mobile no." class="border border-gray-300 shadow p-3 w-full rounded  focus:outline-none"onChange={(e)=>{setmobile(e.target.value)}} required/>
         </div>
         <div >
           <label for="name" class="block mb-2 font-bold text-gray-600">Address</label>
           <input type="text" id="name" name="name" placeholder="Put in patient Address." class="border border-gray-300 shadow p-3 w-full rounded  focus:outline-none" onChange={(e)=>{setadd(e.target.value)}} required/>
         </div>
         <div >
           <label for="name" class="block mb-2 font-bold text-gray-600">Disease</label>
           <input type="text" id="name" name="name" placeholder="Put in patient Disease." class="border border-gray-300 shadow p-3 w-full rounded  focus:outline-none" onChange={(e)=>{setdisease(e.target.value)}} required/>
         </div>
         <div >
           <label for="name" class="block mb-2 font-bold text-gray-600">Depatment</label>
           <input type="text" id="name" name="name" placeholder="Put in Department." class="border border-gray-300 shadow p-3 w-full rounded  focus:outline-none" onChange={(e)=>{setdpt(e.target.value)}} required/>
         </div>
         <div className='w-full '>
          <button type='submit' className='w-full h-[40px] bg-green-900 rounded' onClick={submit}>Submit</button>
           
         </div>
      </div>
      
    </form>
  );
}

export default NewPatient;
