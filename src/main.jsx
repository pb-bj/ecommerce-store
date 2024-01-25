import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss';
import  ProductsProvider from './contexts/ProductsContext.jsx';
import CartProvider from './contexts/CartContext.jsx';
import WishListProvider from './contexts/WishListContext.jsx';

// import { ToastContainer } from 'react-toastify';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <ToastContainer > */}
      <WishListProvider >
        <CartProvider>
            <ProductsProvider>
                <App />
            </ProductsProvider>
        </CartProvider>
      </WishListProvider>
      {/* </ToastContainer> */}
  </React.StrictMode>,
)

