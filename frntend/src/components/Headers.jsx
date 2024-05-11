import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    
    return (
    <div className="h-16 w-1512 "> 
        <div className="flex justify-between">
           <div className="flex"> 
             <div className="h-6 w-6 b border-4 border-t-figma-bt border-r-figma-br border-b-figma-bl border-l-figma-bb ml-16 mt-4 "></div>
             <div className="text-figma-hc/[0.74] font-extrabold text-2xl ml-2 mt-3">HAPPY PAY</div>
            </div>
            <div className="bg-figma-button/[0.25] text-base text-figma-hc font-bold h-8 w-28 text-center rounded-lg mt-3 mr-56 transition ease-in-out delay-25 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 hover:text-blue-200 duration-1000">
                <button  onClick={()=>{navigate("/dashboard")}}>Dashboard</button>
            </div>
            <div className="bg-figma-button/[0.25] text-base text-figma-hc font-bold h-8 w-16 text-center rounded-lg mt-3 mr-3 transition ease-in-out delay-25 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 hover:text-blue-200 duration-1000">
                <button onClick={() => {navigate("/signin")}}>Login</button>
            </div>
        </div>
    </div>  
    );
}

export default Header;
