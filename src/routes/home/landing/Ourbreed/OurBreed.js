import React from 'react'
import { GrNotes } from 'react-icons/gr';
import { GiDogBowl } from 'react-icons/gi';
import Dogbanner from '../../../../assets/dog-banner.png';
import Dogfood from '../../../../assets/dog-food.png';

const OurBreed = () => {
  return (
<div>
      <p className="text-3xl font-bold text-center" >Our Popular Breeds</p>
    <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full m-6 p-6">
        <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img className="object-cover w-full h-48 brightness-50" src="https://rb.gy/fah1lz" alt="Flower and sky"/>

        <div className="absolute top-0 left-0 px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Saddle Coat</h4>
        <p className="leading-normal text-gray-100">Males<span className=''>.</span>Females</p>
        <p className='bg-[lightgreen] text-white text-center rounded-xl mt-10'>Available</p>
        <p className='font-semibold tracking-tight text-white'>10 Weeks old</p>
        </div>
        <h3>Marie Hademan Pahrum, Nv89049</h3>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img className="object-cover w-full h-48 brightness-50" src="https://rb.gy/9veh2b" alt="Flower and sky"/>

        <div className="absolute top-0 left-0 px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">American Eskimo</h4>
        <p className="leading-normal text-gray-100">Males<span className=''>.</span>Females</p>
        <p className='bg-[lightgreen] text-white text-center rounded-xl mt-10'>Available</p>
        <p className='font-semibold tracking-tight text-white'>10 Weeks old</p>
        </div>
        <h3>Marie Hademan Pahrum, Nv89049</h3>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img className="object-cover w-full h-48 brightness-50" src="https://rb.gy/50wwwx" alt="Flower and sky"/>

        <div className="absolute top-0 left-0 px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Black German Shepherd</h4>
        <p className="leading-normal text-gray-100">Males<span className=''>.</span>Females</p>
        <p className='bg-[lightgreen] text-white text-center rounded-xl mt-10'>Available</p>
        <p className='font-semibold tracking-tight text-white'>10 Weeks old</p>
        </div>
        <h3>Marie Hademan Pahrum, Nv89049</h3>
        </div>

        <div className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img className="object-cover w-full h-48 brightness-50" src="https://rb.gy/ayqyy6" alt="Flower and sky"/>

        <div className="absolute top-0 left-0 px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-white">Alaskan Malamute</h4>
        <p className="leading-normal text-gray-100">Males<span className=''>.</span>Females</p>
        <p className='bg-[lightgreen] text-white text-center rounded-xl mt-10'>Available</p>
        <p className='font-semibold tracking-tight text-white'>10 Weeks old</p>
        </div>
        <h3>Marie Hademan Pahrum, Nv89049</h3>
        </div>
    </div>
    <div className='container m-auto flex'>
      <div className='bg-[#ff7f50ea] w-96 rounded-2xl'>
      <span className='text-3xl font-extrabold'><GrNotes className='m-auto mt-10'/></span>
      <p className='text-center font-extrabold'>Current news and guids to dog.</p>
      <p className='text-center p-2 m-7 bg-[orangered] text-white font-semibold rounded-2xl w-auto'>Find out more</p>
      <img src={Dogbanner} className='w-48 mr-30 relative left-40'></img>
      </div>
      {/* <div className=''>
      <span className='text-3xl'><GiDogBowl/></span>
      <p className=''>Current news and guids to dog.</p>
      <img src={Dogfood} className='w-48'></img>
      <p className=''>Find out more</p>
      </div> */}
    </div>
</div>
  )
}

export default OurBreed
