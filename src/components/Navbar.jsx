import logo from '../assets/icons/appishLogo.svg'

const Navbar = () => {
  return (
    <nav className=' pt-[15px]'>
      <div className=' w-[90%] max-w-[1100px] mx-auto '>
        <div className=' py-[10px] pl-5 flex flex-row w-full max-w-none rounded-[73px] mx-auto bottom-auto justify-between items-center'>
          <a className=' w-[65px] h-[30px] ' href='#appish'>
            <img className='  object-contain h-full align-middle' src={logo} alt='Appish' />
          </a>
          <div className=' flex flex-row justify-between items-center'>
            <a className=' ml-[5px] py-[6px] px-[15px] rounded-full text-[13px] bg-[#226cff] text-white leading-[28px] cursor-pointer font-semibold ' href='https://www.linkedin.com/in/enzo-ulloa-2639a1194/' target='_blank' rel='noreferrer'>Download Now</a>
            <div className=' px-[10px] py-[5px] text-[#000] text-2xl cursor-pointer'>
              <span>
                <svg stroke='currentColor' fill='currentColor' stroke-width='0' viewBox='0 0 512 512' height='24px' width='24px' xmlns='http://www.w3.org/2000/svg'><path fill='none' stroke-linecap='round' stroke-miterlimit='10' stroke-width='48' d='M88 152h336M88 256h336M88 360h336' /></svg>
              </span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
