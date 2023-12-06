import './CartItem.scss';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import { BsCartX } from "react-icons/bs";
import { Button } from '../index';

const CartItem = () => {
    const { cart } = useContext( CartContext );
  return (
    <>
    { cart.length > 0 ? (
        <>
        { cart.map((item) => {
            const {id, title, image, price } = item;
            return (
                <div key={id} className='cart-item'>
                    <div className='cart-image'>
                        <img src={ image } width={40} alt="" />
                    </div>
                    <div className='cart-content'>
                        <div className='cart-title'>{title}</div>
                        <div>{price}</div>
                    </div>
                </div>
            )
        })}
    </>
    ) : 
     <div className='empty-cart'>
                <div className='empty-cart-icon'><BsCartX />
                </div>
                <span style={{ fontSize : '15px', marginBottom: '15px', fontWeight: '600', color:'#000' }}>No products in cart</span>
                <div>
                    <Button label="RETURN TO SHOP" className="btn-primary" />
                </div>
            </div>
    }
        
    </>
  )
}

export default CartItem