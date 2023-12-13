import './Header.scss';
import { IoMdMenu } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
// import { MdOutlineSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MobileNavbar, Slidebar } from './../index'
import { useState, useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';
import { WishListContext } from '../../contexts/WishListContext';
const Header = () => {
  const [ showSidebar, setShowSidebar ] = useState(false);
  const [ menuOpen, setMenuOpen ] = useState(false);
  const { cart } = useContext(CartContext);
  const { wishList } = useContext(WishListContext);

  const countCart = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0)

  const countWishList = wishList.reduce((count) => count + 1,0 );

  console.log(wishList)
  return (
    <header className='header'>
      <nav className='nav-menu'>
        {/* hamburger menu */}
          <div className='hamBurger-menu' onClick={() => setMenuOpen(!menuOpen)} >
            { menuOpen ? < IoMdClose className='menu'/> : <IoMdMenu className='menu'/> } 
          </div>
          { menuOpen && <MobileNavbar />}

          {/* main-menu  */}
          {/* logo */}
          <div className='logo'>
            <Link to="/" className='logo-title' style={{ color: '#FFF'}}>Jhigu Store</Link>
          </div>

          {/* search-box */}
          <div className='searchBox-Wrapper'>
          <div className='searchBox'>
            <input 
              type="text"
              placeholder='Search for products'
              autoComplete='off' 
              />
            {/* <MdOutlineSearch className='searchIcon' /> */}
          </div>
          </div>

          {/* login-register-details */}
          <div className='login-register'>Login/Register</div>

          {/* whislist-icons */}
          <div className='whislistIcon'>
            <Link to="/wishlist" style={{ color: '#FFF'}}>
            <FaRegHeart  className='icon'/>
            </Link>
              <span className='quantity'>{countWishList}</span>

          </div>

        {/* cart */}
          <div className='cartIcon'>
            <IoBagOutline 
              onClick={() => setShowSidebar(!showSidebar)}
              className='icon' />
              <span className='quantity'>{countCart}</span>
          </div>
      </nav>
          {/* <div className='bottom-nav-menu'>
            <div>
              <Link to="/category">Men Fashion</Link>
            </div>
            <div>
              <Link to="/category">Women Fashion</Link>
            </div>
          </div> */}
              { showSidebar && <Slidebar setShowSidebar={setShowSidebar} /> }
      {/* <Slidebar /> */}
    </header>
  )
}

export default Header