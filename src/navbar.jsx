import React from 'react'
import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";



// src/components/Navbar.js
import  { useState ,useContext} from 'react';
import Addchart from './chart';
import { IoBagHandle } from "react-icons/io5";

import './App.css'
import AddChartPage from './chart';
import Footer from './footer';
import { Outlet } from 'react-router-dom';
import { GiConverseShoe } from "react-icons/gi";
import Usercontext from './context';

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu)
     

    };

      const {cartItems}=useContext(Usercontext)
    
const [user,setuser]=React.useState([])
const [para,setpara]=React.useState([])
const [nav,setnav]=useState("")
    return (
         <>
         <Usercontext.Provider value={{user,setuser,para,setpara}}>
            {/* <nav class="navbar navbar-dark bg-dark">
  <div className="navbar" >
            <div className="navbar-container">
            <GiConverseShoe className='nlog' />
               <div className="h1">
               <h2 className="logo">TrendWoods</h2>
               </div>
               <button type='toggle' className="menu-icon" onClick={toggleMenu}>
            
            <FiAlignJustify/>
            
            </button>
             
            </div>

               <div className={showMenu ?  'menu-show' : 'menu-hide' } >
              
            
             <ul className={!nav?'nav-links display=none':'nav-links display=block'} >
                    <li id='box'>
   <Link to="/" >Home</Link>
                    </li>
                    <li  id='box'>
                        <Link to="/about">About</Link>
                    </li>
                    <li id='box'>
                        <Link to="/services">Product</Link>
                    </li >
                    <li id='box'>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li id='box'>
                        <Link to="/add">
                        <IoBagHandle  className='bag'/>

                        </Link>
                    </li>
   </ul>
             </div>
                
           
        </div>
</nav> */}
        <div className="navbar" >
            <div className="navbar-container">
            <GiConverseShoe className='nlog' />
               <div className="h1">
               <h2 className="logo">TrendWoods</h2>
               </div>
               <button type='toggle' className="menu-icon" onClick={toggleMenu}>
            
            <FiAlignJustify/>
            
            </button>
             
            </div>

               <div className={showMenu ?  'menu-show' : 'menu-hide' } >
              
            
             <ul className={!nav?'nav-links display=none':'nav-links display=block'} >
                    <li id='box'>
   <Link to="/" >Home</Link>
                    </li>
                    <li  id='box'>
                        <Link to="/about">About</Link>
                    </li>
                    <li id='box'>
                        <Link to="/services">Product</Link>
                    </li >
                    <li id='box'>
                        <Link to="/contact">Contact</Link>
                    </li>

                    <li id='box'>
                        <Link to="/cart">
                        <IoBagHandle   className='bag' />
 {cartItems?.length > 0 && (
          <span className="cart-notification">{cartItems.length}</span>
          
        )}
                        </Link>
                    </li>
   </ul>
             </div>
                
           
        </div>
      
        <Outlet/>
   <Footer/>
   </Usercontext.Provider>
       </>
    );
};

export default Navbar;

