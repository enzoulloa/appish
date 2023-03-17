import app from '../assets/icons/AppStoreBtn.svg'
import google from '../assets/icons/GooglePlayBtn.svg'

const Appish = () => {
  return (
    <section className=' pt-[140px] max-w-[960px] pb-[50px] flex justify-center text-center flex-col mx-auto items-center md:pt-[180px] lg:pt-[260px]'>
      <h1 className=' text-[33px] font-extrabold leading-[110%] text-[#231656] w-[90%] md:text-[58px] md:w-[85%] lg:text-[68px] lg:w-[90%]'>Make an impression and drive more downloads with Appish.</h1>
      <p className=' mt-8 w-[90%] text-[#6f6a80] leading-[150%] text-[17px] md:w-[70%] md:text-xl font-medium lg:w-[80%]'>Stand out from the crowd with a fun website that's easy to set-up. Show the key features of your app with a high-converting design that helps you grow.</p>
      <div className='w-[90%] mt-[30px] flex justify-center items-center text-center md:mt-[40px] '>
        <a className='w-[45%] h-[60px] md:w-[185px] md:h-[55px]' href='https://webflow.com/'><img className='h-full' src={app} alt='AppStore' /></a>
        <a className='w-[45%] h-[60px] ml-[10px]  md:w-[185px] md:h-[55px] md:ml-[15px]' href='https://webflow.com/'><img className='h-full' src={google} alt='GooglePlay' /></a>
      </div>
    </section>
  )
}

export default Appish
