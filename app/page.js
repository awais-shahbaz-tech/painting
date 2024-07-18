"use client"
import 'regenerator-runtime/runtime'
import ContactUs from "@/components/ContactUs";
import Container from "@/components/Container";
import HelpCenter from "@/components/HelpCenter";
import Hero from "@/components/Hero";
import HowcanHelp from "@/components/HowcanHelp";
import OurWork from "@/components/OurWork";
import { SectionTitle } from "@/components/SectionTitle";
import Testimonials from "@/components/Testimonials";
import Who from "@/components/Who";

import Image from "next/image";

export default function Home() {
  return (
    <main>
   <Container>
      <Hero/>
    
      <div className="">
      <SectionTitle
       
       title="How can we help you?"
     >
    
     </SectionTitle>
     <HowcanHelp/>
    
      </div>
      <SectionTitle
       
       title="Who Are We?"
     >
       Painting is a marketing website for startups
       and indie projects.. And its
       completely open-source. Anyone contact me. Why should you use this me
     </SectionTitle>
      <Who/>
    
      <HelpCenter/>
      <SectionTitle
       
       title="What Our Customers Say About Us"
     >
      
     </SectionTitle>
     <Testimonials/>
      <div className="bg-gray-300">
     <OurWork/>
     </div>
     <ContactUs/>
    
   </Container>
   
    
    </main>
  );
}
