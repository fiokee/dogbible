import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { GiSittingDog } from 'react-icons/gi';

const Navigation = () => {
  return (
    <Fragment>
      <div className="flex justify-center space-x-4 bg-light-500 my-7 text-xl">
        <Link className="logo-container" to='/'>
        <span className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 justify-end absolute left-5 text-3xl"><GiSittingDog/></span>
        </Link>
          <Link className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900' to='/'>
            HOME
          </Link>
          <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='shop'>
            SHOP
          </Link>
          <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='signUpForm'>
            SIGN-IN
          </Link>
          {/* <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='signUpForm'>
            Register
          </Link> */}
        </div>
    </Fragment>
  )
}

export default Navigation
