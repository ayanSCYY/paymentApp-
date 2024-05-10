import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
function SendMoney(){
    const [amount,setAmount]=useState(0);
    const [searchparams]=useSearchParams();
    const firstname=searchparams.get('firstname');
    const id=searchparams.get('id');
    return (
        <div>
            <div>Send Money</div>
            <div>
                <div>{firstname[0].toUpperCase()}</div>
                <div>{firstname}</div>
                <div>Amount in rupees</div>
                <input type="text" placeholder='Enter amount' onChange={e=>{setAmount(e.target.value)}} />
                <br />
                <button onClick={async()=>{
                    await axios.post('http://localhost:3000/api/v1/account/transfer',
                    {to:id,amount},
                    {headers:  {
                        "Authorization": "Bearer " + localStorage.getItem('tokensignin')||localStorage.getItem('tokensignup')
                    }});
                    alert("transfer initiated");
                }}>Initiate transfer</button>
            </div>

        </div>
    )
}

export default SendMoney;