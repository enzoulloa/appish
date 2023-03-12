const Track = ({ image, title, paragraph }) => {
  return (
    <article className=' flex flex-col justify-center items-center'>
      <img className='object-contain   align-middle' src={image} alt={title + ' icon'} />
      <h3 className=' mt-3 text-[22px] leading-[31px] text-[#231656] font-bold'>{title}</h3>
      <p className='mt-[6px] text-base text-[#6f6a80] '>{paragraph}</p>
    </article>
  )
}

export default Track
