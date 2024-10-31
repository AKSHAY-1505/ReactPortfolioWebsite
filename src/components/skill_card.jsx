import React from 'react'

function SkillCard({ icon, text }) {
  return (
    <div className='flex flex-col gap-8 items-center justify-center h-[186px] w-[186px] border-black border-2 rounded px-6 py-6 bg-white rounded-xl hover:scale-110 duration-500'>
        <img src={icon} className='h-14 w-14' />
        <p className='text-xl font-bold'>{text}</p>
    </div>
  )
}

export default SkillCard