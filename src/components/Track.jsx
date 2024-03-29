const Track = ({ image, title, paragraph }) => {
  return (
    <article className=' flex flex-col justify-center items-center'>
      <img className='object-contain align-middle' src={image} alt={title + ' icon'} loading='lazy' />
      <h3 className=' mt-3 text-[22px] leading-[31px] text-[#231656] font-bold md:mt-8'>{title}</h3>
      <p className='mt-[6px] text-base text-[#6f6a80] md:mt-[17px] md:leading-[160%]'>{paragraph}</p>
    </article>
  )
}

export default Track
