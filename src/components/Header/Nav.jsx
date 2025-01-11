import { React, useState } from "react";
import Logo from "/src/assets/image/HeaderImg/Logo.png";
import HeaderPic from "/src/assets/image/HeaderImg/HeaderPic2.png";
import design from "/src/assets/image/HeaderImg/design.png";
import search from "/src/assets/image/HeaderImg/Search.png";
import Location from "/src/assets/image/HeaderImg/Location.png";
import big from "/src/assets/image/HeaderImg/big.png";
import cancel from "/src/assets/image/HeaderImg/cancel.png";

const Nav = () => {
    const [page, ShowPage] = useState(false);

    const togglePage = () => {
        ShowPage((previousState) => !previousState);
    };
    const togglePage2 = () => {
        ShowPage((previousState) => !previousState);
    };

    return (
        <div className='vim bg-customeBg bg-right bg-no-repeat small:px-12 big:px-20 lg:px-32 px-4 big3-px-16 big2:px-16 bg-[url("/src/assets/image/HeaderImg/PatternBg.png")] bg-contain'>
            <div className='headerOne w-full flex pt-5 pb-5 big:pt-0 big:pb-0 justify-between bg-[url()]'>
                <div className='one gap-2 big:gap-12 flex items-center'>
                    <img
                        className='w-[8rem] big:w-[10rem] big:h-[2.25rem] h-[2rem]'
                        src={Logo}
                        alt=''
                    />
                    <div className='link big2:flex hidden big:gap-6 gap-2'>
                        <a
                            className='hLink text-base w-20 font-Epilogue font-medium py-6 text-customeWhite'
                            href='#'
                        >
                            Find Jobs
                        </a>
                        <a
                            className='hLink text-base font-Epilogue font-medium py-6 text-customeWhite'
                            href='#'
                        >
                            Browse
                        </a>
                        <a
                            className='hLink font-Epilogue text-base font-medium py-6 text-customeWhite'
                            href='#'
                        >
                            Companies
                        </a>
                    </div>
                </div>


                <div className='two gap-0 big:gap-2.5 hidden big2:flex items-center'>
                    <a
                        className='hLink text-base font-Epilogue font-medium big:pl-6 big:pr-6 pt-3 pb-3 pl-3 pr-3 text-customeBlue'
                        href='#'
                    >
                        Login
                    </a>
                    <hr className='hr ' />
                    <a
                        className='hLink text-base font-medium font-Epilogue big:pl-6 big:pr-6 pt-3 w-20 big:w-28 pb-3 pl-0 pr-0 bg-customeBlue text-white'
                        href='#'
                    >
                        Sign Up
                    </a>
                </div>




                <div className='big big2:hidden flex lg:hidden'>
                    <img src={big} onClick={togglePage} alt='' className='bigg' />
                </div>
            </div>
            <div className='headerTwo flex big2:justify-center big3:justify-center big:justify-between justify-center '>
                <div className='onee flex flex-col justify-center big:items-stretch big3:items-stretch items-center font-semibold'>
                    <div className='first small:w-[300px] big3:w-customWidth big2:w-customWidth2 big:w-customWidth w-full'>
                        <h3 className='disc text-customeWhitee text-customSize/customeLine text-start'>
                            Discover more than{" "}
                            <span className='sp text-customlightBlue'>5000+ Jobs</span>
                        </h3>
                        <img className='de pt-3 ' src={design} alt='' />
                        <p className='gr text-start text-customeWhite font-Epilogue pt-3 pb-3'>
                            Great platform for the job seeker that searching for new career
                            heights and passionate about startups.
                        </p>
                    </div>
                    <div className='search w-full small:w-auto relative shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] justify-between big:flex-row gap-5 flex flex-col p-4 bg-white'>
                        <div className='ser items-center pl-4 pr-4 flex'>
                            <img className='ser w-4 h-4 ' src={search} alt='' />
                            <input
                                placeholder='Job title or keyword'
                                className='sear font-Epilogue outline-none text-customSer text-base pl-2 big:w-43 w-full border-b-2 border-rgba(124, 132, 147, 1)'
                                type='search'
                                name=''
                                id=''
                            />
                        </div>
                        <div className='loca items-center pl-4 pr-4 flex'>
                            <img className='loc w-4 h-4 ' src={Location} alt='' />
                            <select
                                className='sel font-Epilogue border-b-2 border-rgba(124, 132, 147, 1) pr-12 text-customeWhitee pl-2 big:w-43 w-full flex'
                                name='gender'
                                id='gender'
                            >
                                <option className='val text-base ' value=''>
                                    Florence, Italy
                                </option>
                                <option value=''>Miami, Italy</option>
                            </select>
                        </div>
                        <div className='patt pl-4 pr-4'>
                            <p className='jb font-Epilogue text-white bg-customJb big:w-customjb w-full pt-3.5 pr-7 pl-7 pb-3.5'>
                                Search my job
                            </p>
                        </div>
                    </div>
                    <p className='pop pt-7 text-customPop text-base font-Epilogue text-start'>
                        Popular : UI Designer, UX Researcher, Android, Admin
                    </p>
                </div>

                <div className='twoo hidden big:flex'>
                    <img src={HeaderPic} className='' alt='' />
                </div>
            </div>
            {page && (
                <div className="showw m-0 left-0 w-custome100w justify-end big2:hidden flex flex-col h-72  top-0 absolute p-4 small:pr-12 pr-4 bg-customeBlue2">
                    <div className="img w-full justify-end bg-gray-800 flex">
                    <img src={cancel} onClick={togglePage2}  alt='' className='bigg w-[38px] h-[38px] ' />
                    </div>
                    
                    <div className='link big2:hidden flex flex-col  big2:gap-6 gap-2'>
                        <a onClick={togglePage2}
                            className='hLink  text-end text-base font-Epilogue font-medium big2:py-6 py-1 text-white big2:text-customeWhite'
                            href='#'
                        >
                            Find Jobs
                        </a>
                        <a onClick={togglePage2}
                            className='hLink text-end text-base font-Epilogue font-medium big2:py-6 py-1 text-white big2:text-customeWhite'
                            href='#'
                        >
                            Browse
                        </a>
                        <a onClick={togglePage2}
                            className='hLink text-end font-Epilogue text-base font-medium big2:py-6 py-1 text-white big2:text-customeWhite'
                            href='#'
                        >
                            Companies
                        </a>
                    </div>
                    <div className='two gap-2 big2:gap-2.5 flex flex-col big2:hidden items-end'>
                        <a onClick={togglePage2}
                            className='hLink  text-base font-Epilogue font-medium big2:pl-6 big2:pr-6 pt-3 pb-3 pl-3 pr-3 bg-white text-customeBlue'
                            href='#'
                        >
                            Login
                        </a>
                        <hr className='hr ' />
                        <a onClick={togglePage2}
                            className='hLink text-base font-medium font-Epilogue big2:pl-6 big2:pr-6 pt-3 w-20 big2:w-28 pb-3 pl-0 pr-0 bg-customeBlue text-white'
                            href='#'
                        >
                            Sign Up
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Nav;
