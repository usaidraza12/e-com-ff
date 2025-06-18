import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Paper,
  Typography,
  Container
} from '@mui/material';

function Login() {
   const navigate = useNavigate();
  
  const [fetchdata,setfetchdata]=useState([])
  console.log(fetchdata)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(formData)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8001/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(formData),
      }).then((res)=>res.json())
      .then((data)=>{
        
        localStorage.setItem('token',data.token)
        localStorage.setItem('userId',data.user._id)
        
      navigate("/services")
      })

      
      
     
    } catch (error) {
      console.error('Error sending data:', error);
     
    }
  };

  return (
    <div className="signup">

    <div className="my-input">
      <form onSubmit={handleSubmit} > 
  <h2 id='h2'>login</h2>
        <input
                  id="name"
                  name="email"
                  type="email"
                  placeholder='enter your email'
                  value={formData.email}
                  onChange={handleChange}/>

                   <input
                  id="name"
                  name="password"
                  placeholder='enter your password'
                  type="text"
                  value={formData.password}
                  onChange={handleChange}/>
                 
                   <button type='submit' id='btt'> submit</button>
      </form>
    </div>
  </div>
  );
}

export default Login;

