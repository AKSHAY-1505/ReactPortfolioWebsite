import React from 'react'
import GitIcon from '../assets/git_icon.svg'

const SkillCard = () => {
  return (
    <div className='flex flex-col gap-8 items-center justify-center h-[186px] w-[186px] border-black border-2 rounded px-6 py-6 shadow-xl bg-white hover:invert'>
        <img src={GitIcon} className='h-14 w-14' />
        <p className='text-xl font-bold'>Git</p>
    </div>
  )
}

export default SkillCard