import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logosaas.png'
import Image from "next/image"
import MenuIcon from '@/assets/menu.svg'

export const Header = () => {
  return (
    <header className=' sticky top-0 backdrop-blur-sm z-20'>
    <div className="flex justify-center item-center py-3 bg-black text-white text-small">
     <p className='pr-1 text-white/60 md:block '>Just do it</p>
     <div className="inline-flex gap-1 items-center">
      <p>Get started for FREE</p>
      <ArrowRight className="h-4 w-4 inline-flex justify-center items-center"/>
      </div>
    </div>
    <div className='py-2'>
      <div className='container'>
        <div className=' flex item-center justify-between'>
      <Image src={Logo} alt="Saas Logo" height={40} width={40} />
      <MenuIcon className="h-5 w-5 md:hidden"/>
      <nav className='hidden md:flex gap-6 text-black/60 items-center'>
        <a href="#">About</a>
        <a href="#">Features</a>
        <a href="#">Customer</a>
        <a href="#">Update</a>
        <a href="#">Help</a>
        <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex align-items justify-center  tracking-tight'>Get for free</button>
      </nav>
      </div>
     
</div>
    </div>
    </header>
    

  );
};
