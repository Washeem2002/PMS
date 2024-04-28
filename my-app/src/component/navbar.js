import  icon from "../assets/hospital-svgrepo-com.svg";
import { IoPersonAdd } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
const Nav=()=>{
    const navigate=useNavigate();
    return(
        <>
        <header className="py-2 px-3 w-full bg-stone-300 fixed top-0">
         <div className="flex ">
          <div className="flex  flex-grow">
          <img src={icon} className="w-[35px] h-[35px]" onClick={()=>{navigate("/")}}></img>

          </div>
          <div className="flex  gap-4">
          <div className="h-full w-[250px]  flex items-center bg-white rounded-full px-2  justify-between" onClick={()=>{navigate("/search")}}><span className="text-[20px] font-[500] text-black/40">Search</span><span className="text-[30px] font-[900]"><CiSearch/></span></div>
          <div className="h-full text-[35px] flex items-center text-white" onClick={()=>{navigate("/add")}}><IoPersonAdd/></div>
         
          <div></div>

          </div>

         </div>
        </header>
        <div className="h-[51px]"></div>
        
        
        </>
    )
}
export default Nav;