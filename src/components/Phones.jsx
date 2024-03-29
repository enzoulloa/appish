import useGetDeg from '../hooks/useGetDeg'
import blue from '../assets/images/GroupBlue.webp'
import orange from '../assets/images/GroupOrange.webp'
import phone3 from '../assets/images/Device-1.webp'
import phone2 from '../assets/images/Devicewithshadow.webp'
import phone1 from '../assets/images/Group.webp'

const Phones = () => {
  const deg = useGetDeg()

  return (
    <section className=' overflow-hidden '>
      <div className=' pb-[50px] w-[90%] pt-[80px] max-w-[1100px] mx-auto md:w-[85%] md:pt-[100px] '>
        <div className=' flex w-full items-center justify-center relative'>
          <div className='absolute top-[6%] w-[160px] h-[160px] right-0 left-auto bottom-auto md:w-[270px] md:h-[270px] md:top-[5%] lg:top-[2%] lg:right-[7%] lg:w-[400px] lg:h-[400px] transition '>
            <img style={{ transform: `rotate(${deg}deg)` }} className={` object-contain w-full h-full max-w-full align-middle rotate-[${deg}deg]`} src={blue} alt='Blue circle' loading='eager' />
          </div>
          <div className=' absolute w-[110px] h-[110px] left-[5%] top-auto right-auto bottom-[3%] md:w-[200px] md:h-[200px] lg:left-[16%] lg:w-[240px] lg:h-[240px] transition'>
            <img style={{ transform: `rotate(${deg}deg)` }} className=' object-contain w-full h-full max-w-full align-middle' src={orange} alt='Orange circle' loading='eager' />
          </div>
          <div className=' -mr-[60px] -mb-[40px] relative w-full max-w-[300px] -rotate-[20deg]'>
            <img className=' object-contain h-full w-full align-middle' src={phone1} alt='phone1' loading='eager' />
          </div>
          <div className=' relative w-full max-w-[300px] '>
            <img className=' object-contain h-full w-full align-middle' src={phone2} alt='phone2' loading='eager' />
          </div>
          <div className=' -mb-[40px] -ml-[60px] relative w-full max-w-[300px] rotate-[20deg]'>
            <img className=' object-contain h-full w-full align-middle' src={phone3} alt='phone3' loading='eager' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Phones
