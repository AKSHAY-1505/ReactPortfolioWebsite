import React from 'react'
import DownloadIcon from '../assets/download.svg'

const DownloadButton = () => {
  return (
    <button class="px-5 py-4 flex items-center justify-center bg-black gap-2 rounded">
        <p class="text-xl text-white leading-6 font-semibold">Resume</p>
        <img class="w-5 h-5"src={DownloadIcon} />
    </button>
  )
}

export default DownloadButton