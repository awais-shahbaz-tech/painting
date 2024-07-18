"use client"
import React from 'react'
import Image from "next/image";
import Container from "@/components/Container";
import heroImg from "../public/img/hero_new.png";
export const phoneNumber = '+603-345-1376';

function Hero() {

  return (
    <div>
      <Container className={"flex flex-wrap"}>
      <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            OMW, the most reliable painting service
            </h1>
            <p className="py-5 text-lg leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            Transform your home with colors of your choice, from classic to modern, we bring your vision to life, one brushstroke at a time.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              
              <a href={`tel:${phoneNumber}`}
               
                rel="noopener"
                className="px-8 py-4 text-md font-medium text-center text-white bg-[#2e0249] rounded-full">
                Request a Callback
              </a>
             
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="550"
              height="430"
              className={"object-cover h-[430px] rounded-lg"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero



