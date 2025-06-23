// import React, { useContext, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import UserContext from './context';
// import './dss.css';
// import { FaShoppingCart, FaStar, FaRegStar } from 'react-icons/fa';
// import { FaSpinner } from "react-icons/fa"

// function Detail() {
//   const { user,para,setpara } = useContext(UserContext);
//   console.log(para)
//   const [quantity, setQuantity] = useState(1);
//   const [load,setload]=useState(false)
//   const [selectedSize, setSelectedSize] = useState('');
//   const navigate = useNavigate();
//     const token = localStorage.getItem('token');

// const userid= localStorage.getItem("userId")
//   if (!user?.id) {
//     return <div className="detail-empty">Product not found.</div>;
//   }

//   const handleAddToCart = async (e) => {
//     e.preventDefault()
//       // Save to MongoDB via API
    
//     };

 

//   return (
//     <div className="detail-container">
//       <div className="detail-wrapper">
//         <div className="detail-image-box">
//           <img src={user.image} alt={user.name} className="detail-image" />
         
//         </div>

//         <div className="detail-info">
//           <h1 className="detail-title">{user.name}</h1>
          
//           <div className="rating">
//             {[...Array(5)].map((_, i) => (
//               i < 4 ? <FaStar key={i} className="star filled" /> : <FaRegStar key={i} className="star" />
//             ))}
//             <span>(24 reviews)</span>
//           </div>
          
//           <p className="detail-price">Rs {user.price.toLocaleString()}</p>
//           <p className="detail-stock">✔ In Stock</p>
//           <p className="detail-brand">Brand: <strong>Generic Seller</strong></p>
          
//           <div className="size-selection">
//             <h3>Select Size:</h3>
//             <div className="size-options">
//               {['S', 'M', 'L', 'XL'].map(size => (
//                 <button
//                   key={size}
//                   className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
//                   onClick={() => setSelectedSize(size)}
//                 >
//                   {size}
//                 </button>
//               ))}
//             </div>
//           </div>
          
//           <div className="quantity-selector">
//             <h3>Quantity:</h3>
//             <div className="quantity-controls">
//               <button 
//                 onClick={() => setQuantity(q => Math.max(1, q - 1))}
//                 disabled={quantity <= 1}
//               >
//                 -
//               </button>
//               <span>{quantity}</span>
//               <button onClick={() => setQuantity(q => q + 1)}>+</button>
//             </div>
//           </div>

//           <p className="detail-description">
//             High-quality product with quick delivery. Order now to receive within 2–3 working days.
//           </p>

//           <div className="detail-buttons">
//             <button
//               className="btn add-to-cart"
//               onClick={ async(e)=>{
//                 e.preventDefault()
//                  try {
//                   setload(true)
//                 setpara({
//                   name:user.name,
//                   image:user.image,
//                  price: user.price.toLocaleString(),
//                  size:selectedSize,
//                  quantity:quantity,
//                 userId:userid,

//                 })
//                 console.log(para)
//                  if (!selectedSize) {
//       alert('Please select a size');
//                  }
//         // const response = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/add`, {
                        
//       // Save to MongoDB via API
//       const response = await fetch(' http://localhost:8001/api/cart/add', {
//         method: 'POST',
//         headers: {
//         Authorization: `Bearer ${token}`,

//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(para),
//       }).then((res)=>res.json())
//       .then((data)=>{
//         if(data.message==="add" || data.message==="okk" ){
//       navigate("/cart")
          
//         }else{
//           return;
//         }
//       //   console.log(data)
//       // navigate("/cart")

//       })

//     } catch (error) {
//       console.error('Error adding to cart:', error);
//       alert('Failed to add item to cart');
//     }
                

 
//               }}
//             >
//               {load ? (
//               <>
//                 <FaSpinner className="loading-spinner" />
//                 loading...
//               </>
//             ) : (
//               <>
//               <FaShoppingCart /> Add to Cart
//               </>
//             )}
//             </button>
            
//             {/* <button className="btn buy-now">
//               Buy Now
//             </button> */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Detail;
import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from './context';
import './dss.css';
import { FaShoppingCart, FaStar, FaRegStar, FaSpinner } from 'react-icons/fa';

function Detail() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
const apiUrl = import.meta.env.VITE_URL;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  if (!user?.id) {
    return <div className="detail-empty">Product not found.</div>;
  }

  const handleAddToCart = async (e) => {
    e.preventDefault();

    if (!selectedSize) {
      alert('Please select a size');
      return;
    }

    const cartData = {
      name: user.name,
      image: user.image,
      price: user.price, // as number
      size: selectedSize,
      quantity,
      userId,
    };

    try {
      setLoading(true);

      const res = await fetch(`${apiUrl}/api/cart/add`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(cartData),
      });

      const data = await res.json();

      if (data.message === 'add' || data.message === 'okk') {
        navigate('/cart');
      } else {
        alert('Item could not be added');
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      alert('Something went wrong while adding to cart.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="detail-container">
      <div className="detail-wrapper">
        <div className="detail-image-box">
          <img src={user.image} alt={user.name} className="detail-image" />
        </div>

        <div className="detail-info">
          <h1 className="detail-title">{user.name}</h1>

          <div className="rating">
            {[...Array(5)].map((_, i) =>
              i < 4 ? <FaStar key={i} className="star filled" /> : <FaRegStar key={i} className="star" />
            )}
            <span>(24 reviews)</span>
          </div>

          <p className="detail-price">Rs {user.price.toLocaleString()}</p>
          <p className="detail-stock">✔ In Stock</p>
          <p className="detail-brand">Brand: <strong>Generic Seller</strong></p>

          <div className="size-selection">
            <h3>Select Size:</h3>
            <div className="size-options">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-selector">
            <h3>Quantity:</h3>
            <div className="quantity-controls">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} disabled={quantity <= 1}>-</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)}>+</button>
            </div>
          </div>

          <p className="detail-description">
            High-quality product with quick delivery. Order now to receive within 2–3 working days.
          </p>

          <div className="detail-buttons">
            <button className="btn add-to-cart" onClick={handleAddToCart}>
              {loading ? (
                <>
                  <FaSpinner className="loading-spinner" />
                  &nbsp;Loading...
                </>
              ) : (
                <>
                  <FaShoppingCart /> Add to Cart
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

