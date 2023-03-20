import { useState } from 'react'
import { testimonials } from '../data/testimonials'
import quotes from '../assets/icons/comillas.svg'
import left from '../assets/icons/left.svg'
import right from '../assets/icons/right.svg'

const Card = () => {
  const people = testimonials
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [selectedTest, setSelectedTest] = useState(people[0])
  const [selectedImage1, setSelecteImage1] = useState(0)
  const [selectedImage2, setSelecteImage2] = useState(1)
  const [selectedImage3, setSelecteImage3] = useState(2)
  const [selectedImage4, setSelecteImage4] = useState(3)
  const [selectedImage5, setSelecteImage5] = useState(4)

  const selectNewImage = (index, people, next = true) => {
    const condition1 = next ? selectedImage1 < people.length - 1 : selectedImage1 > 0
    const condition2 = next ? selectedImage2 < people.length - 1 : selectedImage2 > 0
    const condition3 = next ? selectedImage3 < people.length - 1 : selectedImage3 > 0
    const condition4 = next ? selectedImage4 < people.length - 1 : selectedImage4 > 0
    const condition5 = next ? selectedImage5 < people.length - 1 : selectedImage5 > 0
    const nextIndex1 = next ? (condition1 ? selectedImage1 + 1 : 0) : condition1 ? selectedImage1 - 1 : people.length - 1
    const nextIndex2 = next ? (condition2 ? selectedImage2 + 1 : 0) : condition2 ? selectedImage2 - 1 : people.length - 1
    const nextIndex3 = next ? (condition3 ? selectedImage3 + 1 : 0) : condition3 ? selectedImage3 - 1 : people.length - 1
    const nextIndex4 = next ? (condition4 ? selectedImage4 + 1 : 0) : condition4 ? selectedImage4 - 1 : people.length - 1
    const nextIndex5 = next ? (condition5 ? selectedImage5 + 1 : 0) : condition5 ? selectedImage5 - 1 : people.length - 1

    setSelecteImage1(nextIndex1)
    setSelecteImage2(nextIndex2)
    setSelecteImage3(nextIndex3)
    setSelecteImage4(nextIndex4)
    setSelecteImage5(nextIndex5)
  }

  const selectNewTest = (index, people, next = true) => {
    const condition = next ? selectedIndex < people.length - 1 : selectedIndex > 0
    const nextIndex = next ? (condition ? selectedIndex + 1 : 0) : condition ? selectedIndex - 1 : people.length - 1
    setSelectedTest(people[nextIndex])
    setSelectedIndex(nextIndex)
  }

  const previous = () => {
    selectNewTest(selectedIndex, people, false)
    selectNewImage(selectedImage1, people, false)
    selectNewImage(selectedImage2, people, false)
    selectNewImage(selectedImage3, people, false)
    selectNewImage(selectedImage4, people, false)
    selectNewImage(selectedImage5, people, false)
  }

  const next = () => {
    selectNewTest(selectedIndex, people)
    selectNewImage(selectedImage1, people)
    selectNewImage(selectedImage2, people)
    selectNewImage(selectedImage3, people)
    selectNewImage(selectedImage4, people)
    selectNewImage(selectedImage5, people)
  }

  return (
    <>
      <article className=' text-center align-top w-full h-full whitespace-normal flex flex-col justify-center items-center'>
        <div className=' py-10 px-[8%] max-w-[620px] flex flex-col items-center justify-center mx-auto min-h-[350px] md:w-[75%] md:pt-[45px] md:px-[10px] md:pb-[60px] lg:pt-[70px]'>
          <img className=' w-[42px] h-[42px] object-contain' src={quotes} alt='Quote' loading='lazy' />
          <p className=' mt-[25px] text-lg leading-[140%] text-[#0f072c] md:text-[22px]'>{selectedTest.paragraph}</p>
        </div>
        <div className=' max-w-[620px] flex items-start justify-center mx-auto mt-10 '>
          <img className='mx-[5px] w-[38px] h-[38px] rounded-full md:mx-[9px]' src={people[selectedImage4].image} alt='image1' loading='lazy' />
          <img className='mx-[5px] w-[38px] h-[38px] rounded-full md:mx-[9px]' src={people[selectedImage5].image} alt='image2' loading='lazy' />
          <div className=' max-w-[80px] flex flex-col justify-center items-center mx-[5px] md:max-w-[100px] md:mx-[9px]'>
            <img className=' w-[80px] h-[80px] rounded-full' src={people[selectedImage1].image} alt='selected image' />
            <p className='w-full mt-[10px] font-semibold text-[#0f072c] text-lg leading-[28px] md:w-[150%]'>{selectedTest.name}</p>
            <p className=' w-[220%] mt-[6px] text-[#6f6a80] text-xs leading-[18px]'>{selectedTest.company}</p>
          </div>
          <img className='mx-[5px] w-[38px] h-[38px] rounded-full md:mx-[9px]' src={people[selectedImage2].image} alt='image3' loading='lazy' />
          <img className='mx-[5px] w-[38px] h-[38px] rounded-full md:mx-[9px]' src={people[selectedImage3].image} alt='image4' loading='lazy' />
        </div>
      </article>
      <button onClick={previous} className='absolute -left-[4%] top-[30%] bottom-0 right-auto w-7 h-7 flex flex-col justify-center items-center rounded-full bg-[#0f072c] cursor-pointer text-white text-[40px] md:left-[3%] md:top-0 md:mt-[26%] lg:left-[10%] lg:-top-[25%] md:w-[35px] md:h-[35px]'>
        <img className=' w-[14px] h-[11px] object-contain align-middle' src={left} alt='left' loading='lazy' />
      </button>
      <button onClick={next} className='absolute top-[30%] -right-[4%] left-auto bottom-0 w-7 h-7 flex flex-col justify-center items-center rounded-full bg-[#0f072c] mx-auto cursor-pointer text-white text-[40px] md:right-[3%] md:top-0 md:mt-[26%] lg:right-[10%] lg:-top-[25%] md:w-[35px] md:h-[35px]'>
        <img className='w-[14px] h-[11px] object-contain align-middle' src={right} alt='right' loading='lazy' />
      </button>
    </>
  )
}
export default Card
