// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import './cart.css'; // Optional CSS
// import Usercontext from './context'

// function ChartList() {
//     const [cart, setcart] = useState([]);
//   // console.log(cartItems)
//   const [loading, setLoading] = useState(true);
//   const userId = localStorage.getItem('userId');

// console.log(userId)
//   useEffect(() => {
//   const token = localStorage.getItem('token')
//     if (userId) {
//       axios
//         .get(`http://localhost:8001/api/cart/all`, {
//           params: { userId: userId },
//           headers:{
//         Authorization: `Bearer ${token}`,

//           },
//         })
//         .then((response) => {
//           setcart(response.data.cartItems);
//           setLoading(false);
//         })
//         .catch((error) => {
//           console.log('Error fetching cart data:', error);
//           setLoading(false);
//         });
//     } else {
//       console.log('User ID not found in localStorage');
//       setLoading(false);
//     }
//   }, []);

// //  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/${id}`
//   const handleDelete = async (id) => {
//   try {
//   const res = await fetch(`http://localhost:8001/api/cart/${id}` , {
//       method: 'DELETE',
//         headers: {
//         Authorization: `Bearer ${token}`,

//           'Content-Type': 'application/json',
//         },
//     });

//     if (res.ok) {
//       alert("Item deleted successfully");
//       // Optionally: update cart state
//       setcart(prev => prev.filter(item => item._id !== id));

//     } else {
//       console.error("Delete failed");
//     }
//   } catch (error) {
//     console.error("Error deleting item:", error);
//   }
// };
//   // if (loading) return ;

//   return (
// <>
// <div className="chartlist-container">
//   <ul className="cart-list">
//     {cart.length !== 0?cart.map((item)=>(
//       <li className='cart-item'>
//         <p>hello</p>
//       </li>
//     )):<h1>loading...</h1>}
//   </ul>
// </div>
//     {/* <Usercontext.Provider value={{ cartItems, setcartItems }}> */}
//    {/* <div className="chartlist-container">
    
//     {cartItems === 0?<div className="loading">Loading cart...</div>:
//      <ul className="cart-list">
//       {cartItems.map((item)=>(
//           <li key={item._id} className="cart-item">
//             <img src={item.image} alt="" />
//               <h4>{item.name}</h4>
//               <p>Price: ${item.price}</p>
//               <p>Quantity: {item.quantity}</p>
//               <button id='cartdel' onClick={() => handleDelete(item._id)}>
//                 Del
//               </button>
//             </li>
//       ))}
    
//         </ul>
//     }
//     </div> */}
//     {/* // </Usercontext.Provider> */}
// </>
   
//   );
// }

// export default ChartList;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cart.css'; // apni CSS file lagao

function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const userId = localStorage.getItem('userId');
  
  const token = localStorage.getItem('token');
const apiUrl = import.meta.env.VITE_URL;
console.log("Backend URL:", apiUrl);


  useEffect(() => {
    if (!userId || !token) {
      console.warn('User ID or token not found');
      setLoading(false);
      return;
    }

    axios
      .get(`${apiUrl}/api/cart/all`, {
        params: { userId },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        // console.log('Cart response:', res.data);
        const items = res.data.cartItems;

        if (Array.isArray(items)) {
          setCartItems(items);
        } else {
          console.error('cartItems is not an array:', items);
          setCartItems([]);
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching cart data:', err);
        setLoading(false);
      });
  }, [userId, token]);

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${apiUrl}/api/cart/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (res.ok) {
        alert('Item deleted successfully');
        setCartItems((prev) => prev.filter((item) => item._id !== id));
      } else {
        console.error('Delete failed');
      }
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  if (loading) return <h2 className="loading">Loading cart...</h2>;

  return (
    <div className="cart-container">
      {cartItems.length === 0 ? (
        <h3 className="empty-cart">Your cart is empty</h3>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item._id} className="cart-item">
              <img src={item.image} alt={item.name} className="cart-img" />
              <div className="cart-details">
                <h4>{item.name}</h4>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button
                  className="cart-delete-btn"
                  onClick={() => handleDelete(item._id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;

