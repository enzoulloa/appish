import google from '../assets/icons/GooglePlay.svg'
import app from '../assets/icons/AppStore.svg'
import image from '../assets/images/Devicewithshadow.png'
import pink from '../assets/images/pink.jpg'
import orange from '../assets/images/orange.jpg'
import yellow from '../assets/images/yellowImage.jpg'

const Footer = () => {
  return (
    <footer className=' bg-[#231656]'>
      <div className=' flex flex-col-reverse mx-auto items-center justify-center lg:max-w-[1100px] w-[90%] relative py-[55px]'>
        <div className=' flex items-center justify-center flex-col-reverse mx-auto lg:max-w-[1100px] w-full py-[35px] '>
          <div className=' w-full flex flex-col md:max-w-[700px] items-start '>
            <h2 className=' text-[40px] leading-[110%] text-white font-extrabold '>Stop spending time on your website and focus on your customers, with Appish.</h2>
            <div className=' flex items-center justify-center mb-[30px] mt-5 mx-auto  '>
              <a className='w-[45%] h-[60px] flex' href=''>
                <img className='object-contain align-middle' src={app} alt='' />
              </a>
              <a className=' ml-[10px] w-[45%] h-[60px] flex ' href=''>
                <img className='object-contain align-middle' src={google} alt='' />
              </a>
            </div>
          </div>
        </div>
        <div className=' w-[90%] '>
          <img className=' align-middle w-full h-full' src={image} alt='' />
        </div>
        <div className=' absolute top-[32%] right-[1%] w-[30px] h-[30px] left-auto bottom-auto overflow-hidden border-[1px] border-solid border-[#ececec] rounded-full'>
          <img className='object-contain overflow-visible w-full h-full align-middle' src={pink} alt='' />
        </div>
        <div className=' absolute top-[50%] left-auto right-0 bottom-auto w-[30px] h-[30px] overflow-hidden border-[1px] border-solid border-[#ececec] rounded-full'>
          <img className='object-contain overflow-visible' src={yellow} alt='' />
        </div>
        <div className=' absolute -right-[3%] -left-[1%] top-[15%] bottom-auto w-[30px] h-[30px] overflow-hidden border-[1px] border-solid border-[#ececec] rounded-full'>
          <img className='object-contain overflow-visible' src={orange} alt='' />
        </div>
      </div>
      <div className=' mt-[50px] pb-[30px] w-[90%] flex flex-col justify-between items-center lg:max-w-[1100px] mx-auto '>
        <p className=' text-base leading-[26px] text-white'>
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
