import MainBanner from '../components/MainBanner'
import Categories from '../components/Categories'
import BestSeller from '../components/BestSeller'
import BottomBanner from '../components/BottomBanner'

const Home = () => {
  return (
    <div className='mt-25 px-3 lg:px-20'>
    <MainBanner/>
    <Categories/>
    <BestSeller/>
    <BottomBanner/>
    </div>
  )
}

export default Home