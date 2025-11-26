import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'
import { FaArrowRight } from 'react-icons/fa';

const MainBanner = () => {
    return (
        <div className='relative'>
            <img src={assets.main_banner_bg} alt="banner" className='hidden md:block' />
            <img src={assets.main_banner_bg_sm} alt="banner" className='md:hidden' />
            <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-leftmax-w-72 md:max-w-80 lg:max-w-105 leading-tight lg-leading-15'>Freshness You Can Trust, Savings You will Love!</h1>

                <div className='flex items-center mt-6 font-medium'>

                    <Link
                        to="/products"
                        className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'
                    >
                        Shop now
                        <FaArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1 md:hidden" />
                    </Link>

                    <Link
                        to="/products"
                        className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer'
                    >
                        Explore deals
                        <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                </div>

            </div>
        </div>
    )
}

export default MainBanner;