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
        <div>
            <div>Sign Up</div>
            <div>
                <div>First Name</div>
                <input type="text" placeholder="john" onChange={(e) => setFirstname(e.target.value)} />
                <div>Last Name</div>
                <input type="text" placeholder="cena" onChange={(e) => setLastname(e.target.value)} />
                <div>Email</div>
                <input type="text" placeholder="johncena1@gmail.com" onChange={(e) => setEmail(e.target.value)} />
                <div>Password</div>
                <input type="text" onChange={(e) => setPassword(e.target.value)} /><br/>
                <button onClick={async () => {
                    const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                        username: email,
                        firstName: firstname,
                        lastName: lastname,
                        password
                    });
                    localStorage.setItem("tokensignup", response.data.token);
                    navigate("/Dashboard?firstname=" + firstname);
                }}>Sign Up</button>
                <div>
                    <div>Already have an account? <a href="/signIn">Login</a></div>
                </div>
            </div>
        </div>
    );
}

export default Signup;
