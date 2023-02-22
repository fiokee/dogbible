import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'
import LandingPage from './landing/LandingPage'
import OurBreed from './landing/Ourbreed/OurBreed'
import ProductDog from './landing/Ourbreed/ProductDog'


const index = () => {
  return (
    <Fragment>
      <LandingPage/>
      <OurBreed/>
      <ProductDog/>
    </Fragment>
  )
}

export default index
