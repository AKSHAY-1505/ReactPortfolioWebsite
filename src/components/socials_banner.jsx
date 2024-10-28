import React from 'react'
import LinkedinIcon from '../assets/linkedin_icon.svg'
import GithubIcon from '../assets/github_icon.svg'


function SocialsBanner() {
  return (
    <div className="flex gap-8 py-1 items-center">
      <div className="flex items-center gap-2 text-xl font-bold h-14 w-34 p-4 border border-black rounded bg-white hover:invert hover:cursor-pointer">
        <img src={LinkedinIcon} className="h-5 w-5" />
        <p>LinkedIn</p>
      </div>
      <div className="flex items-center gap-2 text-xl font-bold h-14 w-34 p-4 border border-black rounded bg-white hover:invert hover:cursor-pointer">
        <img src={GithubIcon} className="h-5 w-5" />
        <p>GitHub</p>
      </div>
    </div>
  )
}

export default SocialsBanner