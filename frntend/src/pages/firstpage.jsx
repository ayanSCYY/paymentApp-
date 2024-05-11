import { useNavigate } from "react-router-dom";
import Header from "../components/Headers";

function Firstpage() {
    const navigate = useNavigate();
    
    return (
        <div className="bg-firstpagepg bg-cover h-screen">
            <div >
                <Header />
            </div>
            <div className="flex flex-col items-center">
                <div className="">
                    <div className="text-5xl font-extrabold text-figma-hc/[0.74] mt-40">HAPPY PAY</div>
                    <div className="text-4xl font-extrabold text-figma-t">Seamless transactions <br/>for your convenience</div>
                </div>
                <div className="mt-10 text-figma-hc font-bold">
                    <button className="bg-figma-button/[0.25] text-base text-figma-hc font-bold h-8 w-20 text-center rounded-lg transition ease-in-out delay-25 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 hover:text-blue-200 duration-1000" onClick={() => {navigate("/signup")}}>SignUp</button>   
               </div>
            </div>
        </div>
    );
}

export default Firstpage;
