import React from 'react'
import Logo from '../components/logo'
import DownloadButton from '../components/download_button'

const Header = () => {
  return (
    <header className="py-6 flex items-center justify-between">
        <Logo />
        <DownloadButton />
    </header>
  )
}

export default Header