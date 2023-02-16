import React from 'react'
import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom'

const navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to='/'>
        <h1 className="logo">Logo</h1>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to='shop'>
            SHOP
          </Link>
          <Link lassName="nav-link" to='signIn'>
            SIGN-IN
          </Link>
          <Link lassName="nav-link" to='signIn'>
            REGISTER 
          </Link>
        </div>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export default navigation
