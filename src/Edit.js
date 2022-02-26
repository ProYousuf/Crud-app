import { upload } from '@testing-library/user-event/dist/upload';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function Edit(props) {
const navigate=useNavigate()
    const {id}=useParams()
const[name,setName]=useState("")
const[email,setEmail]=useState("")


useEffect(async()=>{
    let editData= await axios.get(`http://localhost:5000/api/showSingle/${id}`)
    console.log(editData,"gggggg")
    setName(editData.data.name)
    setEmail(editData.data.email)
},[])

const editHandelar=async (e)=>{
    e.preventDefault()
    await axios.post(`http://localhost:5000/api/update/${id}`,{name,email})
    .then(res=>{
       console.log(res.data)
    })
    .catch(err=>{
        console.log(err)
    })
   
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