"use client"
import CheckIcon from '@/assets/check.svg'
import {twMerge} from "tailwind-merge"
import { motion } from 'framer-motion';
const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

export const Pricing = () => {
  return(
    <section className="py-24 bg-white">
      <div className="container">
        <div className='section-heading'>
        <h2 className="section-title ">Pricing</h2>
        <p className="section-description"> we offer flexible pricing tailored to your specific needs, ensuring you receive the best value for our seamless online service integration solutions.</p>
        </div>
     <div className='flex flex-col gap-6 items-center md:flex-row md:items-end md:justify-center'>
    {pricingTiers.map(({ title,
    monthlyPrice,
    buttonText,
    popular,
    inverse,
    features})=>(
      <div key={title} className={twMerge('p-10 rounded-3xl  border-[#f1f1f1]  shadow-[0_7px_14px_#EAEAEA]',inverse==true && 'bg-black text-white')}>
        <div className='flex justify-between'>
          <h3 className={twMerge('Text-lg max-w-xs w-full font-bold text-black/50',inverse==true&& 'text-white/60')}>{title}</h3>
        
        {popular&& 
        <div className='inline-flex text-sm px-4 py-1.5 rounded-xl  border-white shadow-[0_7px_100px_#EAEAEA] '> 
        <motion.span 
        animate={{
          backgroundPositionX:"-100%",
        }}
        transition={{
          repeat:Infinity,
          ease:'linear',
          repeatType:"loop",
          duration:1,
        }}
        className='bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF)] [background-size:200%] text-transparent  font-medium bg-clip-text'> Popular</motion.span>
        </div>}
       
        </div>
        <div className='flex items-baseline gap-1 mt-[30px]'>
          <span className='text-4xl font-bold tracking-tighter leading-none '>${monthlyPrice}</span>
          <span className='tracking-tight font-bold text-black/50'>/month</span>

        </div>
        <button className={twMerge('btn btn-primary w-full mt-[30px]',inverse==true&& 'bg-white text-black')}>{buttonText}</button>
        <ul className='flex flex-col gap-5 mt-8'>
          {features.map((features)=>(
            <li key={features} className='text-sm flex item-center gap-4'><CheckIcon className="h-6 w-6"/>
              <span>{features}</span></li>

          ))}
        </ul>

      </div>
    ))}
     </div>
      </div>
    </section>
  );
};
