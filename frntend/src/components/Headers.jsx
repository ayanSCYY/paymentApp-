import { useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    
    return (
        <div>
            <div></div>
            <div>HAPPY PAY</div>
            <div>
                <button onClick={() => {navigate("/signin")}}>Login</button>
            </div>
        </div>
    );
}

export default Header;
