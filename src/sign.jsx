import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'
function Sign() {
   const navigate = useNavigate();
 
  const [errors, setErrors] = useState({})
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(false)
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handlebar = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,

    });
    console.log(user)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8001/detail', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.status === 201 || data.message === "User created successfully") {
        alert("Registration successful!");
       navigate("/login");
      } else {
        alert(data.message || "Something went wrong");
       navigate("/login");
       
      }

    } catch (error) {
      console.error('Error sending data:', error);
      alert("Network error. Please try again later.");
    }
  };
  return (
  <>

  <div className="signup">

    <div className="my-input">
      <form onSubmit={handleSubmit} > 
  <h2 id='h2'>create account</h2>
  
  <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder='enter your name'
                  value={user.name}
                  onChange={handlebar}/>

                   <input
                  id="name"
                  name="email"
                  type="text"
                  placeholder='enter your email'
                  value={user.email}
                  onChange={handlebar}/>
                   <input
                  id="name"
                  name="password"
                  placeholder='enter your password'
                  type="text"
                  value={user.password}
                  onChange={handlebar}/>
                   <button type='submit' id='btt'> submit</button>
      </form>
    </div>
  </div>
  </>
  );
}

export default Sign;
