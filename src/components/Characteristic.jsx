
const Characteristic = ({ icon, title, paragraph, margin }) => {
  return (
    <article className={` flex flex-col justify-between items-start ${margin} md:justify-center md:flex-row lg:m-0`}>
      <img className=' mb-5 object-contain align-middle md:mt-[5px] md:mb-0' src={icon} alt='icon' loading='lazy' />
      <div className='max-w-[85%] lg:max-w-[83%]'>
        <h3 className=' text-xl leading-[29px] text-[#231656] font-semibold md:leading-[32px]'>{title}</h3>
        <p className=' mt-[10px] text-base leading-[160%] text-[#6f6a80]'>{paragraph}</p>
      </div>
    </article>
  )
}

export default Characteristic
