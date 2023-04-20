import React, { useState } from "react"
import "./adminLogin.css"
import { TextField } from "@mui/material";
import { Email, Lock,VisibilityIcon } from '@material-ui/icons';
import axios from 'axios';

const AdminLogin=()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    // const handleSubmit = async (e) => {
    //   e.preventDefault();
    //   const user = { email, password };
    //   const response = await axios.post('/api/users', user);
    //   console.log(response.data);
    // };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const res = await axios.post('http://localhost:2233/post-user', { email, password });
          localStorage.setItem('token', res.data.token);
              console.log(res)
        } catch (err) {
          console.error(err.response.data);
        }
      };
    return(
        <>
        <div className="adminlogin-parent">
            <div>
                <img  style={{width:"749px",height:"539px"}}src="./Images/AdminLogin.png"/>
            </div>

            <div className="adminlogin-Right">
                <img  style={{width:"207px",height:"41px"}}src="./Images/logo (1).jpg"/>
                <div className="adminlogin-title">ADMIN LOGIN</div>

    <form onSubmit={handleSubmit}>
        <div>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      </div>
      <div>
      <label>
        Password:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      </div>
      <button type="submit">Sign In</button>
    </form>




                </div>
            </div>
    
        </>
    )
}

export default AdminLogin