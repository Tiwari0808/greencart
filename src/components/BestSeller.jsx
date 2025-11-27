import { useAppContext } from "../context/AppContext"
import ProductCard from "./ProductCard"

const BestSeller = () => {
    const { products } = useAppContext();
    return (
        <div>
            <p className='text-2xl md:text-3xl font-medium'>Best seller</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:grid-cols-7mt6
        gap-6'>
                {products.filter((product)=>product.inStock).slice(0,7).map((product,idx) => (
                    <div  className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'>
                        <ProductCard key={idx} product={product} />
                    </div>
                ))}

            </div>
        </div>
    )
}

export default BestSeller