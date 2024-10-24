import React from 'react'

const ThinAndThickTitle = ({ thin, thick}) => {
  return (
    <div className='flex items-center gap-4'>
        <p className="text-5xl">{thin}</p>
        <p className="text-5xl font-extrabold">{thick}</p>
    </div>
  )
}

export default ThinAndThickTitle