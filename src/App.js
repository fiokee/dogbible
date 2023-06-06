import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigations/navigation';
import Home from './routes/home';
import Shop from "./routes/shop/Shop";
import SignIn from './routes/sign-in/SignIn'
import SignInUp from "./components/signUp-form/signUpForm";
import CheckOut from './routes/checkout/CheckOut'
import Footer from "./routes/footer/Footer";


function App() {
  

  return (
         <Fragment>
          <Navigation/>
        <Routes>
          <Route path='/' element={<Navigation/>}/>
            <Route index element={<Home/>}/>
            <Route path='shop/*' element={<Shop/>}/>
            <Route path='SignIn' element={<SignIn/>}/>
            <Route path='signupform' element={<SignInUp/>}/>
            <Route path="checkout" element={<CheckOut/>}/>
        </Routes>
        <Footer/>
        </Fragment>    
    
  );
}

export default App;
