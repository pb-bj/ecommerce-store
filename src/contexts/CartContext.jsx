import { createContext, useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // add to cart
  const addToCart = (id, product) => {
    const newItem = { ...product, quantity: 1 };
    // if( newItem) return alert('Added to cart');

    // for existing item in cart, increasing the quantity of the related product
    const existingItem = cart.find((item) => item.id === id);
    if (existingItem) {
      const updatedItems = cart.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item );
        // if( updatedItems) return alert(`Added to cart`);
      setCart(updatedItems);
    } else {
      setCart([...cart, newItem]);
    }
    toast.success('Added to cart');
  };

  // increase cart product
   const incrementCart = (id) => {
     const updatedItems = cart.map((item) => 
       item.id === id ? { ...item, quantity: item.quantity + 1 } : item );
     setCart(updatedItems);

  };

  // };

  // decrease cart product
  const decreaseCart = (id) => {
    const updatedItems = cart.map((item) => item.id === id ? 
    { ...item, quantity: item.quantity === 0 ? 0 : item.quantity - 1 } : item );
    setCart(updatedItems);
  };

  // delete product from cart
  const deleteCartItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast.error('Cart deleted')
  };

  return (
    <CartContext.Provider
      value={{
        addToCart,
        incrementCart,
        decreaseCart,
        deleteCartItem,
        cart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
