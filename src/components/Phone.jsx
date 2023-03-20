import useGetDeg from '../hooks/useGetDeg'
import blue from '../assets/images/GroupBlue.webp'
import orange from '../assets/images/GroupOrange.webp'
import image from '../assets/images/Device-1.webp'

const Phone = () => {
  const deg = useGetDeg()

  return (
    <article className=' w-[90%] mb-10 relative max-w-[475px] md:w-[50%] md:mb-10 lg:w-[45%]'>
      <img style={{ transform: `rotate(${deg}deg)` }} className='w-[180px] h-[180px] absolute -left-[9%] top-0 right-auto bottom-auto overflow-hidden object-cover align-middle md:w-[270px] md:h-[270px] lg:w-[370px] lg:h-[370px]' src={blue} alt='Blue circle' loading='lazy' />
      <img style={{ transform: `rotate(${deg}deg)` }} className='w-[120px] h-[120px] absolute left-auto top-auto right-0 bottom-0 overflow-hidden object-cover align-middle md:w-[180px] md:h-[180px] lg:w-[215px] lg:h-[215px]' src={orange} alt='Orange circle' loading='lazy' />
      <img className=' relative overflow-visible object-contain w-full h-full max-w-full align-middle' src={image} alt='Food and Drink' loading='lazy' />
    </article>
  )
}

export default Phone
