import './Home.scss';
import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { Products } from '../../components';
import { Link } from 'react-router-dom';

const Home = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className='home'>
        <div className='main-home'>
          <Link to="/category">Men Fashion</Link>
          <Link to="/category">Women Fashion</Link>
        </div>
       <Products products = {products} />
    </div>
  )
}

export default Home