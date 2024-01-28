import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const WishListContext = createContext();

const WishListProvider = ({ children }) => {
    const [ wishList, setWishList ] = useState([]);
    
    const addToWishList = (id, cart, wishList) => {     
       const updatedItem = cart.find((item) => item.id === id); 
        if( !updatedItem ) return alert('Item didnt found');

        // existed item in wishlist
        const existingItem = wishList.some((item) => item.id === id);
          if( existingItem) return toast.info('Product already exist')
           setWishList([...wishList, updatedItem]);
          toast.success('Added to wishlist');
            
    }

    const removeWishList = (id) => {
      const updatedItem = wishList.filter((item) => item.id !== id);
      // alert(`Item was removes`)
        setWishList(updatedItem);
        toast.error('Removed from wishlist')
    }
  return (
    <WishListContext.Provider value={{ addToWishList, wishList, removeWishList }}>
        { children }
    </WishListContext.Provider>
  )
}

export default WishListProvider;