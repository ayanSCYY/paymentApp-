import { useSearchParams} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Dashboard3 from '../components/dashboard3';

function SendMoney() {
    const [amount, setAmount] = useState(0);
    const [searchparams] = useSearchParams();
    const firstname2 = searchparams.get('firstname');
    const firstname=localStorage.getItem("firstName");
    const id = searchparams.get('id');
  
    
    return (
        <div>
            <div className='my4:grid my4:grid-cols-5 h-screen'>
                <Dashboard3 firstname={firstname}/>
                <div className='col-span-4 flex flex-col  ml-[10%] mt-[5%]'>
                    <div className='flex ml-6 mb-3 '>
                        <div className='w-10 h-10 m-7 text-white rounded-full text-center text-2xl font-normal bg-[#08235A]  '>{firstname2[0].toUpperCase()}</div>
                        <div className='mt-7 text-2xl'>{firstname2}</div>
                    </div>
                    <div className='ml-7'>
                        <div className='flex ml-8 mb-2 text-sm font-semibold text-black/[0.5]'>Amount in rupees                          <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mb-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 8.25H9m6 3H9m3 6-3-3h1.5a3 3 0 1 0 0-6M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                          </svg>
                        </div>
                    </div>
                    <div className='ml-7'>
                        <input className='ml-7 border-1  rounded p-2 ' 
                            type="text" 
                            placeholder='Enter amount' 
                            onChange={e => {setAmount(e.target.value)}} 
                        />
                        <button className='ml-3 max-[386px]:ml-[12%] max-[386px]:mt-[5%]  bg-[#08235A] text-white font-light rounded-lg h-10 w-20 hover:bg-[#4b69a6] /[0.1]' onClick={() => {
                         axios.post(
                            'http://localhost:3000/api/v1/account/transfer',
                            { to: id, amount },
                            { headers: { "Authorization": "Bearer " + 
                                localStorage.getItem('tokensignin') || localStorage.getItem('tokensignup')
                           }}
                        );
                        alert("Transfer initiated");
                        }}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default SendMoney;
