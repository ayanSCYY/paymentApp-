import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header2 from '../components/header2';

function Signup() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

return (
<div>
    <Header2/>
    <div className=' grid grid-cols-1 my:grid my:grid-cols-1   '>
        <div className='flex justify-center items-center'>
        <div className='shadow-3xl flex flex-col  h-84 w-72 items-center justify-center  bg-white/[0.08]'>
            <div className='text-2xl text-center  font-bold text-[#08235A]'>
                Sign Up
            </div>
            <div className='p-6  '>
                <div className='text-[#08235A] text-sm font-bold mb-1 mt-3'>firstname</div>
                <input className=' bg-[#08235A]/[0.8] h-8 w-52 items-center p-2 transition text-white  hover:bg-[#08235A] transition-transform hover:scale-105 hover:border-none ' type="text" placeholder="john" onChange={(e) => setFirstname(e.target.value)} />
                <div className='text-[#08235A] text-sm font-bold mb-1 mt-3'>lastname</div>
                <input className=' bg-[#08235A]/[0.8] h-8 w-52 items-center p-2 transition text-white  hover:bg-[#08235A] transition-transform hover:scale-105 hover:border-none' type="text" placeholder="cena" onChange={(e) => setLastname(e.target.value)} />
                <div className='text-[#08235A] text-sm font-bold mb-1 mt-3'>username</div>
                <input className=' bg-[#08235A]/[0.8] h-8 w-52 items-center p-2 transition text-white  hover:bg-[#08235A] transition-transform hover:scale-105 hover:border-none' type="text" placeholder="johncena1@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                <div className='text-[#08235A] text-sm font-bold mb-1 mt-3'>password</div>
                <input className=' bg-[#08235A]/[0.8] h-8 w-52 items-center p-2 transition text-white  hover:bg-[#08235A] transition-transform hover:scale-105 hover:border-none' type="text" onChange={(e) => setPassword(e.target.value)} /><br/>
                <div className='text-center  mt-5  '>
                    <button className='text-[#08235A] bg-white border-1 border-[#08235A] rounded-3xl h-8 w-52 text-sm hover:bg-[#08235A] hover:text-white mr-4' onClick={async () => {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        username: email,
                        firstName: firstname,
                        lastName: lastname,
                        password
                    });
                    localStorage.setItem("tokensignup", response.data.token);
                    localStorage.setItem("firstName", response.data.firstName);
                    navigate("/Dashboard");
                }}>Sign Up</button>
                </div>
                <div className='mt-3'>
                    <div className='text-[#08235A] text-xs text-center'>Already have an account? <a className='text-black text-button2' href="/">Login</a></div>
                </div>
            </div>
        </div>
        </div> 
      {/*   <div className="max-my:hidden flex justify-center items-center my:shadow-3xl my:rounded-2xl my:h-100 my:max-xl:w-100 bg-sigu bg-cover mr-22 xl:w-124 ">
        
        </div> */}
    </div>
</div>
    );
}

export default Signup;
