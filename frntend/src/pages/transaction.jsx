import {useState,useEffect} from 'react'
import Dashboard2 from '../components/dashboard2';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
function Transaction(){
    const[filter,setFilter]=useState('');
    const [users,setUsers]=useState([]);
    useEffect(() => {
        const token = localStorage.getItem("tokensignup") || localStorage.getItem("tokensignin");
        if (token) {
            axios.get("http://localhost:3000/api/v1/user/bulk?filter=" + filter, {
                headers: {
                    "Authorization": "Bearer " + token
                }
            })
                .then(response => {
                    setUsers(response.data.user);
                })
                .catch(error => {
                    console.error("Error fetching users:", error);
                });
        } else {
            console.error("Authorization token is missing.");
        }
    }, [filter]);
    const firstname = localStorage.getItem("firstName");
    return(
        <div className='flex'>
            <Dashboard2 firstname={firstname}/>
            <div className=' basis-4/5 m-7 overflow-y-auto '>
                <div className='m-7'>
                     <input className='w-full h-10 p-2 border-1 boder-black/[0.60] rounded ' type="text" placeholder='Search the user....' onChange={e => { setFilter(e.target.value) }} />
                </div>
                <div className=''>
                      {users.map(user => (<User key={user._id} user={user} />))}
                </div>
            </div>
        </div>
    )
}

function User({ user }) {
    const navigate = useNavigate();

    return (
        <div className='flex justify-between rounded-3xl transition ease-in-out duration-300 transform delay-50 hover:-translate-y-1 hover:scale-101 hover:bg-figma-hc/[0.74] hover:text-white hover:rounded-3xl' key={user._id}>
           <div className='flex ml-6 '>
            <div className='w-9 h-9 m-7 text-white rounded-full text-center text-2xl font-normal bg-figma-hc/[0.74]  ' >{user.firstName[0].toUpperCase()}</div>
            <div className='mt-7 '>{user.firstName} {user.lastName}</div>
           </div>
            <button className='mr-10' onClick={() => { navigate("/send?id=" + user._id + "&firstname=" + user.firstName) }}>Send money</button>
        </div>
    );
}

User.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
};


export default Transaction;