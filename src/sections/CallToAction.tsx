"use client"
import ArrowIcon from '@/assets/arrow-right.svg'
import starImage from '@/assets/star.png'
import springImage from '@/assets/spring.png'
import Image from 'next/image';
import { easeInOut, motion, useScroll, useTransform } from 'framer-motion';
import { off } from 'process';
import { useRef } from 'react';

 export const CallToAction = () => {
  const sectionRef=useRef(null);
const{scrollYProgress}=
  useScroll({
    target:sectionRef,
    offset:['start end','end start']
  })

  const translateY=useTransform(scrollYProgress,[0,1],[150,-150])


  return (
  <section ref={sectionRef} className='overflow-clip bg-gradient-to-b from-white to-[#D2DCFF] py-24'>
<div className='container'>
    <div className="section-heading relative">
    <div className="section-title  ">Sign up for free today</div>
    <p className="section-description">Unlock a world of seamless online service integration with WebAssist Pro. Our platform transforms standard websites into dynamic, customer-centric hubs, enhancing user experience and operational efficiency. Sign up for free today to elevate your digital presence and meet your customer&apos;s needs effortlessly.</p>
   <motion.img src={starImage.src} alt='starImage' width={360}
   style={{
    translateY:translateY,
   }}
   transition={{
    ease:easeInOut
   }}
   className='absolute -left-[350px] -top-[-137px] hidden md:block'/>
    <motion.img
     style={{
      translateY:translateY,
     }}
     transition={{
      ease:easeInOut
     }}
    src={springImage.src} alt='springImage' width={360} 
    className='absolute -right-[331px]  -top-[19px] hidden md:block'
/>    </div>
    <div className="flex gap-8 mt-10 justify-center">
          <button className="btn btn-primary">Start now</button>
          <button className="btn btn-text"><span>Learn more</span> <ArrowIcon className="h-5 w-5"/></button>
          </div>
          </div>
          
  </section>);
};
