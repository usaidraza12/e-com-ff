import React, { useContext,useEffect,useState} from 'react'
import img1 from './assets/img.jpg'
import img2 from '../down2.jpg'
import img3 from '../download.jpg'
import Addchart from './chart'
import { useNavigate } from 'react-router-dom'
import { FaSpinner } from 'react-icons/fa';
import img5 from './assets/img2.jpg'
import img6 from './assets/pic.jpg'
import { Link } from 'react-router-dom'
import './App.css'
import App from './App'
import Navbar from './navbar'
// const CartContext = createContext();
import Usercontext from './context'

import Detail from './detail'
function Services() {
  const [data,setdata]=React.useState(null)
    const navigate = useNavigate();
  
  const {setuser}=useContext(Usercontext)
  // const [mydata,setmydata]= useState([]);
 const [pro,setpro]=useState('')
 const [items,setItems] = useState([]);


 const token=localStorage.getItem('token')

 if(token){
  const fetching=fetch('http://localhost:8001/services',{
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`
    }
  }).then((res)=>res.json())
  .then((data)=>{
    setItems(data)
  }).catch((err) => console.error('Error fetching:', err));
 }else{
  navigate('/sign')
 }

 

//  useEffect(()=>{
//   const fetching=fetch('http://localhost:8001/services',{
//     method: 'GET',
   
//   })
//       .then((res) => res.json())
//       .then((data) => {
//         if(data){
//           setItems(data)
//         }else{
//           window.location.href=("http://localhost:5173/sign")
//         }
//       })
//       .catch((err) => console.error('Error fetching:', err));
      
//  },[]);

// //  const usercheck= fetch('http://localhost:8001/auth')
// //  .then((res)=>res.json())
// //  .then((data)=>{
// //   if(data.massege=true){
// //     window.location.href=("http://localhost:5173/services");
// //   } else{
// //     window.location.href=("http://localhost:5173/sign");
// //   }
// //  })
  const products =items[0]

  return (
    <>
  {/* <div style={{ display: 'flex', flexWrap:'wrap', gap:'20px', padding:'20px',gap:'30px'}} className='pro'> */}
  <div style={{ display: 'flex', flexWrap: 'wrap',  }} className='pro' >

      {items.length==0?(
 <FaSpinner className="spin" style={{ marginRight: '8px' }} />
      ):(
      products.map((product) => (
        <Link to="/detail">


        <div
    
          key={product.id}
          className='each'

          // style={{
            
          //   border: '1px solid #ccc',
          //   borderRadius: '8px',
          //   padding: '10px',
          //   width: '200px',
          //   height:"400px",
          //   textAlign: 'center',
          // }}
          onClick={ ()=>{
            setuser({
              name:product.name,
              id:product.id,
             image:img3,
              price:product.price
            })
          }}
        >
          
      
          <img
            src={img3}
            alt={product.name}
            style={{ width: '90%', borderRadius: '5px' ,height:"80px",margin:"5px" }}
          />
        
        
          
      
          <h3 style={{ fontSize: '10px', margin: '10px' }} key={product.id}>{product.name}</h3>
          <p style={{ fontWeight: 'bold', color: '#333' }}>${product.price}</p>
          <button
         
          
            style={{
              backgroundColor: '#007bff',
              color: '#fff',
              border: 'none',
              
              borderRadius: '5px',
              cursor: 'pointer',
              width:"100px",
              fontSize:"10px"
              
            }}
          >
            Add to Cart
          </button >
          
        </div>
        
        </Link>

      )))
      }
      
    </div>
    </>
  )
}

export default Services