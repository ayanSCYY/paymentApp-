
import { useState } from 'react';
import axios from 'axios';

import Dashboard from '../components/dashboard';

function Dashboard1() {
    const [balance, setBalance] = useState("");
    

   



    const firstname = localStorage.getItem("firstName");
    return (
        <div>
           
            <div className='flex flex-row h-screen'>
                 <Dashboard firstname={firstname}/>
                <div className='basis-4/5 m-7 '>
                    <div className='flex justify-start'>
                      <button className='m-4 h-16 m-7 w-40 rounded-2xl bg-gradient-to-r from-figma-hc/[0.74] from-20% to-button4/[0.6] to-92% transform transition-transform hover:scale-150' onMouseEnter={async () => {
                        await axios.get("http://localhost:3000/api/v1/account/balance", {
                        headers: { "Authorization": "Bearer " + (localStorage.getItem('tokensignin') || localStorage.getItem('tokensignup')) }
                        })
                        .then(response => {
                            setBalance(response.data.balance);
                        })
                        .catch(error => {
                            console.error("Error fetching users:", error);
                        });
                      }} onMouseLeave={() => { setBalance("") }}>
                      <span className='flex flex-col absolute inset-0  justify-center items-center'>
                        <div className='font-bold text-white '>
                        balance
                        </div>
                        <div className='text-white/[0.6] font-light '> 
                          <div className='flex'>
                          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          {balance}
                        </div>
                        </div>
                       </span>
                      </button>
                    </div>
                </div>
            </div>     
        </div>
    );
}


export default Dashboard1;
