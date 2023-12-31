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

    const incrementCart = (id) => {
      const cartItem = cart.find((item) => item.id === id);
      if( cartItem) {
        const updatedCart = [...cart].map((item) => {
          if( item.id === id) {
            return {...item, quantity : cartItem.quantity + 1}
          } else{
            return item;
          }
        })
        setCart(updatedCart)
      } else {
        setCart(cartItem)
      }
    }

    const decreaseCart = (id) => {
      const cartItem = cart.find((item) => item.id === id );
      if( cartItem) {
        const updatedCart = [...cart].map((item) => {
          if( item.id === id ) {
            return {...item, quantity: cartItem.quantity === 0 ? 0 : cartItem.quantity - 1 }
          } else {
            return item;
          }
        })
        setCart(updatedCart)
      } else {
        setCart(cartItem);
      }
    }
 

  return (
    <CartContext.Provider value={{ 
      addToCart,
      cart,
      deleteCartItem,
      incrementCart,
      decreaseCart,
    }}>
      { children }
    </CartContext.Provider>
  )
}

export default CartProvider