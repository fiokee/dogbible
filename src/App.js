import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigations/Navigation';
import Home from './routes/home';
import SignIn from './components/signUp-form/SignIn';
import SignInUp from "./components/signUp-form/signUpForm";


function App() {
  const Shop =()=>{
    return(
      <h1>I'm the shop page</h1>
    )
  }

  return (
         <Fragment>
          <Navigation/>
        <Routes>
          <Route path='/' element={<Navigation/>}/>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='signin' element={<SignIn/>}/>
            <Route path='signupform' element={<SignInUp/>}/>
        </Routes>
        </Fragment>
       
    
  );
}

export default App;
