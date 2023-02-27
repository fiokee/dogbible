import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigations/navigation';
import Home from './routes/home';
import SignIn from './components/signUp-form/SignIn';
import SignInUp from "./components/signUp-form/signUpForm";
import ProductCard from "./components/product-card/ProductCard";


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
            <Route path='signin' element={<SignIn/>}/>
            <Route path='signupform' element={<SignInUp/>}/>
        </Routes>
        </Fragment>    
    
  );
}

export default App;
