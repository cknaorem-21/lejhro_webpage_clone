import React from 'react'
import logoBlue from "../assets/lejhro_icon_blue.png"
import { Link } from "react-router-dom";
import Hamburger from './Hamburger';
import { FaArrowRightLong } from "react-icons/fa6";

const Topnav = ({topnavActive, setTopnavActive, sidenavActive, setSidenavActive}) => {
  return (
    <>
        {/* top nav */}
      <div className='flex justify-center items-center fixed z-40 left-0 top-0 h-[4rem] w-full bg-white shadow-lg'>
        <div className='w-[90%] md:w-[85%] lg:w-[75%]'>
        <div className="flex justify-between w-full h-fit">
              <div>
                <img
                  className="w-[170px] md:w-[200px] lg:w-[230px]"
                  src={logoBlue}
                  alt="lejro_icon"
                ></img>
              </div>
              <div className="flex items-center gap-x-4 sm:gap-x-14 md:gap-x-16 lg:gap-x-20">
                <div className="flex justify-between xl:gap-x-10">
                  <Link className="flex items-center sm:gap-x-2 hover:cursor-pointer text-[10px] sm:text-[12px] md:text-[17px] lg:text-[20px] font-bold text-[#2c7fbf]">
                    Let's talk <span><FaArrowRightLong /></span>
                  </Link>
                </div>
                <Hamburger
                color='black'
                sidenavActive={sidenavActive}
                setSidenavActive={setSidenavActive}
              />
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Topnav