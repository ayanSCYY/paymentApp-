import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div>
            <div>Login</div>
            <div>
                <div>Email</div>
                <input 
                    type="text" 
                    placeholder="johncena1@gmail.com" 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <div>Password</div>
                <input 
                    type="password" 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <br/>
                <button onClick={async () => {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                        username: email,
                        password
                    });
                    localStorage.setItem("tokensignin", response.data.token);
                    localStorage.setItem("firstName", response.data.firstName);
                    const firstName = localStorage.getItem("firstName");
                    navigate('/dashboard?firstname=' + firstName);
                }}>Sign In</button>
            </div>
            <div>Don&apos;t have an account? <a href="/signup">Sign Up</a></div>
        </div>
    );
}

export default Signin;
