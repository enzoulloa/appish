import Phone from './Phone'

const Design = () => {
  return (
    <section className=' w-[90%] pt-[80px] pb-[80px] flex flex-col max-w-[1100px] mx-auto justify-between items-center'>
      <Phone />
      <div className=' w-full'>
        <h2 className=' text-[26px] leading-[110%] text-[#231656] font-extrabold'>Design that your visitors love.</h2>
        <p className=' mt-[30px] text-[#6f6a80] leading-[150%] text-[17px]'>Engage your visitors with great interactions and beautiful animations, and make your site content easy to read. Built by designers with years of real experience, Appish helps you put your best foot forward.</p>
      </div>
    </section>
  )
}

export default Design
