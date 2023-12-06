import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
const [cart, setCart ] = useState([]);

  const addToCart = (id, product) => {
    const newItem = {...product, quantity: 1};
    console.log(newItem);

    const existingItem = [...cart].find((item) => item.id === id );
        if( existingItem ) {
            const cartItem = [...cart].map((item) => {
                if( item.id === id ) {
                    const updatedItem = {...item, quantity : existingItem.quantity + 1};
                        return updatedItem;
                } else {
                    return item;
                }
            })
            setCart(cartItem);
            console.log(cartItem);
        }  else {
            setCart([...cart, newItem] )
        }
}

  const deleteCartItem = (id) => {
    setCart((prevItem) => prevItem.filter(item => item.id !== id ));
  }

  return (
    <CartContext.Provider value={{ addToCart, cart, deleteCartItem }}>{ children}</CartContext.Provider>
  )
}

export default CartProvider