import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';


function Home() {
  const [data, setData] = useState([])

  useEffect(async()=>{
    await axios.get("http://localhost:5000/api/show")
    .then((res)=>{
      setData(res.data)
    })
    .catch(err=>{console.log(err)})
    },[])

 const deleteFn=async(id)=>{
  try{
      let deleteData=await axios.delete(`http://localhost:5000/api/delete/${id}`)
      console.log(deleteData)
      
      setData(data.filter(ID=>ID._id!=id))
  }
  catch(err){
    console.log(err)
  }
 }
    return (
        <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">SL no.</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            {data.map((itm,ind)=>{
                    return(
                        <tr key={ind}>
                        <th scope="row">{ind+1}</th>
                       <td>{itm.name}</td>
                        <td>{itm.email}</td>
                        <td><button>{" "}<Link to={`/edit/${itm._id}`}>Edit</Link> </button>/<button onClick={()=>deleteFn(itm._id)}>Delete</button></td>
                      </tr>
                    )
            })}
        
          
        </tbody>
      </table>
      
    );
}

export default Home;