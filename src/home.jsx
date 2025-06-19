import React from 'react'
// import img from './assets/happ.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Footer from './footer';
import img2 from './assets/img2.jpg'
import simg from '../download.jpg'
import simg2 from '../down1.jpg'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaStumbleuponCircle } from 'react-icons/fa';
import "./App.css"
function Home() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration in milliseconds
          offset: 50,     // Offset (in px) from the original trigger point
          easing: 'ease-in-out', // Easing function
          once:false,    // Whether animation should happen only once
        });
      }, []);
    
  return (
   <>

<div className="p-h">
       <div className='h-cen'>
     <div  data-aos="fade-up" id='fa'>
        BEST <span id='span'>COLLECTION</span>  SHOES 
        FOR YOU
        </div>
   </div>
<div className="post">
   
   <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-content" data-aos="zoom-in">
                    <h1>Step Into Style</h1>
                    <p>Discover the latest in shoes fashion for every occasion.</p>
                <Link to="/services">
                <button className="shop-now-btn" onClick={()=>{
                            window.location.href="https://render-iw08.onrender.com/services"
                        }}>Shop Now</button>
                </Link>
                </div>
            </section>

            {/* Featured Products Section */}
            <div className="featured-products">
                <h2>Featured Products</h2>
                <Link to="/services">
                <div className="products-container">
<div className="flex">
<div className="product-card" data-aos="zoom-in" >
                        <img src={simg} alt="Product 1" />
                        <h3>shoes</h3>
                        <p>$80</p>
                        <button className="buy-now-btn"onClick={()=>{
                            window.location.href="https://render-iw08.onrender.com3/services"
                        }}>Buy Now</button>
                    </div>
</div>
                  <div className="flex">
                  <div className="product-card"  data-aos="zoom-in">
                        <img src={simg2} alt="Product 2" />
                        <h3>Classic Loafers</h3>
                        <p>$120</p>
                        <button className="buy-now-btn">Buy Now</button>
                    </div>
                    </div>  
                   <div className="flex">
                   <div className="product-card" data-aos="zoom-in">
                        <img src={img2} alt="Product 3" />
                        <h3>Running Shoes</h3>
                        <p>$90</p>
                        <button className="buy-now-btn">Buy Now</button>
                    </div>

                   </div>
                   
                </div>
                </Link>
            </div>

            {/* Call-to-Action Section */}
            
        </div>
</div>
</div>
   </>
  )
}

export default Home
