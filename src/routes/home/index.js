import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import LandingPage from './landing/LandingPage'
import OurBreed from './landing/Ourbreed/OurBreed'


const index = () => {
  return (
    <Fragment>
      <LandingPage/>
      <OurBreed/>
    </Fragment>
  )
}

export default index
