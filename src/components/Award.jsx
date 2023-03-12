import star from '../assets/icons/stars.svg'

const Award = ({ number, paragraph }) => {
  return (
    <article className=' flex items-center flex-col justify-between '>
      <h5 className='text-[80px] text-[#231656] leading-[96px] font-extrabold'>{number}</h5>
      <img className='mb-[18px] align-middle' src={star} alt='Rate' />
      <p className=' text-[17px] leading-6 font-normal text-[#6f6a80]'>{paragraph}</p>
    </article>
  )
}

export default Award
