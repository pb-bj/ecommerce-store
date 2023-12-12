import { createContext, useState } from "react";

export const WishListContext = createContext();


const WishListProvider = ({ children }) => {
    const [ wishList, setWishList ] = useState([]);
    
    const addToWishList = (id, cart) => {
      const updatedItem = [...cart].find((item) => item.id === id);
         setWishList([...wishList, updatedItem]);
    }

    const removeWishList = (id) => {
      const updatedItem = wishList.filter((item) => item.id !== id);
        setWishList(updatedItem);
    }
  return (
    <WishListContext.Provider value={{ addToWishList, wishList,removeWishList }}>
        { children }
    </WishListContext.Provider>
  )
}

export default WishListProvider;