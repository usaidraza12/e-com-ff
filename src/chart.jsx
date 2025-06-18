import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './cart.css'; // Optional CSS
import Usercontext from './context'

function ChartList() {
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem('userId');

    if (userId) {
      axios
        .get(`https://render-iw08.onrender.com/api/cart/all`, {
          params: { userId: userId }
        })
        .then((response) => {
          setCartItems(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching cart data:', error);
          setLoading(false);
        });
    } else {
      console.warn('User ID not found in localStorage');
      setLoading(false);
    }
  }, []);

  const handleDelete = async (id) => {
  try {
    const res = await fetch(`https://render-iw08.onrender.com/api/cart/${id}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      alert("Item deleted successfully");
      // Optionally: update cart state
      setCartItems(prev => prev.filter(item => item._id !== id));

    } else {
      console.error("Delete failed");
    }
  } catch (error) {
    console.error("Error deleting item:", error);
  }
};

  if (loading) return <div className="loading">Loading cart...</div>;

  return (
     <Usercontext.Provider value={{ cartItems, setCartItems }}>
   <div className="chartlist-container">
    
      {cartItems.length === 0 ? (
        <p>No items in your cart.</p>
      ) : (
        <ul className="cart-list">
          {cartItems.map((item) => (
            <li key={item._id} className="cart-item">
            <img src={item.image} alt="" />
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button id='cartdel' onClick={() => handleDelete(item._id)}>
                Del
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
    </Usercontext.Provider>
   
  );
}

export default ChartList;
