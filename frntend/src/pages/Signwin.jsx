import { useState } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom"

function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate=useNavigate();

    return (
        <div>
            <div>Sign In</div>
            <div>Enter your credentials <br/> to access your account</div>
            <div>
                <div>Email</div>
                <input type="text" placeholder="johncena1@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                <div>Password</div>
                <input type="text" onChange={(e) => setPassword(e.target.value)} /> <br/>
                <button onClick={async () => {
                    const response=await axios.post("http://localhost:3000/api/v1/user/signin", {
                        username: email,
                        password
                    });
                    alert("todo added");
                    localStorage.setItem("tokensignin",response.data.token);
                    navigate('/dashboard');

                }}>jjdedjwed</button>
            </div>
        </div>
    )
}

export default Signin