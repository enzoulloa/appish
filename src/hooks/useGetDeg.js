import { useState, useEffect } from 'react'

const useGetDeg = () => {
  const [deg, setDeg] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setDeg(Math.floor(window.visualViewport.pageTop / 8))
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return deg
}
export default useGetDeg
