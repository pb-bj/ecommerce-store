import './CartItem.scss';
import { useContext } from 'react';
import { BsCartX } from "react-icons/bs";
import { RiDeleteBin7Line } from "react-icons/ri";
import { Button } from '../index';
import { CartContext } from '../../contexts/CartContext';
import { Link } from 'react-router-dom';

const CartItem = ({ setShowSidebar }) => {
    const { cart, deleteCartItem } = useContext( CartContext );
  return (
    <>
    { cart.length > 0 ? (
        <>
        { cart.map((item) => {
            const {id, title, image, price, quantity } = item;
            return (
                <div key={id} className='cart-item'>
                    <div className='cart-image'>
                        <img src={ image } width={40} alt="" />
                    </div>
                    <div className='cart-content'>
                        <div className='cart-title'>{title}</div>
                        <div className='flex-group'>
                        <div className='cart-price'>${price}</div>
                        <div className='cart-quantity'> X {quantity}</div>
                    </div>
                        </div>
                    <div title='remove'>
                        <RiDeleteBin7Line 
                            onClick={() => deleteCartItem(id) }
                            style={{ color: '#000', fontSize : '22px'}}/>
                    </div>
                </div>
            )
        })}

                <div className='cart-btn'>
                    <Link to="/cart">
                    <div className='vc-btn' onClick={() => setShowSidebar(false)}>
                            <Button label="View Cart" type='button' className="btn-primary btn-secondary" />
                    </div>
                    </Link>
                </div>
    </>
    ) : 
     <div className='empty-cart'>
                <div className='empty-cart-icon'><BsCartX />
                </div>
                <span style={{ fontSize : '15px', marginBottom: '15px', fontWeight: '600', color:'#000' }}>No products in cart</span>
                <div>
                    <Link to='/'>
                    <Button label="RETURN TO SHOP" className="btn-primary" onClick={() => setShowSidebar(false)} />
                    </Link>
                </div>
            </div>
    }
        
    </>
  )
}

export default CartItem