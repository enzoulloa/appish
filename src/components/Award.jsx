import star from '../assets/icons/stars.svg'

const Award = ({ number, paragraph }) => {
  return (
    <article className=' flex items-center flex-col justify-between lg:items-start'>
      <h3 className='text-[80px] text-[#231656] leading-[96px] font-extrabold md:text-[74px]'>{number}</h3>
      <img className='mb-[18px] align-middle ' src={star} alt='Rate' loading='lazy' />
      <p className=' text-[17px] leading-6 font-normal text-[#6f6a80] md:leading-[140%]'>{paragraph}</p>
    </article>
  )
}

export default Award
