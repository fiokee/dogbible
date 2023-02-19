import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <Fragment>
      <div className="flex justify-center space-x-4 bg-light-500 my-7 text-xl">
        <Link className="logo-container" to='/'>
        <h1 className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 justify-end absolute left-5">Logo</h1>
        </Link>
          <Link className='font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900' to='/'>
            Home
          </Link>
          <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='shop'>
            SHOP
          </Link>
          <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='signIn'>
            Sign-In
          </Link>
          <Link className="font-bold px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900" to='signUpForm'>
            Register
          </Link>
        </div>
    </Fragment>
  )
}

export default Navigation
