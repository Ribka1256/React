import { NavLink } from 'react-router-dom';
import './header.css'
import { useState , useEffect} from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

function Header({cart }) {
const navi = useNavigate()
const [searchParam] = useSearchParams()
    let totalQuantity = 0;

    cart.forEach((cartItem) =>{
        totalQuantity += cartItem.quantity
    })
    const searchHome =  (event) =>{
      setSearch(event.target.value)

    }
     const searchProducts = () => {
   
    navi(`/?search=${search}`)
  };
  const searchP = searchParam.get('search')
const [search, setSearch] = useState(searchP || '');

  return (
    <>
      <div className="header">
        <div className="left-section">
          <NavLink to="/" className="header-link">
            <img className="logo" src="images/logo-white.png" />
            <img className="mobile-logo" src="images/mobile-logo-white.png" />
          </NavLink>
        </div>

        <div className="middle-section">
          <input className="search-bar" type="text" placeholder="Search" onChange={searchHome} value={search}/>

          <button className="search-button">
            <img className="search-icon" src="images/icons/search-icon.png" 
            onClick={searchProducts}/>
          </button>
        </div>

        <div className="right-section">
          <NavLink className="orders-link header-link" to="/orders">
            <span className="orders-text">Orders</span>
          </NavLink>

          <NavLink className="cart-link header-link" to="/checkout">
            <img className="cart-icon" src="images/icons/cart-icon.png" />
            <div className="cart-quantity">{totalQuantity}</div>
            <div className="cart-text">Cart</div>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Header;
