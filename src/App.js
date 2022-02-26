
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Form from './Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navber from './Navber';

import Edit from './Edit';


function App() {
  
  

 
  return (

    <BrowserRouter>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home></Home >}></Route>
        <Route path="/FORM" element={<Form></Form>}></Route>
        <Route path="/edit/:id" element={<Edit ></Edit>}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
