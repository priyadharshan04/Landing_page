"use client"
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";

const testimonials = [
  {
    text: "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our team's productivity has skyrocketed since we started using this tool. ",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "This app has completely transformed how I manage my projects and deadlines.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "I was amazed at how quickly we were able to integrate this app into our workflow.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The customizability and integration capabilities of this app are top-notch.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];
const firstcolumn =testimonials.slice(0,3)
const secondcolumn=testimonials.slice(3,6)
const thirdcolumn=testimonials.slice(6,9)

const TestimonialsColumn=(props:{className?:string;duration?:number; testimonials:typeof testimonials})=>{
  return(
    <div className={props.className}>
  <motion.div 
  animate={{
    translateY:"-50%"
  }}
  transition={
    {
      duration:props.duration||10,
      repeat:Infinity,
      ease:"linear",
      repeatType:"loop",
    }
  }
  className="flex flex-col gap-6  ">
   {[...new Array(2)].fill(0).map((_,index) =>(
    <React.Fragment key={index}>
       {props.testimonials.map(({text , imageSrc ,name ,username })=>(
    <div className="card" key={name}>
      <div>{text}</div>
      <div className="flex items-center gap-2 mt-3">
        <Image src={imageSrc} height={40} width={40} alt={name} className="h-10 w-10 rounded-full"/>
       <div className="flex flex-col">
        <div className="font-medium tracking-tight leading-5">{name}</div>
        <div className="tracking-tight leading-5">{username}</div>
       </div>
      </div>

    </div>

  ))}
    </React.Fragment>
   ))}
  
 </motion.div>
 </div>)

}

export const Testimonials = () => {
  return <section className="bg-white ">
    <div className="container">
      <div className="flex justify-center">
       
      <div className="tag">Testimonials</div></div>
      <div className="section-heading">
      <h2 className="section-title">What our user say</h2>
      <p className="section-description">This section serves as a testament to the value and impact of your product or service, providing potential customers with authentic insights from those who have experienced it firsthand.</p>
      </div>
     <div className="flex justify-center gap-6  mt-10 max-h-[738px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)]">
      <TestimonialsColumn testimonials={firstcolumn} duration={15}/>
      <TestimonialsColumn testimonials={secondcolumn}  duration={19} className="hidden md:block"/>
      <TestimonialsColumn testimonials={thirdcolumn} className="hidden lg:block"/>
    
     </div>
      </div>
    
  </section>;
};