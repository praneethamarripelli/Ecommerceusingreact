import { useEffect } from 'react';
import React,{useState, UseEffect} from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    const [menu, setMenu] = useState(()=>{
      const storedMenu = localStorage.getItem('activeMenu');
      return storedMenu || 'shop';
    });

   const handlerMenuClick = (menuItem) => {
    setMenu(menuItem);
   }

   const handleCartClick = () => {
     setMenu('');
   };

   useEffect(() => {
    localStorage.setItem('activeMenu',menu);
   }, [menu]);

  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={logo} alt=""/>
      </div>
      <ul className='nav-menu'>
      <li onClick={() => handlerMenuClick("shop")}>
        <Link style = {{textDecoration:'none'}} to='/'>shop</Link>
        {menu === "shop" ? <hr/> : null}
         </li>
      <li onClick={() => handlerMenuClick("mens")}>
      <Link style = {{textDecoration:'none'}} to='/mens'>men</Link>
      {menu === "mens" ? <hr/> : null}
      </li>
      <li onClick={() => handlerMenuClick("womens")}>
      <Link style = {{textDecoration:'none'}} to='/womens'>women</Link>
      {menu === "womens" ? <hr/> : null}
      </li>
      <li onClick={() => handlerMenuClick("kids")}>
      <Link style = {{textDecoration:'none'}} to='/kids'>kids</Link>
      {menu === "kids" ? <hr/> : null}</li>
      </ul>
      <div className="nav-login-cart">
      <Link to='/login' onClick={handleCartClick}><button>login</button></Link>
    <Link to='/cart' onClick={handleCartClick}><img src={cart_icon} alt=""></img></Link>
    <div className="nav-cart-count">0</div>

      </div>
    </div>
  )
}

export default Navbar
