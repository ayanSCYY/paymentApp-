import { useNavigate } from "react-router-dom";
import Header1 from "../components/Header1";
import axios from "axios";
import { useState } from "react";

function Firstpage() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    return (
        
    <div className="bg-[#08235A] h-screen w-screen ">
        <div>
            <Header1 />
            <div className="grid grid-cols-1 my:grid my:grid-cols-2">
                <div className=' flex justify-center items-center '>
                    <div className='shadow-3xl  flex w-80 md:w-100 h-100  '>
                       <div className=' w-70 max-sm:h-6 md:w-full md:h-full flex flex-col pl-16 pt-12'>
                            <div className="text-3xl text-white font-bold mb-8 mt-4 ">Login</div>
                            <div className="pr-16">
                                <div className="text-white mb-2 text-sm font-semibold">username</div>
                                <input className="w-full h-7 text-black bg-white/[0.8]  p-2 border-1 hover:bg-white transition  transition-transform hover:scale-105 hover:border-none " 
                                                type="text" 
                                                placeholder="johncena1@gmail.com" 
                                                onChange={(e) => setEmail(e.target.value)} 
                                />
                                <div className="text-white mb-2 mt-4 text-sm font-semibold">password</div>
                                <input className="w-full h-7 bg-white/[0.8] text-black p-2 border-1 border-black/[0.30] hover:bg-white transition transition-transform hover:scale-105 hover:border-none "
                                               type="text"
                    
                                                onChange={(e) => setPassword(e.target.value)} 
                                />
                                <div className=" mt-8 flex justify-center">
                                    <button className="text-white bg-[#08235A] basis-4/5 h-8 border-1 border-white rounded-lg hover:bg-white hover:text-[#08235A]" onClick={async () => {
                                        const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                                        username: email,
                                        password
                                    });
                                        localStorage.setItem("tokensignin", response.data.token);
                                        localStorage.setItem("firstName", response.data.firstName);
                                        navigate('/dashboard');
                                    }}>
                                        Sign In
                                    </button>
                                </div>
                            </div>
                            <div className='mt-3 ml-5 '>
                                <div className=' text-white text-xs'>Don&apos;t have an account? <a className='text-black text-signtt' href="/signup">signup</a></div>
                            </div>
                        </div>
            {/* <div className="flex flex-col items-center">
                <div className="">
                    <div className="text-5xl font-extrabold text-figma-hc/[0.74] mt-40">HAPPY PAY</div>
                    <div className="text-4xl font-extrabold text-figma-t">Seamless transactions <br/>for your convenience</div>
                </div>
                <div className="mt-10 text-figma-hc font-bold">
                    <button className="bg-figma-button/[0.25] text-base text-figma-hc font-bold h-8 w-20 text-center rounded-lg transition ease-in-out delay-25 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 hover:text-blue-200 duration-1000" onClick={() => {navigate("/signup")}}>SignUp</button>   
               </div>
            </div> */}


                    </div>
                </div>
                <div className="max-my:hidden flex justify-center items-center my:shadow-3xl my:rounded-2xl my:h-100 my:max-xl:w-100 bg-sgn bg-cover mr-22 xl:w-124 ">

                </div>
            </div>
        </div>
    </div>
    );
}

export default Firstpage;
