import { callicon } from '@/public/svg/svgs';
import React from 'react';
import { phoneNumber } from './Hero';
function HelpCenter() {
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-[#2e0249] sm:flex-row md:h-80">
            <div className="order-first h-48 w-full bg-[#2e0249] sm:order-none sm:h-auto sm:w-1/2 lg:w-2/5">
              <img
                src="/img/help.png"
                loading="lazy"
                alt="Photo by Andras Vas"
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="flex w-full flex-col p-4 sm:w-1/2 sm:p-8 lg:w-3/5">
              <h2 className="mb-4 text-xl font-bold text-white md:text-2xl lg:text-4xl">
                Have an Emergency?
              </h2>
              <p className="mb-8 max-w-md text-white">
                Our skilled carpenters tackle your immediate carpentry needs,
                restoring safety and functionality.
              </p>
              <div className="mt-auto">
              
                <a
                  href={`tel:${phoneNumber}`}
                  className="inline-block rounded-lg bg-white px-8 py-3 text-center text-sm font-semibold text-gray-800 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:text-base"
                >
                
                  603 345 1376
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HelpCenter;
