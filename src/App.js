import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';
import Navber from './Navber';
import { useState } from 'react';
import Edit from './Edit';

function App() {
  const [data, setData] = useState([])
  const finalData = (values) => {
    setData([...data, values])
  }

  const DeleteHandaler = (id) => {
    let DeleteData = data.filter((eld, idx) => idx != id)
    setData(DeleteData)
    console.log(DeleteData, "hhhhhhh")
  }

  const updateData = (up, ind) => {
    console.log(up, "ii", ind)
    let edited = data.map((elm, indx) => {
      if(ind==indx){
        return up;
      }
      else{
        return elm
      }
    })
    setData(edited)
  }

  return (

    <BrowserRouter>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home datas={data} DeleteFn={DeleteHandaler}></Home >}></Route>
        <Route path="/FORM" element={<Form getData={finalData}></Form>}></Route>
        <Route path="/EDIT/:ind" element={<Edit upData={updateData} datas={data}></Edit>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
