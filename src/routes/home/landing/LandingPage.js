import React, {useState} from 'react'
import HeroImg from '../../../assets/dog2.png';
import HeroImg2 from '../../../assets/dog1.png';

const LandingPage = () => {
  
  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("you click")
  }


  return (
    <div className='w-100 md: px-4 bg-yellow-500 my-10'>
      <h1 className='text-center text-4xl font-bold text-[white] '>For the Love of All Things Dog bible</h1>
      <p className='text-center text-[white] text-2xl my-4'>Woop Woop! <span>Find your favorite</span></p>
      <div className='flex container mx-auto px-4 justify-evenly'>
      <img className='w-40' src={HeroImg}></img>

      <div className='mt-12'>
        <form className="m-4 flex shadow-2xl">
        <input className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="search for dog"/>
        <button onClick={handleSubmit} className="px-8 rounded-r-lg bg-[orangered] text-white font-bold p-4 uppercase border-yellow-500 border-t border-b border-r">Search</button>
        </form>
      </div>
        <img className='w-48 j' src={HeroImg2}></img>
      </div>
    </div>
  )
}

export default LandingPage
