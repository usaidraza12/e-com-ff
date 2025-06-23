
// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaSpinner } from 'react-icons/fa';
// import img3 from '../download.jpg';
// import Usercontext from './context';
// import './App.css';
// const apiUrl = import.meta.env.VITE_URL;
// function Services() {


//  if (!token) {
//       // ❗ This will now correctly trigger navigation
//       navigate('/sign');
      
//     }else{
//       fetchapi()
//     }
    
//  const [items, setItems] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const { setuser } = useContext(Usercontext);
//   const navigate = useNavigate();
//     const token = localStorage.getItem('token');
    

//     function fetchapi(){
//           setLoading(true);

//     fetch(`${apiUrl}/services`, {
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
       
//       })
//       .catch((err) => {
//         console.error('Error fetching', err);
//         setLoading(false);
//         navigate('/sign');

//       });
//     }
  

 


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
import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FaSpinner } from 'react-icons/fa';
import img3 from '../download.jpg';
import Usercontext from './context';
import './App.css';

const apiUrl = import.meta.env.VITE_URL;

function Services() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const { setuser } = useContext(Usercontext);
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // ✅ move this up

  useEffect(() => {
    if (!token) {
      console.log(token)
      navigate('/sign');
    } else {
      fetchapi();
    }
  }, []); // ✅ wrap this in useEffect so it runs after first render

  function fetchapi() {
    setLoading(true);
console.log("this")
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
          setItems(data);
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching', err);
        setLoading(false);
        navigate('/sign');
      });
  }

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
