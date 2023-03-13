import Phone2 from './Phone2'
import Characteristic from './Characteristic'
import circle from '../assets/icons/circle.svg'
import hearth from '../assets/icons/hearth.svg'
import squares from '../assets/icons/squares.svg'

const Characteristics = () => {
  return (
    <section className=' relative flex flex-col-reverse w-[90%] py-20 max-w-[1100px] mx-auto justify-between items-center'>
      <div className=' w-full'>
        <h2 className=' w-[100%] text-[26px] leading-[110%] text-[#231656] font-extrabold '>Fast, scalable and fun.</h2>
        <div className=' mt-[30px] w-full mx-auto'>
          <Characteristic icon={circle} title='Launch your website without any delay.' paragraph="Edit the content and hit publish! Don't wait weeks to get your site up and running!" />
          <Characteristic icon={hearth} margin=' py-[45px]' title='Tweak the template to fit your needs.' paragraph='With a style guide and utility pages, making changes and adapting the website to fit your app is easy.' />
          <Characteristic icon={squares} title='Keep it safe and secure.' paragraph="Webflow's enterprise-grade security and guaranteed 99.9% uptime ensure you're always ready for visitors." />
        </div>
      </div>
      <Phone2 />
    </section>
  )
}

export default Characteristics
