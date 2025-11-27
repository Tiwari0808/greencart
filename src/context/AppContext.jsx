import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const currency = '₹';
  const [user, setUser] = useState(true);
  const [isSeller, setIsSeller] = useState(false);
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState({});

  //Add to cart items

  const addToCart = (item_id) => {
    let cartData = structuredClone(cartItems);
    if (cartData[item_id]) {
      cartData[item_id] += 1;
    } else {
      cartData[item_id] = 1
    }
    toast.success('Added to Cart')
    setCartItems(cartData);
    
  }

  //Update cart
  const updateCart = (item_id, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[item_id] = quantity;
    toast.success('Cart updated');
    setCartItems(cartData);
    
  };

  //remove from cart
  const removeFromCart = (item_id) => {
    let cartData = structuredClone(cartItems);
    if (cartData[item_id]) {
      cartData[item_id] -= 1;
      if (cartData[item_id] === 0) {
        delete cartData[item_id];
      }
    }
    toast.success('Removed from Cart');
    setCartItems(cartData)
  }

  const getProductsData = async () => {
    setProducts(dummyProducts)
  }

  useEffect(() => {
    getProductsData()
  }, [])


  return (
    <AppContext.Provider value={{ user, setUser, isSeller, setIsSeller, navigate, products, currency, addToCart, cartItems, removeFromCart, updateCart }}>
      {children}
    </AppContext.Provider>
  )
};

export const useAppContext = () => {
  return useContext(AppContext);
};