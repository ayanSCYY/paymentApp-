import { useNavigate } from "react-router-dom";
import Header from "../components/Headers";

function Firstpage() {
    const navigate = useNavigate();
    
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <div>Seamless transactions <br/>for your convenience</div>
                <div>
                    <button onClick={() => {navigate("/signup")}}>Sign Up</button>
                </div>
            </div>
        </div>
    );
}

export default Firstpage;
