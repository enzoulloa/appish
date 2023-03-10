import logo from '../assets/icons/appishLogo.svg'

const Navbar = () => {
  return (
    <nav className=' fixed left-0 top-0 right-0 bottom-auto mt-0 z-50 pt-[15px]'>
      <div className=' w-[90%] relative max-w-[1100px] mx-auto py-[10px] pl-5 flex flex-row justify-between items-center'>
        <a className=' w-[65px] h-[30px] pl-0 ' href='#appish'>
          <img src={logo} alt='Appish' />
        </a>
        <div className=' flex flex-row justify-between items-center'>
          <a className=' ml-[5px] py-[6px] px-[15px] rounded-full text-[13px] bg-[#226cff] text-white leading-7 cursor-pointer' href='https://www.linkedin.com/in/enzo-ulloa-2639a1194/' target='_blank' rel='noreferrer'>Contact Me</a>
          <div className=' px-[10px] py-[5px] text-[#000] text-2xl cursor-pointer'>
            <span>
              <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' height='24px' width='24px' xmlns='http://www.w3.org/2000/svg'><path fill='none' stroke-linecap='round' stroke-miterlimit='10' stroke-width='48' d='M88 152h336M88 256h336M88 360h336' /></svg>
            </span>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
