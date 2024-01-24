import './Slidebar.scss';
import { IoMdClose } from "react-icons/io";
import {  CartItem } from '../index';

const Slidebar = ({ setShowSidebar} ) => {
  return (
    <div className='slidebar'>
            <div className='heading'>
                <div className='sidebar-header'>
                    Shopping Cart
                </div>
                <div className='sidebarBtn'>
                    <IoMdClose onClick={() => setShowSidebar(false)} /> 
                </div>        
            </div>
            <div>
                <CartItem  setShowSidebar={setShowSidebar} />
            </div>
            
    </div>
  )
}

export default Slidebar