import Award from './Award'
import platinum from '../assets/images/platinum.png'

const Awards = () => {
  return (
    <section className=' pt-[60px] '>
      <div className=' pb-[100px] grid items-center gap-x-[70px] gap-y-[50px] grid-cols-1 relative max-w-[950px] w-[90%] mx-auto justify-between'>
        <Award number='4.5/5' paragraph='On the iOS App Store.' />
        <Award number='4.8/5' paragraph='On the Android Play Store.' />
        <img className='max-w-[70%] w-[230px] mx-auto' src={platinum} alt='PLatinum nominee' />
      </div>
    </section>
  )
}
export default Awards
