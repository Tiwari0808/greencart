import React from 'react'
import { assets } from '../assets/assets'

const MainBanner = () => {
  return (
    <div className='lg:px-24 px-2 mt-5 lg:mt-10'>
        <img src={assets.main_banner_bg} alt="banner" className='hidden md:block' />
        <img src={assets.main_banner_bg_sm} alt="banner" className='md:hidden' />
    </div>
  )
}

export default MainBanner