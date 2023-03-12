
const Characteristic = ({ icon, title, paragraph, margin }) => {
  return (
    <article className={` flex flex-col justify-between items-start ${margin}`}>
      <img className=' mb-5 object-contain align-middle' src={icon} alt='' />
      <h4 className=' text-xl leading-[29px] text-[#231656] font-semibold '>{title}</h4>
      <p className=' mt-[10px] text-base leading-[160%] text-[#6f6a80]'>{paragraph}</p>
    </article>
  )
}

export default Characteristic
