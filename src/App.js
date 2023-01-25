import React from "react";
import Prac1 from "./Prac1";
import { Signup } from "./component/Signup/Signin";
  import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./component/Home";
import { Aboutus } from "./component/Aboutus";
import { Login } from './component/Login/Login.js'
import { Weahter } from "./component/Weather/Weahter.js";

function App() {

  return (
    <>   
    <BrowserRouter>
    <Routes>
    {/* <Route path='/' element={<Landing />}></Route> */}
    <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signin' element={<Signup />}></Route>
      <Route path='/about' element={<Aboutus />}></Route>
      <Route path='/weather' element={<Weahter/>}></Route>
    </Routes>
  </BrowserRouter>
    </>
  );
};

export default App;
