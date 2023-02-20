import React from 'react'

const OurBreed = () => {
  return (
<div>
      <p className="text-3xl font-bold text-center" >Our Popular Breeds</p>
    <div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full m-6 p-6">
        <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img class="object-cover w-full h-48" src="https://rb.gy/fah1lz" alt="Flower and sky"/>

        <div class="absolute top-0 left-0 px-6 py-4">
        <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">Saddle Coat</h4>
        <p class="leading-normal text-gray-100">Males<span className=''>.</span>Females</p>
        </div>
        </div>

        <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img class="object-cover w-full h-48" src="https://rb.gy/9veh2b" alt="Flower and sky"/>

        <div class="absolute top-0 left-0 px-6 py-4">
        <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">American Eskimo</h4>
        <p class="leading-normal text-gray-100">Males<span className=''>.</span>Females</p>
        </div>
        </div>

        <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img class="object-cover w-full h-48" src="https://rb.gy/50wwwx" alt="Flower and sky"/>

        <div class="absolute top-0 left-0 px-6 py-4">
        <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">Black German Shepherd</h4>
        <p class="leading-normal text-gray-100">Males<span className=''>.</span>Females</p>
        </div>
        </div>

        <div class="relative overflow-hidden rounded-lg shadow-lg cursor-pointer">
        <img class="object-cover w-full h-48" src="https://rb.gy/ayqyy6" alt="Flower and sky"/>

        <div class="absolute top-0 left-0 px-6 py-4">
        <h4 class="mb-3 text-xl font-semibold tracking-tight text-white">Alaskan Malamute</h4>
        <p class="leading-normal text-gray-100">Males<span className=''>.</span>Females</p>
        </div>
        </div>
    </div>
</div>
  )
}

export default OurBreed
