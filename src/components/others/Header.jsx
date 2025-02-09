import React, {useState} from 'react'
import { setLocalStorage } from '../../utils/localStorage'


const Header = (props) => {

  const logOutUser = ()=>{
    localStorage.setItem('loggedInUser','')
    props.changeUser('')
  }



  return (
    <div className="w-full bg-gray-800 text-white py-4 px-6 flex items-center justify-between shadow-md rounded-lg">
    {/* Left - User Greeting */}
    <h1 className="text-lg sm:text-xl md:text-2xl font-medium">
      Hello 👋 <br />
      <span className="text-2xl sm:text-3xl font-semibold text-emerald-400">
        Manish
      </span>
    </h1>

    {/* Right - Logout Button */}
    <button
      className="bg-red-600 hover:bg-red-500 transition-all duration-300 text-white text-sm sm:text-base font-medium px-4 sm:px-6 py-2 rounded-md shadow-md"
    >
      Log Out
    </button>
  </div>
  )
}

export default Header