import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss';
import  ProductsProvider from './contexts/ProductsContext.jsx';
import CartProvider from './contexts/CartContext.jsx';
import WishListProvider from './contexts/WishListContext.jsx';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <ProductsProvider>
        <WishListProvider >
          <CartProvider>
                  <App />
          </CartProvider>
        </WishListProvider>
        </ProductsProvider>
      <ToastContainer autoClose={1000} hideProgressBar={true}/>
  </React.StrictMode>,
)

