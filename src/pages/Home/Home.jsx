import './Home.scss';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { Products } from '../../components';
import SwiperImage from './SwiperImage'; 

const Home = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className='home'>
        <div className='main-home'>
        <SwiperImage />
        </div>
       <Products products = {products} />
    </div>
  )
}

export default Home