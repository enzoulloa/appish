import Phone from './Phone'

const Design = () => {
  return (
    <section className=' w-[90%] pt-[80px] pb-[80px] flex flex-col max-w-[1100px] mx-auto justify-between items-center md:w-[85%] md:pb-[100px] md:pt-[100px]'>
      <Phone />
      <div className=' w-full md:w-[75%]'>
        <h2 className=' text-[26px] leading-[110%] text-[#231656] font-extrabold md:text-[48px]'>Design that your visitors love.</h2>
        <p className=' mt-[30px] text-[#6f6a80] leading-[150%] text-[17px] md:mt-[40px] md:text-[20px]'>Engage your visitors with great interactions and beautiful animations, and make your site content easy to read. Built by designers with years of real experience, Appish helps you put your best foot forward.</p>
      </div>
    </section>
  )
}

export default Design
