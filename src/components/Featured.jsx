import ipsun1 from '../assets/logos/ipsun1.png'
import ipsun2 from '../assets/logos/ipsun2.png'
import ipsun3 from '../assets/logos/ipsun3.png'
import ipsun4 from '../assets/logos/ipsun4.png'

const Featured = () => {
  return (
    <section className=' pt-[80px] max-w-[900px] pb-[150px] flex flex-col justify-center gap-4 w-[90%] mx-auto items-center'>
      <p className=' text-sm leading-6 text-[#6f6a80]'>Trusted by top-rated-apps</p>
      <div className=' w-[90%] grid grid-cols-2 gap-x-10 gap-y-[30px]  max-w-[370px] mt-[10px] '>
        <img src={ipsun1} alt='' />
        <img src={ipsun2} alt='' />
        <img src={ipsun3} alt='' />
        <img src={ipsun4} alt='' />
      </div>
    </section>
  )
}
export default Featured
