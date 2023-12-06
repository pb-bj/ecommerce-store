import './Slidebar.scss';
import { IoMdClose } from "react-icons/io";
import {  CartItem } from '../index';

const Slidebar = ({ setShowSidebar} ) => {
  return (
    <div className='slidebar'>
        {/* <div className='content'> */}
            <div className='heading'>
                <div className='sidebar-header'>
                    Shopping Cart
                </div>
                <div className='sidebarBtn'>
                    <IoMdClose onClick={() => setShowSidebar(false)} /> 
                </div>        
            </div>

           

            <div>
                <CartItem />
            </div>
        {/* </div> */}

    </div>
  )
}

export default Slidebar