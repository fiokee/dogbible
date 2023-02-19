import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import LandingPage from './landing/LandingPage'


const index = () => {
  return (
    <Fragment>
      <LandingPage/>
      <p className="text-3xl font-bold underline" >Hello Home</p>
    </Fragment>
  )
}

export default index
