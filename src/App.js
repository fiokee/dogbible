import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigations/navigation';
import Home from './routes/home';
import SignIn from './routes/sign-in/SignIn'
import SignInUp from "./components/signUp-form/signUpForm";
import ProductCard from "./components/product-card/ProductCard";
import Footer from "./routes/footer/Footer";


function App() {
  const Shop =()=>{
    return(
      <Fragment>

        <h1>I'm the shop page</h1>
        <ProductCard/>
      </Fragment>
    )
  }

  return (
         <Fragment>
          <Navigation/>
        <Routes>
          <Route path='/' element={<Navigation/>}/>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
            <Route path='SignIn' element={<SignIn/>}/>
            <Route path='signupform' element={<SignInUp/>}/>
        </Routes>
        <Footer/>
        </Fragment>    
    
  );
}

export default App;
