import './CartItem.scss';
import { CartContext } from '../../contexts/CartContext';
import { useContext } from 'react';
import { BsCartX } from "react-icons/bs";
import { Button } from '../index';
import { RiDeleteBin7Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


const CartItem = () => {
    const { cart, deleteCartItem } = useContext( CartContext );
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
                    <div className='vc-btn'>
                            <Button label="View Cart" type='button' className="btn-primary btn-secondary" />
                    </div>
                    </Link>
                    <div>
                        <Button label="Checkout" type='button' className="btn-primary btn-secondary" />
                    </div>
                </div>
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