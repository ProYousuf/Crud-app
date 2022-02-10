import React, { useState } from 'react';
import {container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';

function Form(props) {
const navigate=useNavigate()
const[name,setName]=useState("")
const[email,setEmail]=useState("")

const formHandelar=(e)=>{
e.preventDefault()
props.getData({name,email})
setName("")
setEmail("")
navigate("/")
}
    return (
        <div className="container">
            <form onSubmit={formHandelar}>

            <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>


                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder='enter your email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                    
                </div>
              
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

        </div>
    );
}

export default Form;