import { createContext, useContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProductsContext } from "./ProductsContext";

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {
  const [ wishList, setWishList ] = useState([]);
  const { products } = useContext(ProductsContext);
    
 // add functionality 
  const addToWishList = (id) => {
    // checking for the wishlist items in cart
    const productInWishlist = products.find((item) => item.id === id);
      if(!productInWishlist) return toast.error('Product not found');

       // checking for exisiting item in wishlist 
    const isProductInWishlist = wishList.some((item) => item.id === id )
      if( isProductInWishlist) return toast.info('Product already exist in wishlist');
        setWishList([...wishList, productInWishlist]);
          toast.success('Added to Wishlist');
  }

  // remove functionality
    const removeWishList = (id) => {
      setWishList((prevWishList) => prevWishList.filter((item) => item.id !== id));
        toast.error('Removed from wishlist');
    }
  return (
    <WishListContext.Provider value={{ addToWishList, wishList, removeWishList }}>
        { children }
    </WishListContext.Provider>
  )
}

export default WishListProvider;