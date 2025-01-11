import React from 'react'
import one from "/src/assets/image/ExplorreImg/Icon1.png"
import two from "/src/assets/image/ExplorreImg/Icon2.png"
import three from "/src/assets/image/ExplorreImg/Icon3.png"
import four from "/src/assets/image/ExplorreImg/Icon4.png"
import five from "/src/assets/image/ExplorreImg/Icon5.png"
import six from "/src/assets/image/ExplorreImg/Icon6.png"
import seven from "/src/assets/image/ExplorreImg/Icon7.png"
import eight from "/src/assets/image/ExplorreImg/Icon8.png"
import nine from "/src/assets/image/ExplorreImg/Icon9.png"
import arv from "/src/assets/image/ExplorreImg/arr.png"
import ten from "/src/assets/image/ExplorreImg/Icon.png"
import image from "/src/assets/image/ExplorreImg/DashboardCompany.png"
import image2 from "/src/assets/image/ExplorreImg/DashboardCompany2.png"
import ExploreEach from './ExploreEach'

const Explore = () => {

    const each = [
        {
            image:two,
            h3:"Design",
            p:"235 jobs available",
            img:ten

        },{
            image:three,
            h3:"Sales",
            p:"756 jobs available",
            img:ten
        },
        {
            image:four,
            h3:"Marketing",
            p:"140 jobs available",
            img:ten
        },
        {
            image:five,
            h3:"Finance",
            p:"325 jobs available",
            img:ten
        },
        {
            image:six,
            h3:"Technology",
            p:"436 jobs available",
            img:ten
        },
        {
            image:seven,
            h3:"Engineering",
            p:"542 jobs available",
            img:ten
        },
        {
            image:eight,
            h3:"Business",
            p:"211 jobs available",
            img:ten
        },
        {
            image:nine,
            h3:"Human Resource",
            p:"346 jobs available",
            img:ten
        }
    ]

  return (
    <>
         <div className='explorea w-full  flex gap-6 big:gap-12 flex-col justify-center  small:px-12 big:px-20 lg:px-32 px-4 big3-px-16 big2:px-16 '>   
                <div className="exx flex justify-center big:justify-between ">
                    <p className='expl text-4xl big:text-5xl text-center big:text-start  font-semibold'>Explore by <span className="cat text-customlightBlue">category</span> </p>
                    <a href="#" className='avr big:flex hidden gap-4 text-customeBlue'>Show all job <img src={arv} className='inv w-6 h-6' alt="" /></a>
                </div>
                
                <div className="contain small:grid-cols-2 big:grid-cols-3 lg:grid-cols-4  small:gap-8 gap-4 grid grid-cols-1 pap-4">
            {
                each.map((data,index)=>{
                    return <ExploreEach key={index} img={data.image} h3={data.h3} p={data.p} arr={data.img}  />
                })
            }

                </div>
                <a href="#" className='avr big:hidden flex gap-4 text-customeBlue'>Show all job <img src={arv} className='inv w-6 h-6' alt="" /></a>
                <div className="start gap-8 big:gap-0 pt-20 flex flex-col big:flex-row h-auto big:h-[414px] justify-between pl-4 pr-4 big:pl-16 big:pr-16 small:pl-8 small:pr-8 mt-20  mb-20 bg-cover bg- bg-no-repeat w-full h-100vh bg-[url('/src/assets/image/ExplorreImg/Rectangle742.png')] big:bg-[url('/src/assets/image/ExplorreImg/Rectangle2742.png')]">
                    <div className="textt font-Epilogue mr-5 gap-6 flex flex-col w-full big:w-customew"> 
                        <h3 className='post big:text-5xl text-3xl text-center w-full big:text-start font-semibold text-white font-Epilogue '>Start posting jobs today</h3>
                        <p className="only text-base  text-white text-center big:text-start">Start posting jobs for only $10.</p>
                        <p className='free bg-white big:w-44 h-12 flex big:self-start self-center w-full items-center  justify-center'>Sign Up For Free</p>
                    </div>
                    <img className='win hidden small:flex w-custome100w big:w-custome100w2 h-custome100h' src={image} alt="" />
                    <img className='win w-custome100w h-custome100h flex small:hidden big:w-96 lg:w-customewi' src={image2} alt="" />
                </div>
        </div>
    </>
  )
}

export default Explore