import { Link } from 'react-router-dom';
import './Products.scss'
import { Button } from './../index';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

const Products = ({ products }) => {
  const maxLength = 25;
  const ellipsis = '....';
  
  const { addToCart } = useContext(CartContext);
  return (
    <div className='product-items'>
        { products.map((product) => {
            const { id, title, image, price } = product;
            
            return (
              <div key={id} className='main-product'>
                  <Link to={`/product/${id}`}>

                <div className="product-top">
                    <div className='product-image'>
                      <img src={image} alt="" />
                    </div>
                </div>
                {/* product-bottom */}
                </Link>
                <div className='product-bottom'>
                    <div className='product-title'>
                      { title.length <= maxLength?  title : title.substring(0, maxLength - ellipsis.length) + ellipsis  }
                    </div>

                      <div className='bottom-product-content'>
                        <div className='product-priceTag'>$ {price}</div>
                            <div className='product-btn' title='add to cart'>
                              <Button 
                                label="+" 
                                className="btn-primary" 
                                type='button'
                                onClick={ () => addToCart(id, product) } 
                              /> 
                            </div>
                      </div>
                </div>

              </div>
            )
        })}
    </div>
  )
}

export default Products