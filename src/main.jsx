import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss';
import  ProductsProvider from './contexts/ProductsContext.jsx';
import CartProvider from './contexts/CartContext.jsx';
import WishListProvider from './contexts/WishListContext.jsx';
import AuthProvider from './contexts/AuthContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <WishListProvider >
        <CartProvider>
            <ProductsProvider>
                <App />
            </ProductsProvider>
        </CartProvider>
      </WishListProvider>
    </AuthProvider>
  </React.StrictMode>,
)

