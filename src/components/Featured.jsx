import ipsun1 from '../assets/logos/ipsun1.png'
import ipsun2 from '../assets/logos/ipsun2.png'
import ipsun3 from '../assets/logos/ipsun3.png'
import ipsun4 from '../assets/logos/ipsun4.png'

const Featured = () => {
  return (
    <section className=' pt-[80px] max-w-[900px] pb-[150px] flex flex-col justify-center gap-4 w-[90%] mx-auto items-center md:pt-10 md:w-[85%] lg:pt-[50px]'>
      <p className=' text-sm leading-6 text-[#6f6a80]'>Trusted by top-rated-apps</p>
      <div className=' w-[90%] grid grid-cols-2 gap-x-10 gap-y-[30px] max-w-[370px] mt-[10px] md:gap-x-[60px] md:w-full md:grid-cols-4 md:max-w-none md:gap-y-4 items-center lg:w-full lg:mt-[33px] lg:gap-x-[80]'>
        <img className='w-full' src={ipsun1} alt='Logo' />
        <img className='w-full' src={ipsun2} alt='Logo' />
        <img className='w-full' src={ipsun3} alt='Logo' />
        <img className='w-full' src={ipsun4} alt='Logo' />
      </div>
    </section>
  )
}
export default Featured
