import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const currency = '₹'
    const [user, setUser] = useState(true);
    const [isSeller, setIsSeller] = useState(false);
    const navigate  = useNavigate();
    const[products,setProducts] = useState([]);

    const getProductsData = async()=>{
      setProducts(dummyProducts)
    }

    useEffect(() => {
      getProductsData()
    }, [products])
    

    return (
        <AppContext.Provider value={{ user, setUser, isSeller, setIsSeller,navigate,products,currency }}>
            {children}
        </AppContext.Provider>
    )
};

export const useAppContext = () => {
    return useContext(AppContext);
};