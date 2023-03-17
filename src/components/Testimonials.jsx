import Card from './Card'

const Testimonials = () => {
  return (
    <section className=' pb-[60px] w-[90%] flex flex-col items-center justify-center text-center mx-auto max-w-[1100px] md:pt-[100px] lg:pb-[150px] lg:w-[85%]'>
      <h2 className=' max-w-[675px] text-[26px] leading-[110%] text-[#231656] font-extrabold md:text-[48px]'>Say goodbye to clutter and bounce rates.</h2>
      <div className=' relative mt-0 flex w-full flex-col justify-center items-center h-auto text-center pt-5 mx-auto whitespace-nowrap max-w-[850px] lg:mt-5 lg:pt-0'>
        <Card />
      </div>
    </section>
  )
}

export default Testimonials
