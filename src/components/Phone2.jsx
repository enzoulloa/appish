import blue from '../assets/images/groupBlue.png'
import orange from '../assets/images/groupOrange.png'
import image from '../assets/images/Group.png'

const Phone2 = () => {
  return (
    <article className=' w-[80%] mb-[70px] relative max-w-[430px] '>
      <img className='w-[200px] h-[200px] absolute -left-[7%] top-auto right-auto -bottom-[3%] overflow-hidden object-cover align-middle' src={orange} alt='Orange circle' />
      <img className='w-[160px] h-[160px] absolute left-auto top-0 right-0 bottom-auto overflow-hidden object-cover align-middle' src={blue} alt='Blue circle' />
      <img className=' relative overflow-visible object-contain w-full h-full max-w-full align-middle' src={image} alt='Food and Drink' />
    </article>
  )
}

export default Phone2
