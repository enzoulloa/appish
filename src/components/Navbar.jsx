import { useState } from 'react'
import NavMenu from './NavMenu'
import logo from '../assets/icons/appishLogo.svg'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <nav className=' pt-[15px] relative'>
        <div className=' w-[90%] max-w-[1100px] mx-auto md:w-[85%]'>
          <div className=' py-[10px] pl-5 flex flex-row w-full max-w-none rounded-[73px] mx-auto bottom-auto justify-between items-center'>
            <a className=' w-[65px] h-[30px] md:w-[80px] ' href='#appish'>
              <img className='  object-contain h-full align-middle' src={logo} alt='Appish' loading='eager' />
            </a>
            <div className=' flex flex-row justify-between items-center w-full max-w-[76%]'>
              <div className='hidden lg:block'>
                <a className='py-5 text-[#231656] text-base leading-7 align-top px-5 text-left mx-auto' href='#features'>Features</a>
                <a className='py-5 text-[#231656] text-base leading-7 align-top px-5 text-left mx-auto' href='#fast'>Why Appish</a>
                <a className='py-5 text-[#231656] text-base leading-7 align-top px-5 text-left mx-auto' href='#testimonials'>Testimonials</a>
                <a className='py-5 text-[#231656] text-base leading-7 align-top px-5 text-left mx-auto' href='#awards'>Awards</a>
              </div>
              <a className=' ml-[5px] py-[6px] px-[15px] rounded-full text-[13px] md:py-[10px] md:ml-[14px] md:px-[26px] md:text-[16px] bg-[#226cff] text-white leading-[28px] cursor-pointer font-semibold ' href='https://www.linkedin.com/in/enzo-ulloa-2639a1194/' target='_blank' rel='noreferrer'>Download Now</a>
              <button id='navButton' aria-label='navButton' onClick={handleClick} className=' px-[10px] py-[5px] text-[#000] text-2xl cursor-pointer md:px-[18px] lg:hidden'>
                <span>
                  <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox='0 0 512 512' height='24px' width='24px' xmlns='http://www.w3.org/2000/svg'><path fill='none' strokeLinecap='round' strokeMiterlimit='10' strokeWidth='48' d='M88 152h336M88 256h336M88 360h336' /></svg>
                </span>
              </button>
            </div>
          </div>
        </div>
        {
          isOpen && <NavMenu />
        }
      </nav>
    </>
  )
}

export default Navbar
