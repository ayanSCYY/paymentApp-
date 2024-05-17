import { useState, useEffect,useRef } from 'react';
import Dashboard2 from '../components/dashboard2';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import {motion , useScroll,useTransform} from "framer-motion"

function Transaction() {
    const [filter, setFilter] = useState('');
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

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

    return (
        <div className="my:grid my:grid-cols-5 ">
   
                <Dashboard2 firstname={firstname} />

            <div className='col-span-4  h-screen overflow-y-auto scroll-smooth'>
            <div className="m-[3%] ">
                <div className="m-[3%] flex justify-center">
                    <input className="w-full h-[1.12%] p-2 border border-black-[0.60] rounded" type="text" placeholder="Search the user...." onChange={e => setFilter(e.target.value)} />
                </div>
                <div className=''>
                    {users.map(user => (<User key={user._id} user={user} navigate={navigate}  />))}
                </div>
            </div>
            </div>
        </div>
    );
}

function User({ user, navigate }) {
    const ref=useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target:ref,
        offset: ["o 1", "1.33 1"],
    });
    const scaledProgress = useTransform(scrollYProgress, [0, 1], [0,1]);
    const opacity = useTransform(scrollYProgress, [0, 1], [0.8,1]);

    return (
        <motion.div ref={ref} style={{opacity,scale:scaledProgress}} className="flex justify-between rounded-3xl transition ease-in-out duration-100 transform delay-50 hover:-translate-y-1 hover:scale-101 hover:bg-[#08235A] hover:text-white hover:rounded-3xl" key={user._id}>
            <div className="flex ml-6">
                <div className="max-my5:hidden w-9 h-9 m-7 text-white rounded-full text-center text-2xl font-normal bg-[#08235A]">{user.firstName[0].toUpperCase()}</div>
                <div className="my5:hidden w-9 h-9 m-7 text-white rounded-full text-center text-2xl font-normal bg-[#08235A] hover:bg-[#4b69a6] /[0.1]" onClick={()=>{navigate("/send?id=" + user._id + "&firstname=" + user.firstName)}}>{user.firstName[0].toUpperCase()}</div>
                <div className="mt-7" >{user.firstName} {user.lastName}</div>
            </div>
            <button className="max-my5:hidden mr-10" onClick={() => navigate("/send?id=" + user._id + "&firstname=" + user.firstName)}>Send money</button>
        </motion.div>
    );
}

User.propTypes = {
    user: PropTypes.shape({
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired,
    }).isRequired,
    navigate: PropTypes.func.isRequired,
};

export default Transaction;
