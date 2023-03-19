import React, { Fragment } from 'react'
import Footer from '../../../footer/Footer'

const ProductDog = () => {
  return (
    <Fragment>
    <div className='bg-[#050522] mt-10'>
      <h1 className='text-white font-bold text-center text-2xl pt-5'>Product For Dogs</h1>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-0 w-full m-6 p-6'>
      <div className="relative overflow-hidden shadow-lg cursor-pointer">
        <img className="object-cover w-full h-full brightness-50" src="https://rb.gy/rvnxff" alt="Flower and sky"/>
        <div className="absolute top-0 left-0 px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Dog Toys</h4>
        </div>
        </div>

        <div className="relative overflow-hidden shadow-lg cursor-pointer">
        <img className="object-cover w-full h-full brightness-50" src="https://rb.gy/zbmbsi" alt="Flower and sky"/>
        <div className="absolute top-0 left-0 px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Dog Hats</h4>
        </div>

        </div>
        <div className="relative overflow-hidden shadow-lg cursor-pointer">
        <img className="object-cover w-full h-full brightness-50" src="https://rb.gy/dw6w8q" alt="Flower and sky"/>
        <div className="absolute top-0 left-0 px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Travel Bowls</h4>
        </div>
        </div>

        <div className="relative overflow-hidden shadow-lg cursor-pointer">
        <img className="object-cover w-full h-full brightness-50" src="https://rb.gy/ag7ag9" alt="Flowersky"/>
        <div className="absolute top-0 left-0 px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Bandanas</h4>
        </div>
        </div>
    </div>
    {/* <Footer/> */}
      </div>
      </Fragment>
  )
}

export default ProductDog
