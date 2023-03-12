import Track from './Track'
import blue from '../assets/logos/blueLogo.svg'
import orange from '../assets/logos/orangeLogo.svg'
import violet from '../assets/logos/violetLogo.svg'

const Tracks = () => {
  return (
    <section className='pt-[110px] max-w-[950px] flex flex-col text-center justify-center w-[90%] pb-20 mx-auto items-center'>
      <h2 className=' text-[26px] leading-[110%] text-[#231656] font-extrabold'> Show the true value of your product.</h2>
      <p className=' w-[80%] mt-[30px] text-[#6f6a80] leading-[150%]'>Stop letting feature-dumps stop your visitors from seeing the impact your finance product can make on their lives. Build a better website with Appish.</p>
      <div className=' w-[90%] mt-[50px] grid gap-y-[70px] gap-x-[40px] grid-cols-1 items-start '>
        <Track image={blue} title='Highly responsive' paragraph='Captivate your guests with a seamless, fast, browsing experience across all devices.' />
        <Track image={orange} title='Lightning fast' paragraph='Don&apos;t make your visitors wait on you. Get reliable loading speeds that keep your visitors on your site.' />
        <Track image={violet} title='Super customizable' paragraph='Edit the content on your pages easily with the Webflow Editor, without worrying about code.' />
      </div>
    </section>
  )
}

export default Tracks
