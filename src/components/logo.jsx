import React from 'react'
import MyIcon from '../assets/my_icon.svg'

const Logo = () => {
  return (
    <div class="flex items-center justify-center">
        <img src={MyIcon} class="w-10 h-10" />
        <p class="text-xl leading-6 font-bold">Akshay</p>
    </div>
  )
}

export default Logo