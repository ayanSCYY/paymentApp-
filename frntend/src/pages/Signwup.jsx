import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
    <div className='flex bg-signuppg bg-cover h-screen '>
        <div className='flex flex-col h-84 w-72 border-1 border-bordersu rounded-lg items-center justify-center ml-104 mt-20 mb-10 bg-white/[0.08]'>
            <div className='text-2xl text-center  font-bold text-white'>
                Sign Up
            </div>
            <div className='p-6  '>
                <div className='text-white/[0.5] text-sm font-bold mb-1 mt-3'>firstname</div>
                <input className='border-black/[0.30] border-1.5 bg-white/[0.1] h-8 w-52 items-center p-2 transition ease-in-out delay-25 hover:-translate-y-0.3 hover:scale-100 hover:bg-white/[0.03] duration-500 ' type="text" placeholder="john" onChange={(e) => setFirstname(e.target.value)} />
                <div className='text-white/[0.5] text-sm font-bold mb-1 mt-3'>lastname</div>
                <input className='border-black/[0.30] border-1.5 bg-white/[0.1] h-8 w-52 items-center p-2 transition ease-in-out delay-25 hover:-translate-y-0.3 hover:scale-100 hover:bg-white/[0.03] duration-500' type="text" placeholder="cena" onChange={(e) => setLastname(e.target.value)} />
                <div className='text-white/[0.5] text-sm font-bold mb-1 mt-3'>username</div>
                <input className='border-black/[0.30] border-1.5 bg-white/[0.1] h-8 w-52 items-center p-2 transition ease-in-out delay-25 hover:-translate-y-0.3 hover:scale-100 hover:bg-white/[0.03] duration-500' type="text" placeholder="johncena1@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                <div className='text-white/[0.5] text-sm font-bold mb-1 mt-3'>Password</div>
                <input className='border-black/[0.30] border-1.5 bg-white/[0.1] h-8 w-52 items-center p-2 transition ease-in-out delay-25 hover:-translate-y-0.3 hover:scale-100 hover:bg-white/[0.03] duration-500' type="text" onChange={(e) => setPassword(e.target.value)} /><br/>
                <div className='text-center  mt-5  '>
                    <button className='text-black/[0.9] bg-white/[0.8] border-1 border-black/[0.50] rounded-3xl h-8 w-52 text-sm font-bold transition ease-in-out delay-25 hover:-translate-y-0.3 hover:scale-100 hover:bg-white/[0.40] duration-1000 mr-4' onClick={async () => {
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
                    <div className='text-white/[0.60] text-xs text-center'>Already have an account? <a className='text-black text-button2' href="/signIn">Login</a></div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Signup;
