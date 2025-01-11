import React from 'react'
import Nav from './Nav'
import FeaturedCompany from "/src/assets/image/HeaderImg/FeaturedCompany.png"
import FeaturedCompany2 from "/src/assets/image/HeaderImg/FeaturedCompany2.png"


const Header = () => {
  return (
    <div>
        <Nav/>
        <div className="comp gap-8 flex flex-col small:px-12 big:px-20 lg:px-32 px-4 big3-px-16 big2:px-16  w-full pt-6 pb-6 big:pt-12 big:pb-12 ">
          <p className='coom text-base font-Epilogue text-customSer text-start'>Companies we helped grow</p>
          <img src={FeaturedCompany} className='bik hidden big2:flex big:flex big3:hidden' alt="" />
          <img src={FeaturedCompany2} className='bikk w-full h-full flex big2:hidden big:hidden' alt="" />
        </div>
    </div>
  )
} 

export default Header
