import { Link } from 'react-router-dom';
import React from 'react';
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
      return;
    }
  }, [])

  const handlebar = (e) => {
    const { name, value } = e.target
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }))
  }
const apiUrl = import.meta.env.VITE_URL;

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const response = await fetch(`${apiUrl}/detail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        mode: "cors",
        body: JSON.stringify(user),
      })

      const data = await response.json()

      if (data.message === "This email is already registered" ) {
        alert("This email is already registered")
        setError(data.message)
        navigate("/login")
      } else {
        navigate("/sign")
      }
    } catch (error) {
      console.error("Error sending data:", error)
      setError("Network error. Please try again later.")
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
              type="name"
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
            <Link to="/login" className="login-link">
              login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Sign
