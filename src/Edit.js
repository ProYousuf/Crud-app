import { upload } from '@testing-library/user-event/dist/upload';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Edit(props) {
const navigate=useNavigate()
    const {ind}=useParams()
const[name,setName]=useState("")
const[email,setEmail]=useState("")

useEffect(()=>{
    let editData=props.datas[ind]
    setName(editData.name)
    setEmail(editData.email)
},[])

const editHandelar=(e)=>{
    e.preventDefault()
    props.upData({name,email},ind)
    navigate("/")
    }
    return (
        
            <div className="container">
            <form onSubmit={editHandelar}>

            <div className="mb-3">
                    <label  className="form-label">Name</label>
                    <input type="text" className="form-control" placeholder='enter your name' value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>


                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" placeholder='enter your email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
                    
                </div>
              
                
                <button type="submit" className="btn btn-primary">Update</button>
            </form>

        </div>
        
    );
}

export default Edit;