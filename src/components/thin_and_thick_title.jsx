import React from 'react'

function ThinAndThickTitle({ thin, thick, invert = false}) {
  return (
    <div className='flex items-center gap-4'>
        <p className={`text-5xl ${invert && 'text-white'}`}>{thin}</p>
        <p className={`text-5xl font-extrabold ${invert && 'text-white'}`}>{thick}</p>
    </div>
  )
}

export default ThinAndThickTitle