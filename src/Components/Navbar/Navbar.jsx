import React,{useContext, useState ,useRef} from 'react'
import "./Navbar.css"
import cart_icon from '../Assests/Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import navbar_dropdown from '../Assests/Assets/navbar_dropdown.png'
const Navbar = () => {
   const [menu , setMenu] = useState("Shopex")
   const {getTotalCartItems} = useContext(ShopContext);
   const menuRef = useRef();//This is for making website responsive..
   //In React, useRef is a hook that allows functional components to hold a mutable reference to a DOM element or any mutable value that persists across renders. The primary use case for useRef is to interact with the DOM or to persist values across renders without causing re-renders.
   const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible')
    e.target.classList.toggle('open')
   }
    return (
        <>
    <div className='navbar'>
        <div className='nav-logo'>
            <p>Growing seeds</p>
        </div>
        <img className='nav-dropdown' onClick = {dropdown_toggle} src={navbar_dropdown} alt="" />
      <ul ref = {menuRef} className='nav-menu'>
        <li onClick= {()=>{setMenu("Shopex")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="Shopex"?<hr/>:<></>}</li>
        <li onClick= {()=>{setMenu("Mens")}}><Link style={{textDecoration:'none'}} to='/Mens'>Vegetables</Link>{menu==="Mens"?<hr/>:<></>}</li>
        <li onClick= {()=>{setMenu("Womens")}}><Link style={{textDecoration:'none'}} to='/Womens'>Fruits</Link>{menu==="Womens"?<hr/>:<></>}</li>
        <li onClick= {()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}} to='/kids'>Organic Product</Link>{menu==="kids"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt="/" /></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
    
    </>
  )
}

export default Navbar
