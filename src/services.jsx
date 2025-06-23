
// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaSpinner } from 'react-icons/fa';
// import img3 from '../download.jpg';
// import Usercontext from './context';
// import './App.css';

// function Services() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(false); // for spinner
//   const { setuser } = useContext(Usercontext);
//   const navigate = useNavigate();

//     const token = localStorage.getItem('token');

//     if (token === null  || !token) {

//       navigate('/sign');
//     }else if(token) {
//       setLoading(true)
//   fetch(`http://localhost:8001/services`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === 401) {
//           navigate('/sign');
//         } else {
//           setItems(data); // Adjust if backend sends { items: [...] }
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching:', err);
//         navigate('/sign');
//         setLoading(false);
//       });

// }
  





//   const products = items[0] || [];

//   return (
//     <div className='pro' style={{ display: 'flex', flexWrap: 'wrap' }}>
//       {loading ? (
//         <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>
//           <FaSpinner className="spin" size={40} style={{ color: '#007bff' }} />
//           <p style={{ fontSize: '14px' }}>Loading products...</p>
//         </div>
//       ) : (
//         products.map((product) => (
//           <Link to="/detail" key={product.id}>
//             <div
//               className='each'
//               onClick={() => {
//                 setuser({
//                   name: product.name,
//                   id: product.id,
//                   image: img3,
//                   price: product.price,
//                 });
//               }}
//             >
//               <img
//                 src={img3}
//                 alt={product.name}
//                 style={{
//                   width: '90%',
//                   borderRadius: '5px',
//                   height: '80px',
//                   margin: '5px',
//                 }}
//               />
//               <h3 style={{ fontSize: '10px', margin: '10px' }}>
//                 {product.name}
//               </h3>
//               <p style={{ fontWeight: 'bold', color: '#333' }}>
//                 ${product.price}
//               </p>
//               <button
//                 style={{
//                   backgroundColor: '#007bff',
//                   color: '#fff',
//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                   width: '100px',
//                   fontSize: '10px',
//                 }}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </Link>
//         ))
//       )}
//     </div>
//   );
// }

// export default Services;
// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaSpinner } from 'react-icons/fa';
// import img3 from '../download.jpg';
// import Usercontext from './context';
// import './App.css';

// function Services() {
//   const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const { setuser } = useContext(Usercontext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');

//     if (!token) {
//       // ❗ This will now correctly trigger navigation
//       navigate('/sign');
      
//     }

//     setLoading(true);

//     fetch(`http://localhost:8001/services`, {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.status === 401 || data.status === 'unauthorized') {
//           navigate('/sign');
          

//         } else {
          
//           setItems(data); // Adjust this if backend wraps the items
//         setLoading(false);
//         }
//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error('Error fetching:', err);
//         navigate('/sign');
//         setLoading(false);
//       });
//   }, [navigate]);

//   return (
//     <div className='pro' style={{ display: 'flex', flexWrap: 'wrap' }}>
//       {loading ? (
//         <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>
//           <FaSpinner className="spin" size={40} style={{ color: '#007bff' }} />
//           <p style={{ fontSize: '14px' }}>Loading products...</p>
//         </div>
//       ) : (
//         items.map((product) => (
//           <Link to="/detail" key={product.id}>
//             <div
//               className='each'
//               onClick={() => {
//                 setuser({
//                   name: product.name,
//                   id: product.id,
//                   image: img3,
//                   price: product.price,
//                 });
//               }}
//             >
//               <img
//                 src={img3}
//                 alt={product.name}
//                 style={{
//                   width: '90%',
//                   borderRadius: '5px',
//                   height: '80px',
//                   margin: '5px',
//                 }}
//               />
//               <h3 style={{ fontSize: '10px', margin: '10px' }}>
//                 {product.name}
//               </h3>
//               <p style={{ fontWeight: 'bold', color: '#333' }}>
//                 ${product.price}
//               </p>
//               <button
//                 style={{
//                   backgroundColor: '#007bff',
//                   color: '#fff',
//                   border: 'none',
//                   borderRadius: '5px',
//                   cursor: 'pointer',
//                   width: '100px',
//                   fontSize: '10px',
//                 }}
//               >
//                 Add to Cart
//               </button>
//             </div>
//           </Link>
//         ))
//       )}
//     </div>
//   );
// }

// export default Services;

import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import img3 from '../download.jpg';
import Usercontext from './context';
import './App.css';

function Services() {
const apiUrl = import.meta.env.VITE_URL;


 const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setuser } = useContext(Usercontext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      // ❗ This will now correctly trigger navigation
      navigate('/sign');
      
    }

    setLoading(true);

    fetch(`${apiUrl}/services`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 401 || data.status === 'unauthorized') {
          navigate('/sign');
          

        } else {
          
          setItems(data); // Adjust this if backend wraps the items
        setLoading(false);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching:', err);
        navigate('/sign');
        setLoading(false);
      });
  }, [navigate]);


  const products = items[0] || [];

  return (
    <div className='pro' style={{ display: 'flex', flexWrap: 'wrap' }}>
      {loading ? (
        <div style={{ width: '100%', textAlign: 'center', padding: '40px' }}>
          <FaSpinner className="spin" size={40} style={{ color: '#007bff' }} />
          <p style={{ fontSize: '14px' }}>Loading products...</p>
        </div>
      ) : (
        products.map((product) => (
          <Link to="/detail" key={product.id}>
            <div
              className='each'
              onClick={() => {
                setuser({
                  name: product.name,
                  id: product.id,
                  image: img3,
                  price: product.price,
                });
              }}
            >
              <img
                src={img3}
                alt={product.name}
                style={{
                  width: '90%',
                  borderRadius: '5px',
                  height: '80px',
                  margin: '5px',
                }}
              />
              <h3 style={{ fontSize: '10px', margin: '10px' }}>
                {product.name}
              </h3>
              <p style={{ fontWeight: 'bold', color: '#333' }}>
                ${product.price}
              </p>
              <button
                style={{
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                  borderRadius: '5px',
                  cursor: 'pointer',
                  width: '100px',
                  fontSize: '10px',
                }}
              >
                Add to Cart
              </button>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}

export default Services;
