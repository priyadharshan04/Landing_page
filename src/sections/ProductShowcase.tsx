"use client"
import Image from "next/image";
import productImage from '@/assets/product-image.png'
import pyramidImage from '@/assets/pyramid.png'
import tubeImage from '@/assets/tube.png'
import { motion,useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const ProductShowcase = () => {
  const sectionref=useRef(null)
  const {scrollYProgress}=useScroll({
    target:sectionref,
    offset:['start end','end start']
  })
const translateY=useTransform(scrollYProgress,[0,1],[150,-150])
  return (
    <section ref={sectionref} className="bg-gradient-to-b from-[#ffffff] to-[#D2DCFF] PY-24  overflow-clip">
      <div className="container">
        <div className=" section-heading">
        <div className="flex justify-center">     
        <div className="tag" >Boost Your Productivity</div></div>
        <h1 className=" section-title mt-5 from-black to-[#001e80] bg-clip-text text-transparent ">Contact us today to get started!</h1>
        <p className="section-description">Elevate your website&apos;s functionality and provide your customers with the services they need, right at their fingertips. Partner with WebAssist Pro and take the next step towards digital excellence.</p>
        </div>
        <div className="relative">
      <Image  src={productImage} alt="Product Image" className="mt-10"/>
      <motion.img src={pyramidImage.src} alt="pyramid Image" height={262} width={262}
      style={{
        translateY:translateY,
      }}
      className="absolute -right-36 -top-32 hidden md:block lg:block"/>
      <motion.img src={tubeImage.src} alt="Tube Image" height={248} width={262}
       style={{
        translateY:translateY,
      }}
      className="absolute bottom-24 -left-36 hidden md:block"/>
      </div>
      </div>
    </section>
  );
};
