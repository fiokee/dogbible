import React from 'react';
import { Fragment, useContext, useState} from 'react';
import { Link } from 'react-router-dom';
import CartIcon from '../../components/cartIcon/CartIcon';
import CartDrop from '../../components/cartDrop/CartDrop';
import { GiSittingDog } from 'react-icons/gi';
import { FaBars } from 'react-icons/fa';
import { UserContext } from '../../components/contexts/userContext';
import { CartContext } from '../../components/contexts/cartContext';
import { UserSignout } from '../../ultis/firebase/firebase.util';

const Navigation = () => {
  const {currentUser, setCurrentUser}= useContext(UserContext)
  const {isCartOpen, setIsCartOpen} = useContext(CartContext);
  const [navbarOpen, setNavbarOpen] = useState(false);
  // console.log(currentUser)
//signing a user out
// const signOuthandle = async()=>{
//  await UserSignout();
//  setCurrentUser(null);
// }

  return (
    <Fragment>
      {/* <div className="flex justify-end space-x-4 bg-light-500 my-7 text-xl mr-7 flex-col sm:flex-row list-none lg:ml-auto">
        <Link className="logo-container" to='/'>
        <span className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 justify-end absolute left-5 text-3xl"><GiSittingDog/></span>
        </Link>
          <Link className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 ' to='/'>
            HOME
          </Link>
          <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='shop'>
            SHOP
          </Link>
          {
            currentUser ? (

              <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" onClick={UserSignout}>SIGN OUT</Link>
              ): (
              
          <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='SignIn'>
            SIGN-IN
          </Link>
            )
          } */}
          {/* <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='signUpForm'>
            Register
          </Link>
          <CartIcon/>
         {isCartOpen && <CartDrop/>} */}
        {/* </div> */}





        <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-transparent-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link className="logo-container" to='/'>
          <span className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 justify-end absolute left-5 text-3xl"><GiSittingDog/></span>
          </Link>
            <button
              className="text-slate-900 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
            <FaBars/>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto space-x-4 bg-light-500 my-7"> 
             
            <Link className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900' to='/'>
            HOME
          </Link>
          <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='shop'>
            SHOP
          </Link>

          {
           currentUser ? (

          <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" onClick={UserSignout}>SIGN OUT</Link>
          ): (
              
          <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='SignIn'>
            SIGN-IN
          </Link>
            )
          }
          <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='signUpForm'>
            Register
          </Link>
          <CartIcon/>
         {isCartOpen && <CartDrop/>}
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  )
}

export default Navigation
