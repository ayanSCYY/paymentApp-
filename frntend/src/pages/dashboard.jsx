
import { useState } from 'react';
import axios from 'axios';

import Dashboard from '../components/dashboard';

function Dashboard1() {
    const [balance, setBalance] = useState("");
    const [debt, setDebt] = useState("");

   



    const firstname = localStorage.getItem("firstName");
    return (
        
            <div className=' my4:grid my4:grid-cols-5'>
                <Dashboard firstname={firstname}/>
                <div className='col-span-4  '>
                    <div className= ' max-my:flex-col gap-20 my3:grid my3:grid-cols-6 my3:ml-[8%] my3:gap-10 flex justify-center items-center '>
                      <button className='col-span-2 h-32 my3:mr-24 mt-16 w-64 rounded-2xl bg-gradient-to-r from-figma-hc/[0.95] from-20% to-button4/[0.6] to-92% transform transition-transform hover:scale-150' onMouseEnter={async () => {
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
                      <button className='col-span-2 h-32 my3:ml-8 mt-16 w-64 rounded-2xl bg-gradient-to-r from-figma-hc/[0.95] from-20% to-button4/[0.6] to-92% transform transition-transform hover:scale-150' onMouseEnter={async () => {
                        await axios.get("http://localhost:3000/api/v1/account/debt", {
                        headers: { "Authorization": "Bearer " + (localStorage.getItem('tokensignin') || localStorage.getItem('tokensignup')) }
                        })
                        .then(response => {
                            setDebt(response.data.debt);
                        })
                        .catch(error => {
                            console.error("Error fetching users:", error);
                        });
                      }} onMouseLeave={() => { setDebt("")  }}>
                      <span className='flex flex-col absolute inset-0  justify-center items-center'>
                        <div className='font-bold text-white '>
                        debt
                        </div>
                        <div className='text-white/[0.6] font-light '> 
                          <div className='flex'>
                          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                          {debt}
                        </div>
                        </div>
                       </span>
                      </button>
                    </div>
                </div>
            </div>     
    );
}


export default Dashboard1;
