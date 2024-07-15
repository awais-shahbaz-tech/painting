"use client"
import React from 'react'
import Image from "next/image";
import Container from "@/components/Container";
import heroImg from "../public/img/benefit.png";


function Who() {
  return (
    <div>
      <Container className={"flex flex-wrap"}>
      <div className="flex order-2 items-center w-full  lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-4xl xl:leading-tight dark:text-white">
            A Team of Full-service Painting Professionals for Home and Office Needs.
            </h1>
            <p className="py-5 text-md leading-normal text-gray-500 lg:text-lg xl:text-xl dark:text-gray-300">
            With over 25 years of experience, we are here to help you with all your painting and maintenance needs.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="https://web3templates.com/templates/nextly-landing-page-template-for-startups"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-sm font-medium text-center text-white bg-[#936af5] rounded-full">
                Know More About Us
              </a>
             
            </div>
          </div>
        </div>
        <div className="flex order-1 items-center justify-center w-full lg:w-1/2">
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

export default Who



