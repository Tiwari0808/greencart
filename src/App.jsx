import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import Footer from './components/Footer'
import { useAppContext } from './context/AppContext'
import Login from './components/Login'
import AllProducts from './pages/AllProducts'

const App = () => {
  const { showUserLogin } = useAppContext();
  return (
    <>
      <Toaster />
      <Navbar />
      {showUserLogin && <Login />}
      <div className=''>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<AllProducts />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
