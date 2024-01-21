import './Home.scss';
import { useContext, useEffect } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { Login, Products } from '../../components';
import axios from 'axios';
 
const Home = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='home'>
        <div className='main-home'>
        </div>
       <Products products = {products} />
       <Login />
    </div>
  )
}

export default Home