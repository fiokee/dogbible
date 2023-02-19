import React from 'react'
import HeroImg from '../../../assets/dog2.png';
import HeroImg2 from '../../../assets/dog1.png';

const LandingPage = () => {
  return (
    <div className='w-100 md: px-4 bg-yellow-500 my-10'>
      <h1 className='text-center text-4xl font-bold text-[white] '>For the Love of All Things Dog bible</h1>
      <p className='text-center text-[white] text-2xl my-4'>Woop Woop! <span>Find your favorite</span></p>
      <div className='flex container mx-auto px-4 justify-evenly'>
        <img className='w-40' src={HeroImg}></img>
        <img className='w-48 j' src={HeroImg2}></img>
      </div>
    </div>
  )
}

export default LandingPage
