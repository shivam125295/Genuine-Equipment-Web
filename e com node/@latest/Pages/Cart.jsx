import React from 'react'
import LAYOUT from '../components/LAYOUT.JSX'
import Lottie from 'lottie-react'
import cart from '../assets/cart.json'
import logo from '../assets/ge logo.png'
import { NavLink } from 'react-router-dom'
import sing from '../assets/sing.json'
import { motion } from "framer-motion";



const Cart = () => {
  return (
    
<>
<div style={{display:"flex "}}> 
  <NavLink to='/'><img src={logo} alt="" srcset="" style={{height:"110px", mixBlendMode:"color-burn"}} /></NavLink> 
        <h3 style={{justifyContent:"center", alignItems:"center ",display:"flex",}}>Cart</h3>
</div>

  <Lottie style={{height:"200px",width:"80%", position:"absolute", alignItems:"end" ,mixBlendMode:"color-burn"}} animationData={cart} loop={true} />
  
  <Lottie className='h-50 w-50 absolute ' animationData={sing} loop={true} > </Lottie>
  <br />

  <div className="flex items-center justify-center h-screen ">
      <motion.h1
        className="text-4xl font-bold text-gray"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 5, ease: "easeOut" }}
      >
        Animated Text
      </motion.h1>
    </div>
</>

    
    
  )
}

export default Cart