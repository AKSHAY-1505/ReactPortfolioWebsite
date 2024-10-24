import React from 'react'
import MyIcon from '../assets/my_icon.svg'

const Logo = ({ invert = false }) => {
  return (
    <div className={`flex items-center justify-center ${invert && 'invert'}`}>
        <img src={MyIcon} className="w-10 h-10" />
        <p className="text-xl leading-6 font-bold">Akshay</p>
    </div>
  )
}

export default Logo