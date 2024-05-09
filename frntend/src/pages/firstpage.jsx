import { useNavigate } from "react-router-dom";
function Firstpage(){
    const navigate=useNavigate();
    return (
        <div>
            <div>Seamless transactions <br/>for your convenience</div>
            <div><button onClick={()=>{navigate("/signup")}}>Sign Up</button></div>
        </div>
    )
}

export default Firstpage;