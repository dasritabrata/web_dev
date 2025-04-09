import React from 'react'

const Header = () => {
  return (
    <div className='w-screen p-6 px-3 flex justify-between bg-slate-950 mb-10' >
      <div className='w-64'><img src="https://www.ieee-jaduniv.in/assets/RAW%20Logo-BTQ6wDgW.png" alt="" /></div>
      <div className='flex gap-4 items-center'> 
        <a className='hover:text-blue-800 text-white ' href=""> Home </a>
      <a className='hover:text-blue-800 text-white ' href=""> About Us </a>
      <a className='hover:text-blue-800  text-white' href=""> Contact Us </a>
      </div>
    </div>
  )
}

export default Header
