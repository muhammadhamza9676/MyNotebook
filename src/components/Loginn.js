import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Loginn = (props) => {
    let navigate = useNavigate();
    const [cred, setCred] = useState({email:"", password:""});
    const handleSubmit = async (e) =>{
        e.preventDefault();
        const response = await fetch("https://my-notebook-backend.vercel.app/api/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email: cred.email, password: cred.password})
        });
        const json = await response.json();
        console.log(json);
        if(json.success)
        {
            localStorage.setItem('token',json.jwtToken);
            props.showAlert("Logged In Successful", "success");
            navigate("/");

        }
        else{
            props.showAlert("Invalid Credentials", "danger");

        }
    }
    const onChange =(e)=>{
        setCred({...cred,[e.target.name]:e.target.value})
    }
    return (
        <div className='mt-5 mb-5'>
            <h2 className='my-3 d-flex justify-content-center'>Login to continue to MyNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group my-2">
                    <b><label htmlFor="email">Email address</label></b>
                    <input type="email" className="form-control" id="email" value={cred.email} onChange={onChange} name="email"aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group my-2">
                    <b><label htmlFor="password">Password</label></b>
                    <input type="password" className="form-control" id="password" value={cred.password} onChange={onChange} name="password" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary my-2">Login</button>
            </form>
        </div>
    )
}

export default Loginn
