import React from 'react'
import { ourwork } from '@/Utiles/Images'

const getClassNames = (index) => {
    if (index % 4 === 0 || index % 4 === 3) {
      return "group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80";
    } else {
      return "group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80";
    }
  };

function OurWork() {
  return (
    <div>
      <div class="bg-white py-6 sm:py-8 lg:py-12">
  <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
    <div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
      <div class="flex items-center gap-12">
        <h2 class="text-2xl font-bold text-gray-800 lg:text-3xl">Our Work</h2>

        <p class="hidden max-w-screen-sm text-gray-500 md:block">NW Painting & Handyman Service provides top-quality painting and handyman solutions tailored to meet your specific needs.</p>
      </div>

      <a href="#" class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More</a>
    </div>

    <div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
    {ourwork?.map((item, index) => (
  <a key={index} href="#" className={getClassNames(index)}>
    <img
      src={item}
      loading="lazy"
      alt="Photo by Minh Pham"
      className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
    />
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
    <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span>
  </a>
))}

     
    
     
    </div>
  </div>
</div>
    </div>
  )
}

export default OurWork
