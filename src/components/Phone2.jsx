import useGetDeg from '../hooks/useGetDeg'
import blue from '../assets/images/GroupBlue.webp'
import orange from '../assets/images/GroupOrange.webp'
import image from '../assets/images/Group.webp'

const Phone2 = () => {
  const deg = useGetDeg()

  return (
    <article className=' w-[80%] mb-[70px] relative max-w-[430px] md:w-[50%] lg:w-[45%]'>
      <img style={{ transform: `rotate(${deg}deg)` }} className='w-[200px] h-[200px] absolute -left-[7%] top-auto right-auto -bottom-[3%] overflow-hidden object-cover align-middle md:w-[280px] md:h-[280px] md:-left-[5%] lg:w-[360px] lg:h-[360px]' src={orange} alt='Orange circle' loading='lazy' />
      <img style={{ transform: `rotate(${deg}deg)` }} className='w-[160px] h-[160px] absolute left-auto top-0 right-0 bottom-auto overflow-hidden object-cover align-middle lg:w-[185px] lg:h-[185px] ' src={blue} alt='Blue circle' loading='lazy' />
      <img className=' relative object-contain w-full h-full max-w-full align-middle' src={image} alt='Food and Drink' loading='lazy' />
    </article>
  )
}

export default Phone2
