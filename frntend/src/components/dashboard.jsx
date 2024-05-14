import { useNavigate } from "react-router-dom";
import propTypes from 'prop-types'; 
function Dashboard({firstname}){
    const navigate=useNavigate()
    return (
    <div className=' basis-1/5 w-full bg-[#08235A] h-screen '>
      <div className='flex flex-col'>
        <div className="h-24 w-50"> 
          <div className="flex justify-between">
            <div className="flex"> 
              <div className='flex justify-between '>
                <div className='mr-3 w-8 h-8 border-1 border-white text-white rounded-full text-center text-lg font-bold ml-4 mt-10 font '>{firstname[0].toUpperCase()}</div>
                <div className='text-white text-center font-light text-base ml-4 mt-11'>hello, {firstname}  </div>
              </div>
            </div>  
          </div> 
        </div>
            <div className='text-center bg-figma-hc/[0.74] text-white  w-48 h-12 ml-4 mr-4 mt-4 text-base font-normal rounded-lg hover:cursor-pointer'><div className='mt-2.5 mr-4 '>Dashboard</div></div>
            <button className=' w-48 h-12 ml-4 mr-4 mt-2 mb-4 text-base text-white/[0.5] font-extralight hover:bg-figma-hc/[0.24] hover:text-white hover:rounded-lg' onClick={() => navigate('/transaction')}>transactions</button>
        </div>
        <div className='fixed bottom-0 text-center'>
            <button className='flex justify-center items-center w-48 h-12 m-4 text-base text-white/[0.5] font-normal hover:bg-figma-hc/[0.24]  hover:text-white hover:font-normal hover:rounded-lg' onClick={() => {
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
    
    )
}

Dashboard.propTypes = {
  firstname: propTypes.string
}
 
export default Dashboard