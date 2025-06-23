

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false)

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  useEffect(() => {
    // If already logged in, redirect to /services
    const token = localStorage.getItem('token');
    if (!token === null) {
      navigate('/services');
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
const apiUrl = import.meta.env.VITE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
// const res = await fetch(`${import.meta.env.VITE_API_URL}/login`
    try {
      const res = await fetch(`${apiUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify(formData),
      }) .then((res)=>res.json())
      .then((data)=>{
        if(data.message === "invalid info"){
        setError(data.message);

        }else if(data.status === 200 && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.user._id);
        navigate('/services')
      }
        
      })

    } catch (error) {
      console.error('Login error:', error);
      setError('Something went wrong. Please try again later.');
    }
  };

  return (
    <>
      <div className="signup-container">
          <div className="signup-card">
            <div className="signup-header">
              <h1>login Account</h1>
              <p>Enter your details to get started</p>
            </div>
    
            <form onSubmit={handleSubmit} className="signup-form">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                id='email'
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
              </div>
    
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                id='password'
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
              </div>
    
              {error && <div className="error-alert">{error}</div>}
    
              <button type="submit" className="submit-button" disabled={loading}>
              submit
              </button>
            </form>
    
            <div className="signup-footer">
              <p>
                don't have an account?{" "}
                <a href="/sign" className="login-link">
                  sign
                </a>
              </p>
            </div>
          </div>
        </div>
          {/* <div className="signup">
      <div className="my-input">
        <form onSubmit={handleSubmit}>
          <h2 id="h2">Login</h2>

          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {error && (
            <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
              {error}
            </p>
          )}

          <button type="submit" id="btt">
            Submit
          </button>
        </form>
      </div>
    </div> */}
    </>
  
  );
}

export default Login;


