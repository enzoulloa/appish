import Card from './Card'

const Testimonials = () => {
  return (
    <section className=' pb-[60px] w-[90%] flex flex-col items-center justify-center text-center mx-auto'>
      <h2 className=' max-w-[675px] text-[26px] leading-[110%] text-[#231656] font-extrabold '>Say goodbye to clutter and bounce rates.</h2>
      <div className=' relative mt-0 flex w-full flex-col justify-center items-center h-auto text-center pt-5 mx-auto whitespace-nowrap'>
        <Card />
      </div>
    </section>
  )
}

export default Testimonials
