import { useNavigate } from "react-router-dom";
import propTypes from 'prop-types'; 
import { useState } from "react";
function Dashboard({firstname}){
    const navigate=useNavigate()
    const [clickcount,setClickcount]=useState(0);
    return (
      <div className=" col-span-1 flex justify-between max-my:items-center">
        <div className=' w-screen my:rounded-non bg-[#08235A]  my:w-64  my:h-screen '>
          <div className='flex  my:flex-col '>
            <div className="w-full my:h-24 my:w-50">
              <div className='max-my:grid max-my:grid-cols-2 my:flex  max-my:content-between  my:mr-10  '>
                <div className='max-my:ml-10 w-8 h-8 my:ml-[15%] max-my:text-white max-my:border-white border-1 max-my:mb-8 border-white text-white rounded-full text-center text-lg font-bold  mt-10 font '>{firstname[0].toUpperCase()}</div>
                <div className='max-my:hidden text-white text-center font-light text-base ml-8  mt-11'>hello, {firstname}  </div>
                <button className=" text-white  ml-[50%] my:hidden hover:bg-[#08235A]/[0.5] " onClick={()=>{setClickcount(clickcount+1)}} >menu</button>
                <div className="col-span-2 my:hidden"> <Menu clickcount={clickcount} setClickcount={setClickcount}/></div>
              </div>
            </div>
            <div className="max-my:hidden flex my:flex-col justify-center items-center">
                            <button className=' w-48 h-12 ml-4 mr-4 mt-2 mb-4 text-base text-white/[0.5] font-extralight hover:text-white hover:rounded-lg' onClick={() => navigate('/dashboard')}>Dashboard</button>
                            <div className='text-center text-white  my:w-48 my:h-12 ml-[15%] mr-4 mt-2 text-base font-normal hover:cursor-pointer'><div className='mt-2.5 mr-4 '>Transaction</div></div>

            </div>
          </div>
          <div className='max-my:hidden flex justify-center items-center my:fixed my:bottom-0 ml-[2%] mb-[1%] text-center'>
            <button className='flex justify-center items-center w-48 h-12  text-base text-white/[0.5] font-normal  hover:text-white hover:font-normal hover:rounded-lg' onClick={() => {
            localStorage.clear();
            navigate('/');
             }}> <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15" />
               </svg></div>
               <div>Logout</div>
            </button>
        </div> 
      </div>
      </div>
    
    )
}

const Menu=({clickcount,setClickcount})=>{
  const navigate=useNavigate()
  if(clickcount===1){
    return (
    
    <div className="z-1 flex flex-col relative  ">
      <div className="w-[40%] ml-[60%] flex flex-col bg-[#08235A]/[0.5] fixed shadow-2xl rounded-xl">
        <button className=" h-[3.5rem] text-center text-[#08235A] text-base hover:bg-[#08235A]/[0.3]  border-b-1  border-[#08235A]/[0.5]"  onClick={()=>{navigate('/dashboard');setClickcount(0)}}>dashboard</button>
        <button className="  h-[3.5rem] text-center text-[#08235A] text-base hover:bg-[#08235A]/[0.3]  border-b-1  border-[#08235A]/[0.5]" onClick={()=>{navigate('/transaction');setClickcount(0)}}>transaction</button>
        <button className="  h-[3.5rem] text-center text-[#08235A] text-base hover:bg-[#08235A]/[0.3]   border-[#08235A]/[0.5]"onClick={()=>{localStorage.clear();navigate('/');setClickcount(0)}}>Logout</button>
      </div>
    </div>
    )
 }
  if(clickcount===2){
  setClickcount(0)
  return null
 }
}

Dashboard.propTypes = {
  firstname: propTypes.string
}
Menu.propTypes={
  clickcount:propTypes.number,
  setClickcount:propTypes.func
}
 
export default Dashboard