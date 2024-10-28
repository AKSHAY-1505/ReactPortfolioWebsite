import React from 'react'
import DownloadIcon from '../assets/download.svg'

function DownloadButton() {
  return (
    <button className="px-5 py-4 flex items-center justify-center bg-black gap-2 rounded hover:bg-zinc-800 hover:cursor-pointer">
        <p className="text-xl text-white leading-6 font-semibold">Resume</p>
        <img className="w-5 h-5"src={DownloadIcon} />
    </button>
  )
}

export default DownloadButton