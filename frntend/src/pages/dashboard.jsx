import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

function Dashboard() {
    const [SearchParams] = useSearchParams();
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState('');
    const [balance, setBalance] = useState("");
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

    const firstname = SearchParams.get('firstname');

    return (
        <div>
            <div>Payments App</div>
            <div>hello, {firstname} <div>{firstname[0].toUpperCase()}</div> </div>
            <div>
                <button onClick={async () => {
                    await axios.get("http://localhost:3000/api/v1/account/balance", {
                        headers: { "Authorization": "Bearer " + localStorage.getItem('tokensignin') || localStorage.getItem('tokensignup') }
                    })
                        .then(response => {
                            setBalance(response.data.balance);
                        })
                        .catch(error => {
                            console.error("Error fetching users:", error);
                        });
                }}>
                    Check balance
                </button>
                <div>{balance}</div>
            </div>
            <div>Users</div>
            <input type="text" placeholder='Search the user....' onChange={e => { setFilter(e.target.value) }} />
            <div>
                {users.map(user => (<User key={user._id} user={user} />))}
            </div>
            <button onClick={() => {
                localStorage.removeItem("tokensignin") || localStorage.removeItem("tokensignup");
                localStorage.removeItem("firstName");
                navigate('/');
            }}>Logout</button>
        </div>
    );
}

function User({ user }) {
    const navigate = useNavigate();

    return (
        <div key={user._id}>
            <div>{user.firstName[0].toUpperCase()}</div>
            <div>{user.firstName} {user.lastName}</div>
            <button onClick={() => { navigate("/send?id=" + user._id + "&firstname=" + user.firstName) }}>Send money</button>
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

export default Dashboard;
