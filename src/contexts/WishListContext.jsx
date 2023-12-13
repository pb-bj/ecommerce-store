import { createContext, useState } from "react";

export const WishListContext = createContext();


const WishListProvider = ({ children }) => {
    const [ wishList, setWishList ] = useState([]);
    
    const addToWishList = (id, cart, wishList) => {     
       const updatedItem = cart.find((item) => item.id === id);
        if( !updatedItem ) return alert('Item didnt found');

        // existed item in wishlist
        const existingItem = wishList.some((item) => item.id === id);
          if( existingItem) {
              return alert("Item already exist")
          }
           setWishList([...wishList, updatedItem]);
            
    }

    const removeWishList = (id) => {
      const updatedItem = wishList.filter((item) => item.id !== id);
        setWishList(updatedItem);
    }
  return (
    <WishListContext.Provider value={{ addToWishList, wishList, removeWishList }}>
        { children }
    </WishListContext.Provider>
  )
}

export default WishListProvider;