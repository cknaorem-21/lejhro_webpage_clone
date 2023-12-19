import React from 'react'
import logo from "../assets/lejhro_icon.png"

const Navbar = () => {
  return (
    <>
        {/* Navbar div */}
      <div className="flex justify-center items-center bg-[#d6932c] text-white h-[20vh]">
        <div className="flex w-[75%]">
          <div className="flex justify-between w-full h-fit">
            <div>
              <img className="w-[13.5rem]" src={logo} alt="lejro_icon"></img>
            </div>
            <nav className="flex items-center">
              <div className="flex justify-between gap-x-10">
                <div>Innovations</div>
                <div>Business Services</div>
                <div>Financial Services</div>
                <div>Bootcamp</div>
              </div>
              
            </nav>
          </div>            
        </div>
      </div>
    </>
  )
}

export default Navbar