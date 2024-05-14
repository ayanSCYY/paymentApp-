import { useNavigate } from "react-router-dom";

function Header1() {
    const navigate = useNavigate();
    
    return (
    <div className="h-20 w-1512 "> 
        <div className="flex justify-between">
            <div className="">
             <div className="flex items-center text-white font-bold font-merri text-3xl ml-20 mt-3 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path d="M5.507 4.048A3 3 0 0 1 7.785 3h8.43a3 3 0 0 1 2.278 1.048l1.722 2.008A4.533 4.533 0 0 0 19.5 6h-15c-.243 0-.482.02-.715.056l1.722-2.008Z" />
                <path fillRule="evenodd" d="M1.5 10.5a3 3 0 0 1 3-3h15a3 3 0 1 1 0 6h-15a3 3 0 0 1-3-3Zm15 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm2.25.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM4.5 15a3 3 0 1 0 0 6h15a3 3 0 1 0 0-6h-15Zm11.25 3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM19.5 18a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clipRule="evenodd" />
                </svg><div className="ml-2">Happy pay</div>

            </div>
            </div>
            <div>
                <button className="text-base text-[#08235A] bg-white font-merri font-bold h-10 w-20 text-center  mt-3 mr-3" onClick={() => {navigate("/signin")}}>Login</button>
                <button className="text-base text-white font-merri font-bold h-8 w-16 text-center rounded-lg mt-3 mr-3 transition ease-in-out delay-25 hover:-translate-y-1 hover:scale-105 hover:text-black-300 duration-1000" onClick={() => {navigate("/signup")}}>signup</button>
            </div>
        </div>
    </div>  
    );
}

export default Header1;
