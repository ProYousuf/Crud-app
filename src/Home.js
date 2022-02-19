import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Home({datas,DeleteFn}) {

 
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
            {datas.map((itm,ind)=>{
                    return(
                        <tr key={ind}>
                        <th scope="row">{ind+1}</th>
                       <td>{itm.name}</td>
                        <td>{itm.email}</td>
                        <td><button><Link to={`/EDIT/${ind}`}>Edit</Link> </button>/<button onClick={()=>DeleteFn(ind)}>Delete</button></td>
                      </tr>
                    )
            })}
        
          
        </tbody>
      </table>
      
    );
}

export default Home;