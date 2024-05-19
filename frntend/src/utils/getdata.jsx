import {useState} from 'react';
import axios from 'axios';
async function Getdata({url},setBalance){

    const [datas,setDatas]=useState([]);
    await axios.get(url, {
        headers: { "Authorization": "Bearer " + (localStorage.getItem('tokensignin') || localStorage.getItem('tokensignup')) }
        })
        .then(response => {
            setDatas(response.data.balance);
        })
        .catch(error => {
            console.error("Error fetching users:", error);
        });
        return setBalance(datas);

  }
  export default Getdata;
