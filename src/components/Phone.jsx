import blue from '../assets/images/groupBlue.png'
import orange from '../assets/images/groupOrange.png'
import image from '../assets/images/Device-1.png'

const Phone = () => {
  return (
    <article className=' w-[90%] mb-10 relative max-w-[475px] '>
      <img className='w-[180px] h-[180px] absolute -left-[9%] top-0 right-auto bottom-auto overflow-hidden object-cover align-middle' src={blue} alt='Blue circle' />
      <img className='w-[120px] h-[120px] absolute left-auto top-auto right-0 bottom-0 overflow-hidden object-cover align-middle' src={orange} alt='Orange circle' />
      <img className=' relative overflow-visible object-contain w-full h-full max-w-full align-middle' src={image} alt='Food and Drink' />
    </article>
  )
}

export default Phone
