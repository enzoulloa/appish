import Award from './Award'
import platinum from '../assets/images/platinum.webp'

const Awards = () => {
  return (
    <section className=' pt-[60px] lg:pt-0'>
      <div className=' pb-[100px] grid items-center gap-x-[70px] gap-y-[50px] grid-cols-1 relative max-w-[950px] w-[90%] mx-auto justify-between md:pb-[150px] md:justify-center md:gap-y-[60px] md:w-[85%] lg:grid-cols-3 lg:pb-[200px] lg:gap-y-0 lg:gap-x-0'>
        <Award number='4.5/5' paragraph='On the iOS App Store.' />
        <Award number='4.8/5' paragraph='On the Android Play Store.' />
        <img className='max-w-[70%] w-[230px] mx-auto ' src={platinum} alt='PLatinum nominee' loading='lazy' />
      </div>
    </section>
  )
}
export default Awards
