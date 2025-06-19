// import React, { useContext,useEffect,useState} from 'react'
// import img1 from './assets/img.jpg'
// import img2 from '../down2.jpg'
// import img3 from '../download.jpg'
// import Addchart from './chart'
// import { useNavigate } from 'react-router-dom'
// import { FaSpinner } from 'react-icons/fa';
// import img5 from './assets/img2.jpg'
// import img6 from './assets/pic.jpg'
// import { Link } from 'react-router-dom'
// import './App.css'
// import App from './App'
// import Navbar from './navbar'
// // const CartContext = createContext();
// import Usercontext from './context'

// import Detail from './detail'
// function Services() {
//   const [data,setdata]=React.useState(null)
//     const navigate = useNavigate();
  
//   const {setuser}=useContext(Usercontext)
//   // const [mydata,setmydata]= useState([]);
//  const [pro,setpro]=useState('')
//  const [items,setItems] = useState([]);


//  const token=localStorage.getItem('token')

//  if(token){
//   const fetching=fetch('https://render-3-4kao.onrender.com/services',{
//     method: 'GET',
//     headers: {
//       Authorization: `Bearer ${token}`
//     }
//   }).then((res)=>res.json())
//   .then((data)=>{
//     console.log(data)
//     setItems(data)
//       window.location.reload()

    
//   }).catch((err) => console.error('Error fetching:', err));
//  }else{

//      window.location('/sign')
  
//  }

 

// //  useEffect(()=>{
// //   const fetching=fetch('https://render-3-4kao.onrender.com/services',{
// //     method: 'GET',
   
// //   })
// //       .then((res) => res.json())
// //       .then((data) => {
// //         if(data){
// //           setItems(data)
// //         }else{
// //           window.location.href=("http://localhost:5173/sign")
// //         }
// //       })
// //       .catch((err) => console.error('Error fetching:', err));
      
// //  },[]);

// // //  const usercheck= fetch('https://render-3-4kao.onrender.com/auth')
// // //  .then((res)=>res.json())
// // //  .then((data)=>{
// // //   if(data.massege=true){
// // //     window.location.href=("http://localhost:5173/services");
// // //   } else{
// // //     window.location.href=("http://localhost:5173/sign");
// // //   }
// // //  })
//   const products =items[0]

//   return (
//     <>
//   {/* <div style={{ display: 'flex', flexWrap:'wrap', gap:'20px', padding:'20px',gap:'30px'}} className='pro'> */}
//   <div style={{ display: 'flex', flexWrap: 'wrap',  }} className='pro' >

//       {items.length==0?(
//  <FaSpinner className="spin" style={{ marginRight: '8px' }} />
//       ):(
//       products.map((product) => (
//         <Link to="/detail">


//         <div
    
//           key={product.id}
//           className='each'

//           // style={{
            
//           //   border: '1px solid #ccc',
//           //   borderRadius: '8px',
//           //   padding: '10px',
//           //   width: '200px',
//           //   height:"400px",
//           //   textAlign: 'center',
//           // }}
//           onClick={ ()=>{
//             setuser({
//               name:product.name,
//               id:product.id,
//              image:img3,
//               price:product.price
//             })
//           }}
//         >
          
      
//           <img
//             src={img3}
//             alt={product.name}
//             style={{ width: '90%', borderRadius: '5px' ,height:"80px",margin:"5px" }}
//           />
        
        
          
      
//           <h3 style={{ fontSize: '10px', margin: '10px' }} key={product.id}>{product.name}</h3>
//           <p style={{ fontWeight: 'bold', color: '#333' }}>${product.price}</p>
//           <button
         
          
//             style={{
//               backgroundColor: '#007bff',
//               color: '#fff',
//               border: 'none',
              
//               borderRadius: '5px',
//               cursor: 'pointer',
//               width:"100px",
//               fontSize:"10px"
              
//             }}
//           >
//             Add to Cart
//           </button >
          
//         </div>
        
//         </Link>

//       )))
//       }
      
//     </div>
//     </>
//   )
// }

// export default Services

// import React, { useContext, useEffect, useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import { FaSpinner } from 'react-icons/fa';
// import img3 from '../download.jpg';
// import Usercontext from './context';
// import './App.css';

// function Services() {
//   const [items, setItems] = useState([]);
//   const { setuser } = useContext(Usercontext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem('token');

//     if (!token) {
//       navigate('/sign');
//       return;
//     }

//     fetch('https://render-3-4kao.onrender.com/services', {
//       method: 'GET',
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         if (data.message === false) {
//           navigate('/sign');
//         } else {
//           setItems(data); // or data.items if your backend sends like { items: [...] }
//         }
//       })
//       .catch((err) => {
//         console.error('Error fetching:', err);
//         navigate('/sign');
//       });
//   }, [navigate]);

//   const products = items[0] || []; // in case it's nested

//   return (
//     <div style={{ display: 'flex', flexWrap: 'wrap' }} className='pro'>
//       {items.length === 0 ? (
//         <FaSpinner className="spin" style={{ marginRight: '8px' }} />
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

function Services() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true); // for spinner
  const { setuser } = useContext(Usercontext);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/sign');
      return;
    }

    fetch('https://render-3-4kao.onrender.com/services', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === false) {
          navigate('/sign');
        } else {
          setItems(data); // Adjust if backend sends { items: [...] }
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
