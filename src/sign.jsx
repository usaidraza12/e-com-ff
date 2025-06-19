// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './App.css'
// function Sign() {
//    const navigate = useNavigate();
 
//   const [errors, setErrors] = useState({})
//   const [success, setSuccess] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const handlebar = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,

//     });
//     console.log(user)
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8001/detail', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         mode: 'cors',
//         body: JSON.stringify(user),
//       });

//       const data = await response.json();

//       if (response.status === 201 || data.message === "User created successfully") {
//         alert("Registration successful!");
//        navigate("/login");
//       } else {
//         alert(data.message || "Something went wrong");
//        navigate("/login");
       
//       }

//     } catch (error) {
//       console.error('Error sending data:', error);
//       alert("Network error. Please try again later.");
//     }
//   };
//   return (
//   <>

//   <div className="signup">

//     <div className="my-input">
//       <form onSubmit={handleSubmit} > 
//   <h2 id='h2'>create account</h2>
  
//   <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   placeholder='enter your name'
//                   value={user.name}
//                   onChange={handlebar}/>

//                    <input
//                   id="name"
//                   name="email"
//                   type="text"
//                   placeholder='enter your email'
//                   value={user.email}
//                   onChange={handlebar}/>
//                    <input
//                   id="name"
//                   name="password"
//                   placeholder='enter your password'
//                   type="text"
//                   value={user.password}
//                   onChange={handlebar}/>
//                    <button type='submit' id='btt'> submit</button>
//       </form>
//     </div>
//   </div>
//   </>
//   );
// }

// export default Sign;
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './App.css';
// import { FaSpinner } from 'react-icons/fa';

// function Sign() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       navigate('/services');
//     }
//   }, [navigate]);

//   const handlebar = (e) => {
//     const { name, value } = e.target;
//     setUser((prevUser) => ({
//       ...prevUser,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const response = await fetch('http://localhost:8001/detail', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         mode: 'cors',
//         body: JSON.stringify(user),
//       });

//       const data = await response.json();

//       if (response.status === 201 || data.message === "User created successfully") {
//         alert("Registration successful!");
//         navigate("/login");
//       } else {
//         setError(data.message || "Something went wrong");
//       }
//     } catch (error) {
//       console.error('Error sending data:', error);
//       setError("Network error. Please try again later.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="signup">
//       <div className="my-input">
//         <form onSubmit={handleSubmit}>
//           <h2 id="h2">Create Account</h2>

//           <input
//             name="name"
//             type="text"
//             placeholder="Enter your name"
//             value={user.name}
//             onChange={handlebar}
//             required
//           />

//           <input
//             name="email"
//             type="email"
//             placeholder="Enter your email"
//             value={user.email}
//             onChange={handlebar}
//             required
//           />

//           <input
//             name="password"
//             type="password"
//             placeholder="Enter your password"
//             value={user.password}
//             onChange={handlebar}
//             required
//           />
//           <a href="/login" id='lo'>login</a>

//           {error && (
//             <p style={{ color: 'red', fontSize: '12px', marginTop: '5px' }}>
//               {error}
//             </p>
//           )}

//           <button
//             type="submit"
//             id="btt"
//             disabled={loading}
//             style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
//           >
//             {loading ? (
//               <>
//                 <FaSpinner className="spin" style={{ marginRight: '8px' }} />
//                 Submitting...
//               </>
//             ) : (
//               'Submit'
//             )}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Sign;
"use client"

import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Sign.css"
import { FaSpinner } from "react-icons/fa"

function Sign() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  })

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      navigate("/services")
    }
  }, [navigate])

  const handlebar = (e) => {
    const { name, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch("http://localhost:8001/detail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(user),
      })

      const data = await response.json()

      if (response.status === 201 || data.message === "User created successfully") {
        alert("Registration successful!")
        navigate("/login")
      } else {
        setError(data.message || "Something went wrong")
      }
    } catch (error) {
      console.error("Error sending data:", error)
      setError("Network error. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <div className="signup-header">
          <h1>Create Account</h1>
          <p>Enter your details to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              id="email"
              name="name"
              type="text"
              placeholder="Enter your name"
              value={user.name}
              onChange={handlebar}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={user.email}
              onChange={handlebar}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={user.password}
              onChange={handlebar}
              required
            />
          </div>

          {error && <div className="error-alert">{error}</div>}

          <button type="submit" className="submit-button" disabled={loading}>
            {loading ? (
              <>
                <FaSpinner className="loading-spinner" />
                Creating account...
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>

        <div className="signup-footer">
          <p>
            Already have an account?{" "}
            <a href="/login" className="login-link">
              login
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sign
