import React from 'react'
import{headerLogo} from '../assets/images';
import { hamburger} from'../assets/icons';
const Nav = () => {
  return (
    <header className='py-8  fixed z-10 w-full padding-x'>
        <nav className='flex justify-between items-center max-container'>
          <img src={headerLogo}  />
          <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          <li><a  className='font-monts text-lg text-slate-gray cursor-pointer hover:font-bold'>Home</a></li>
            <li><a href='#about-us' className='font-monts text-lg text-slate-gray cursor-pointer hover:font-bold'>About Us</a></li>
            <li><a href='#products'className='font-monts text-lg text-slate-gray cursor-pointer hover:font-bold'> Products</a></li>
            <li><a className='font-monts text-lg text-slate-gray cursor-pointer hover:font-bold'>Contact Us</a></li>
          </ul>
          <div className='hidden max-lg:block '>
            <img src={hamburger} width={25} height={25} />
          </div>
        </nav>
    </header>
  )
}

export default Nav