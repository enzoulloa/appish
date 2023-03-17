import google from '../assets/icons/GooglePlay.svg'
import app from '../assets/icons/AppStore.svg'
import image from '../assets/images/Devicewithshadow.png'
import pink from '../assets/images/pink.jpg'
import orange from '../assets/images/orange.jpg'
import yellow from '../assets/images/yellowImage.jpg'

const Footer = () => {
  return (
    <footer className=' bg-[#231656]'>
      <div className=' flex flex-col-reverse mx-auto items-center justify-center lg:max-w-[1100px] w-[90%] relative py-[55px] md:w-[85%] md:justify-between md:py-[25px] lg:py-[55px] lg:flex-row '>
        <div className=' flex items-center justify-center flex-col-reverse mx-auto lg:max-w-[1100px] w-full py-[35px] md:w-[80%] md:max-w-[700px] md:items-start md:py-0 lg:w-[70%] lg:flex-col'>
          <div className=' w-full flex flex-col md:max-w-[700px] items-start '>
            <h2 className=' text-[40px] leading-[110%] text-white font-extrabold md:text-[50px] lg:text-[64px]'>Stop spending time on your website and focus on your customers, with Appish.</h2>
            <div className=' flex items-center justify-center mb-[30px] mt-5 mx-auto md:mt-[50px] md:justify-between md:mx-0 lg:mt-[65px] lg:justify-between'>
              <a className='w-[45%] h-[60px] flex md:w-[185px] md:h-[55px] ' href=''>
                <img className='object-contain align-middle' src={app} alt='' />
              </a>
              <a className=' ml-[10px] w-[45%] h-[60px] flex md:w-[185px] md:h-[55px] md:ml-[15px]' href=''>
                <img className='object-contain align-middle' src={google} alt='' />
              </a>
            </div>
          </div>
        </div>
        <div className=' w-[90%] md:w-[40%] md:mb-[60px] lg:w-[25%]'>
          <img className=' align-middle w-full h-full' src={image} alt='' />
        </div>
        <div className=' absolute top-[32%] right-[1%] w-[30px] h-[30px] left-auto bottom-auto overflow-hidden border-[1px] border-solid border-[#ececec] rounded-full md:top-[17%] md:right-[19%] md:w-[51px] md:h-[51px] lg:top-auto lg:-right-[8%] lg:bottom-[40%]'>
          <img className='object-contain overflow-visible w-full h-full align-middle' src={pink} alt='' />
        </div>
        <div className=' absolute top-[50%] left-auto right-0 bottom-auto w-[30px] h-[30px] overflow-hidden border-[1px] border-solid border-[#ececec] rounded-full md:top-[46%] md:w-[60px] md:h-[60px] lg:top-auto lg:right-[33%] lg:bottom-[19%] lg:w-[78px] lg:h-[78px]'>
          <img className='object-contain overflow-visible' src={yellow} alt='' />
        </div>
        <div className=' absolute -right-[3%] -left-[1%] top-[15%] bottom-auto w-[30px] h-[30px] overflow-hidden border-[1px] border-solid border-[#ececec] rounded-full md:left-0 md:top-[19%] md:right-auto md:w-[38px] md:h-[38px] lg:left-auto lg:top-[16%] lg:right-[32%] lg:w-[38px] lg:h-[38px]'>
          <img className='object-contain overflow-visible' src={orange} alt='' />
        </div>
      </div>
      <div className=' mt-[50px] pb-[30px] w-[90%] flex flex-col justify-between items-center lg:max-w-[1100px] mx-auto md:pt-[60px] md:w-[85%] md:mt-0 lg:pt-[100px]'>
        <p className=' text-base leading-[26px] text-white md:text-lg'>
          © All rights reserved.&nbsp;
          <a className=' text-white text-opacity-50' href=''>Conversasionflow</a>
          . Powered by&nbsp;
          <a className=' text-white text-opacity-50' href=''>Webflow</a>
          .&nbsp;
          <a className=' text-white text-opacity-50' href=''> Image License Info</a>
          &nbsp;/&nbsp;
          <a className=' text-white text-opacity-50' href=''>Changelog</a>
          &nbsp;/&nbsp;
          <a className=' text-white text-opacity-50' href=''>Styleguide</a>
          &nbsp;/&nbsp;
          <a className=' text-white text-opacity-50' href=''>Instructions</a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
