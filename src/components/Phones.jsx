import blue from '../assets/images/GroupBlue.png'
import orange from '../assets/images/GroupOrange.png'
import phone3 from '../assets/images/Device-1.png'
import phone2 from '../assets/images/Devicewithshadow.png'
import phone1 from '../assets/images/Group.png'

const Phones = () => {
  return (
    <section className=' overflow-hidden '>
      <div className=' pb-[50px]  w-[90%] pt-[80px] max-w-[1100px] mx-auto'>
        <div className=' flex w-full items-center justify-center relative'>
          <div className='absolute top-[6%] w-[160px] h-[160px] right-0 left-auto bottom-auto '>
            <img className='overflow-visible object-contain w-full h-full max-w-full align-middle' src={blue} alt='Blue circle' />
          </div>
          <div className=' absolute w-[110px] h-[110px] left-[5%] top-auto right-auto bottom-[3%] '>
            <img className='overflow-visible object-contain w-full h-full max-w-full align-middle' src={orange} alt='Orange circle' />
          </div>
          <div className=' -mr-[60px] -mb-[40px] relative w-full max-w-[300px] -rotate-[20deg]'>
            <img className=' overflow-visible object-contain h-full w-full align-middle' src={phone1} alt='' />
          </div>
          <div className=' relative w-full max-w-[300px] '>
            <img className=' overflow-visible object-contain h-full w-full align-middle' src={phone2} alt='' />
          </div>
          <div className=' -mb-[40px] -ml-[60px] relative w-full max-w-[300px] rotate-[20deg]'>
            <img className=' overflow-visible object-contain h-full w-full align-middle' src={phone3} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Phones
