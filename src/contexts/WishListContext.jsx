import { createContext, useState } from "react";

export const WishListContext = createContext();


const WishListProvider = ({ children }) => {
    const [ wishList, setWishList ] = useState([]);
    
    const addToWishList = (id, cart) => {
      const updatedItem = [...cart].find((item) => item.id === id);
         setWishList([...wishList, updatedItem]);
    }
  return (
    <WishListContext.Provider value={{ addToWishList, wishList }}>
        { children }
    </WishListContext.Provider>
  )
}

export default WishListProvider;