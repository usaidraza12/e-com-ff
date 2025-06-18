import React from "react";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import "./App.css"
function Footer() {
  return (
    <>
<footer className="footerO">
      <div className="socialO-icons">
        <a href="https://www.linkedin.com/in/usaid-malik-3396752a6/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="iconO" />
        </a>
        <a href="https://github.com/usaidraza12" target="_blank" rel="noopener noreferrer">
          <FaGithubSquare className="iconO" />
        </a>
      </div>

      <h2>Subscribe to Our Newsletter</h2>
      <p>Be the first to know about new arrivals and exclusive deals.</p>

      <form className="ctaO-form">
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Subscribe</button>
      </form>
    </footer>
    </>
    
  );
}

export default Footer;

// "use client"

// import { useState } from "react"
// import "./foo.css"

// function Footer() {
//   const [email, setEmail] = useState("")

//   const handleNewsletterSubmit = (e) => {
//     e.preventDefault()
//     if (email) {
//       alert("Thank you for subscribing!")
//       setEmail("")
//     }
//   }

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Main Footer Content */}
//         <div className="footer-content">
//           {/* Company Info */}
//           <div className="footer-section">
//             <div className="footer-logo">
//               <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path d="M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22" />
//                 <path d="M2 18v3c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-3" />
//                 <path d="M8 21v-3" />
//                 <path d="M12 21v-3" />
//               </svg>
//               <span className="logo-text">ShoeMart</span>
//             </div>
//             <p className="company-description">
//               Your trusted destination for premium quality shoes. We bring you the latest trends and timeless classics
//               with unmatched comfort and style.
//             </p>
//             <div className="social-links">
//               <a href="#" className="social-link" aria-label="Facebook">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                 </svg>
//               </a>
//               <a href="#" className="social-link" aria-label="Instagram">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.197-2.25-1.197-3.654 0-1.404.449-2.706 1.197-3.654.749-.948 1.9-1.559 3.197-1.559s2.448.611 3.197 1.559c.748.948 1.197 2.25 1.197 3.654 0 1.404-.449 2.706-1.197 3.654-.749.948-1.9 1.559-3.197 1.559zm7.718 0c-1.297 0-2.448-.611-3.197-1.559-.748-.948-1.197-2.25-1.197-3.654 0-1.404.449-2.706 1.197-3.654.749-.948 1.9-1.559 3.197-1.559s2.448.611 3.197 1.559c.748.948 1.197 2.25 1.197 3.654 0 1.404-.449 2.706-1.197 3.654-.749.948-1.9 1.559-3.197 1.559z" />
//                 </svg>
//               </a>
//               <a href="#" className="social-link" aria-label="Twitter">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
//                 </svg>
//               </a>
//               <a href="#" className="social-link" aria-label="YouTube">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div className="footer-section">
//             <h3 className="footer-title">Quick Links</h3>
//             <ul className="footer-links">
//               <li>
//                 <a href="/">Home</a>
//               </li>
//               <li>
//                 <a href="/products">All Products</a>
//               </li>
//               <li>
//                 <a href="/men">Men's Shoes</a>
//               </li>
//               <li>
//                 <a href="/women">Women's Shoes</a>
//               </li>
//               <li>
//                 <a href="/kids">Kids' Shoes</a>
//               </li>
//               <li>
//                 <a href="/sale">Sale</a>
//               </li>
//               <li>
//                 <a href="/new-arrivals">New Arrivals</a>
//               </li>
//             </ul>
//           </div>

//           {/* Customer Service */}
//           <div className="footer-section">
//             <h3 className="footer-title">Customer Service</h3>
//             <ul className="footer-links">
//               <li>
//                 <a href="/contact">Contact Us</a>
//               </li>
//               <li>
//                 <a href="/shipping">Shipping Info</a>
//               </li>
//               <li>
//                 <a href="/returns">Returns & Exchanges</a>
//               </li>
//               <li>
//                 <a href="/size-guide">Size Guide</a>
//               </li>
//               <li>
//                 <a href="/faq">FAQ</a>
//               </li>
//               <li>
//                 <a href="/track-order">Track Your Order</a>
//               </li>
//               <li>
//                 <a href="/support">Support Center</a>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter & Contact */}
//           <div className="footer-section">
//             <h3 className="footer-title">Stay Connected</h3>
//             <p className="newsletter-text">Subscribe to get special offers, free giveaways, and updates.</p>

//             <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
//               <div className="input-group">
//                 <input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="newsletter-input"
//                   required
//                 />
//                 <button type="submit" className="newsletter-btn">
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                     <path d="M5 12h14M12 5l7 7-7 7" />
//                   </svg>
//                 </button>
//               </div>
//             </form>

//             <div className="contact-info">
//               <div className="contact-item">
//                 <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
//                 </svg>
//                 <span>+92 300 1234567</span>
//               </div>
//               <div className="contact-item">
//                 <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//                   <polyline points="22,6 12,13 2,6" />
//                 </svg>
//                 <span>info@shoemart.com</span>
//               </div>
//               <div className="contact-item">
//                 <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
//                   <circle cx="12" cy="10" r="3" />
//                 </svg>
//                 <span>Karachi, Pakistan</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Payment Methods */}
//         <div className="payment-section">
//           <h4 className="payment-title">We Accept</h4>
//           <div className="payment-methods">
//             <div className="payment-card">Visa</div>
//             <div className="payment-card">MasterCard</div>
//             <div className="payment-card">PayPal</div>
//             <div className="payment-card">JazzCash</div>
//             <div className="payment-card">EasyPaisa</div>
//             <div className="payment-card">COD</div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="footer-bottom">
//           <div className="footer-bottom-content">
//             <p className="copyright">© 2024 ShoeMart. All rights reserved.</p>
//             <div className="footer-bottom-links">
//               <a href="/privacy">Privacy Policy</a>
//               <a href="/terms">Terms of Service</a>
//               <a href="/cookies">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer
// "use client"

// import { useState } from "react"
// import "./foo.css"

// function Footer() {
//   const [email, setEmail] = useState("")
//   const [isSubscribed, setIsSubscribed] = useState(false)

//   const handleNewsletterSubmit = (e) => {
//     e.preventDefault()
//     if (email) {
//       setIsSubscribed(true)
//       setTimeout(() => {
//         setIsSubscribed(false)
//         setEmail("")
//       }, 3000)
//     }
//   }

//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Main Footer Content */}
//         <div className="footer-main">
//           {/* Brand Section */}
//           <div className="footer-section brand-section">
//             <div className="brand-logo">
//               <svg className="logo-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <path d="M12 2L2 7l10 5 10-5-10-5z" />
//                 <path d="M2 17l10 5 10-5" />
//                 <path d="M2 12l10 5 10-5" />
//               </svg>
//               <h2 className="brand-name">StepStyle</h2>
//             </div>
//             <p className="brand-description">
//               Premium footwear collection for every step of your journey. Quality, comfort, and style combined in every
//               pair we craft.
//             </p>
//             <div className="social-media">
//               <a href="#" className="social-link facebook" aria-label="Facebook">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                 </svg>
//               </a>
//               <a href="#" className="social-link instagram" aria-label="Instagram">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
//                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
//                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
//                 </svg>
//               </a>
//               <a href="#" className="social-link twitter" aria-label="Twitter">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
//                 </svg>
//               </a>
//               <a href="#" className="social-link youtube" aria-label="YouTube">
//                 <svg viewBox="0 0 24 24" fill="currentColor">
//                   <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z" />
//                   <polygon points="9.75,15.02 15.5,11.75 9.75,8.48" />
//                 </svg>
//               </a>
//             </div>
//           </div>

//           {/* Shop Categories */}
//           <div className="footer-section">
//             <h3 className="section-title">Shop Categories</h3>
//             <ul className="footer-links">
//               <li>
//                 <a href="/men-shoes">Men's Shoes</a>
//               </li>
//               <li>
//                 <a href="/women-shoes">Women's Shoes</a>
//               </li>
//               <li>
//                 <a href="/kids-shoes">Kids' Collection</a>
//               </li>
//               <li>
//                 <a href="/sports-shoes">Sports & Athletic</a>
//               </li>
//               <li>
//                 <a href="/formal-shoes">Formal Wear</a>
//               </li>
//               <li>
//                 <a href="/casual-shoes">Casual Footwear</a>
//               </li>
//               <li>
//                 <a href="/sale">Sale Items</a>
//               </li>
//             </ul>
//           </div>

//           {/* Customer Care */}
//           <div className="footer-section">
//             <h3 className="section-title">Customer Care</h3>
//             <ul className="footer-links">
//               <li>
//                 <a href="/help">Help Center</a>
//               </li>
//               <li>
//                 <a href="/shipping">Shipping Information</a>
//               </li>
//               <li>
//                 <a href="/returns">Returns & Refunds</a>
//               </li>
//               <li>
//                 <a href="/size-guide">Size Guide</a>
//               </li>
//               <li>
//                 <a href="/track-order">Track Your Order</a>
//               </li>
//               <li>
//                 <a href="/contact">Contact Support</a>
//               </li>
//               <li>
//                 <a href="/warranty">Warranty Policy</a>
//               </li>
//             </ul>
//           </div>

//           {/* Company Info */}
//           <div className="footer-section">
//             <h3 className="section-title">Company</h3>
//             <ul className="footer-links">
//               <li>
//                 <a href="/about">About StepStyle</a>
//               </li>
//               <li>
//                 <a href="/careers">Careers</a>
//               </li>
//               <li>
//                 <a href="/press">Press & Media</a>
//               </li>
//               <li>
//                 <a href="/sustainability">Sustainability</a>
//               </li>
//               <li>
//                 <a href="/investors">Investor Relations</a>
//               </li>
//               <li>
//                 <a href="/affiliate">Affiliate Program</a>
//               </li>
//               <li>
//                 <a href="/blog">Our Blog</a>
//               </li>
//             </ul>
//           </div>

//           {/* Newsletter & Contact */}
//           <div className="footer-section newsletter-section">
//             <h3 className="section-title">Stay Updated</h3>
//             <p className="newsletter-description">
//               Get the latest updates on new arrivals, exclusive offers, and style tips delivered to your inbox.
//             </p>

//             <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
//               <div className="input-wrapper">
//                 <input
//                   type="email"
//                   placeholder="Enter your email address"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="newsletter-input"
//                   required
//                 />
//                 <button type="submit" className="newsletter-button" disabled={isSubscribed}>
//                   {isSubscribed ? (
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <path d="M20 6L9 17l-5-5" />
//                     </svg>
//                   ) : (
//                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                       <path d="M5 12h14M12 5l7 7-7 7" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//               {isSubscribed && <p className="success-message">✓ Successfully subscribed!</p>}
//             </form>

//             <div className="contact-details">
//               <div className="contact-item">
//                 <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
//                 </svg>
//                 <div>
//                   <span className="contact-label">Phone</span>
//                   <span className="contact-value">+1 (555) 123-4567</span>
//                 </div>
//               </div>

//               <div className="contact-item">
//                 <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
//                   <polyline points="22,6 12,13 2,6" />
//                 </svg>
//                 <div>
//                   <span className="contact-label">Email</span>
//                   <span className="contact-value">hello@stepstyle.com</span>
//                 </div>
//               </div>

//               <div className="contact-item">
//                 <svg className="contact-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                   <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
//                   <circle cx="12" cy="10" r="3" />
//                 </svg>
//                 <div>
//                   <span className="contact-label">Address</span>
//                   <span className="contact-value">123 Fashion Street, Style City, SC 12345</span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Features Bar */}
//         <div className="features-bar">
//           <div className="feature-item">
//             <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
//               <polyline points="3.27,6.96 12,12.01 20.73,6.96" />
//               <line x1="12" y1="22.08" x2="12" y2="12" />
//             </svg>
//             <div>
//               <h4>Free Shipping</h4>
//               <p>On orders over $75</p>
//             </div>
//           </div>

//           <div className="feature-item">
//             <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
//               <polyline points="9,22 9,12 15,12 15,22" />
//             </svg>
//             <div>
//               <h4>Easy Returns</h4>
//               <p>30-day return policy</p>
//             </div>
//           </div>

//           <div className="feature-item">
//             <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <circle cx="12" cy="12" r="10" />
//               <polyline points="12,6 12,12 16,14" />
//             </svg>
//             <div>
//               <h4>24/7 Support</h4>
//               <p>Customer service</p>
//             </div>
//           </div>

//           <div className="feature-item">
//             <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//               <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
//               <line x1="1" y1="10" x2="23" y2="10" />
//             </svg>
//             <div>
//               <h4>Secure Payment</h4>
//               <p>SSL encrypted checkout</p>
//             </div>
//           </div>
//         </div>

//         {/* Payment Methods */}
//         <div className="payment-section">
//           <h4 className="payment-title">Accepted Payment Methods</h4>
//           <div className="payment-methods">
//             <div className="payment-card visa">
//               <span>VISA</span>
//             </div>
//             <div className="payment-card mastercard">
//               <span>MasterCard</span>
//             </div>
//             <div className="payment-card amex">
//               <span>AMEX</span>
//             </div>
//             <div className="payment-card paypal">
//               <span>PayPal</span>
//             </div>
//             <div className="payment-card apple">
//               <span>Apple Pay</span>
//             </div>
//             <div className="payment-card google">
//               <span>Google Pay</span>
//             </div>
//           </div>
//         </div>

//         {/* Bottom Footer */}
//         <div className="footer-bottom">
//           <div className="footer-bottom-content">
//             <div className="copyright">
//               <p>&copy; 2024 StepStyle. All rights reserved.</p>
//             </div>
//             <div className="legal-links">
//               <a href="/privacy-policy">Privacy Policy</a>
//               <a href="/terms-of-service">Terms of Service</a>
//               <a href="/cookie-policy">Cookie Policy</a>
//               <a href="/accessibility">Accessibility</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer
