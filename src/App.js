import React from "react";
import { Routes, Route } from "react-router-dom";
import Navigation from './routes/navigations/navigation';
import Home from './routes/home/home';
import SignIn from './routes/signIn/signIn'
function App() {
  const Shop =()=>{
    return(
      <h1>I'm the shop page</h1>
    )
  }

  return (
         
        <Routes>
          <Route path='/' element={<Navigation/>}>
            <Route index element={<Home/>}/>
            <Route path='shop' element={<Shop/>}/>
          </Route>
        </Routes>
       
    
  );
}

export default App;
