import logo from '@/assets/logosaas.png'
import Image from 'next/image';
import Socialx from '@/assets/social-x.svg'
import SocialIntsa from '@/assets/social-insta.svg'
import SocialLinkedin from '@/assets/social-linkedin.svg'
import SocialPin from '@/assets/social-pin.svg'
import SocialYoutube from '@/assets/social-youtube.svg'
export const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] TEXT-SM PY-10  text-center' >
      <div className='container py-10'>
        <div className="flex justify-center m-auto ">
        <Image src={logo} height={40} alt='Logo'/>
        </div>

        <nav className='flex flex-col gap-6 mt-6  md:flex-row justify-center'>
          <a href="#">about</a>
          <a href="#">Feature</a>
          <a href="#">Customer</a>
          <a href="#">Pricing</a>
          <a href="#">Help</a>
          <a href="#">Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
        <Socialx/>
      <SocialIntsa/>
      <SocialLinkedin/>
      < SocialPin/>
      <SocialYoutube/>
        </div>
        <p className='mt-6'>&copy; 2025 WebAssit,Inc,All rights reserved</p>
      </div>
  

    </footer>
  );
};
