import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { FaShoppingCart } from "react-icons/fa";
import { CiSearch } from 'react-icons/ci';
import { RiMenu3Line } from 'react-icons/ri';
import { useAppContext } from '../context/AppContext';
import { IoPersonCircle } from "react-icons/io5";




const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const {user,setUser,navigate,cartItems,setShowUserLogin,showUserLogin} = useAppContext();
    const logout = ()=>{
        setUser(null);
        navigate('/')
    }
    return (
        <nav className="flex fixed top-0 left-0 w-full items-center justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white z-50 transition-all">

            <NavLink onClick={()=>{
                navigate('/');
            }}>
                <img src={assets.logo} width="157" height="40" viewBox="0 0 157 40" alt='logo' fill="none" />
            </NavLink>
            

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-8">
                <NavLink to={'/'} href="#">Home</NavLink>
                <NavLink to={'/products'} href="#">All Product</NavLink >
                <NavLink to={'/contact'} href="#">Contact</NavLink >
                

                <div className="hidden lg:flex items-center text-sm gap-2 border border-gray-300 px-3 rounded-full">
                    <input className="py-1.5 w-full bg-transparent outline-none placeholder-gray-500" type="text" placeholder="Search products" />
                    <CiSearch width="16" height="16"/>
                </div>

                <div onClick={()=>navigate('/cart')} className="relative cursor-pointer">
                    <FaShoppingCart width="18" height="18"/>
                    {cartItems && <button className="absolute -top-2 -right-3 text-xs text-white bg-primary w-[18px] h-[18px] rounded-full">{Object.values(cartItems).reduce((acc, qty) => acc + qty, 0)}</button>}
                </div>

                {!user ? (<button onClick={()=>setShowUserLogin(true)} className="cursor-pointer px-8 py-2 bg-primary hover:bg-primary-dull transition text-white rounded-full">
                    Login
                </button>) :(
                    <div className='relative group'>
                        <IoPersonCircle className='h-7 w-7 cursor-pointer' />
                        <ul className='hidden group-hover:block absolute top-6 text-sm right-[0] bg-white shadow border border-gray-200 z-20 w-[120px] p-2'>
                            <li onClick={()=>navigate('/my-orders')} className='hover:bg-primary/20 cursor-pointer'>My Orders</li>
                            <li onClick={logout} className='hover:bg-primary/20 cursor-pointer'>Logout</li>
                        </ul>
                    </div>
                )}
            </div>

            <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden cursor-pointer">
                {/* Menu Icon SVG */}
                <RiMenu3Line className='w-7 h-6'/>
            </button>

            {/* Mobile Menu */}
            <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                <NavLink to={'/'} className="block" onClick={()=>setOpen(false)}>Home</NavLink>
                <NavLink to={'/products'} className="block" onClick={()=>setOpen(false)}>All Products</NavLink>
                {user && <NavLink to={'/'} className="block" onClick={()=>setOpen(false)}>My orders</NavLink>}
                <NavLink to={'/'} className="block" onClick={()=>setOpen(false)}>Contact</NavLink>
               {!user ? ( <button onClick={()=>setShowUserLogin(true)} className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                    Login
                </button>) : ( <button className="cursor-pointer px-6 py-2 mt-2 bg-primary hover:bg-primary-dull transition text-white rounded-full text-sm">
                    Logout
                </button>)}
            </div>

        </nav>
    )
}

export default Navbar;