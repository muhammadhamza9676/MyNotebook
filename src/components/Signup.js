import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  let navigate = useNavigate();
  const [cred, setCred] = useState({ name: "", email: "", password: "", cpassword: "" });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = cred;
    const response = await fetch("https://my-notebook-backend.vercel.app/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password })
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      localStorage.setItem('token', json.jwtToken);
      navigate("/");
      props.showAlert("Sign up Successful", "success");
    }
    else {
      props.showAlert("Invalid Credentials", "danger");
    }
  }
  const onChange = (e) => {
    setCred({ ...cred, [e.target.name]: e.target.value })
  }
  return (
    <div className='container mt-5'>
      <h2 className='d-flex justify-content-center'>Create an account to use My-Notebook</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group my-2">
          <b><label htmlFor="name">Name</label></b>
          <input type="text" className="form-control" id="name" onChange={onChange} name="name" aria-describedby="emailHelp" />
        </div>
        <div className="form-group my-2">
          <b><label htmlFor="email">Email address</label></b>
          <input type="email" className="form-control" id="email" onChange={onChange} name="email" aria-describedby="emailHelp" />
        </div>
        <div className="form-group my-2">
          <b><label htmlFor="password">Password</label></b>
          <input type="password" className="form-control" id="password" onChange={onChange} name="password" required minLength={5} />
        </div>
        <div className="form-group my-2">
          <b><label htmlFor="cpassword">Confirm Password</label></b>
          <input type="password" className="form-control" id="cpassword" onChange={onChange} name="cpassword" required minLength={5} />
        </div>
        <button type="submit" className="btn btn-primary my-2">Sign Up</button>
      </form>
    </div>
  )
}

export default Signup
