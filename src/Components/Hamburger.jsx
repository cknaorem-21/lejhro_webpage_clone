import React from 'react'

const Hamburger = ({sidenavActive, setSidenavActive, color}) => {
  function handleClick() {
      setSidenavActive(true);
  }

  return (
    <>
        {/* Hamburger */}
        <div onClick={handleClick} className={`flex justify-center items-center bg-${color} h-[40px] w-[40px] rounded-full`}>
              <div className="w-[80%] h-[80%] flex flex-col justify-evenly items-end mr-2">
                <div className={`w-[70%] h-[2px] ${color!='white'? 'bg-white' : 'bg-black'}`}></div>
                <div className={`w-[35%] h-[2px] ${color!='white'? 'bg-white' : 'bg-black'}`}></div>
                <div className={`w-[70%] h-[2px] ${color!='white'? 'bg-white' : 'bg-black'}`}></div>
              </div>
        </div>
    </>
  )
}

export default Hamburger