import React from 'react'
import Logo from '../components/logo'
import DownloadButton from '../components/download_button'

const Header = () => {
  return (
    <div class="py-6 flex items-center justify-between">
        <Logo />
        <DownloadButton />
    </div>
  )
}

export default Header