import { Route,Routes } from "react-router-dom"
import React, { useEffect } from "react"
import Contact from "../Pages/Contact"
import NotFound from "../Pages/NotFound"
import Home from "../Pages/Home"

import Policy from "../Pages/Policy"
// import Product from "../Pages/Product"
import LoginPage from "../Pages/Auth/Login"
import Register from "../Pages/Auth/Register"
 import Cart from "../Pages/Cart"
import { ToastContainer } from "react-toastify"
// import Dashbord from "../Pages/user/Dashbord"

import { useState } from "react"
import Loading from '../Pages/Loding'
import Product from "../Pages/Product"
import ProductMenu from "../Pages/user/ProductMenu"
import Hydraulic from "../ProductList/Hydraulicramp"
import { Router } from "lucide-react"
import AirCompressor from "../ProductList/AirCompressor"
import BatteryCharger from "../ProductList/BatteryCharger"
import HeavyLift from "../ProductList/HeavyLift"
import PlugCleaner from "../ProductList/PlugCleaner"
import Powerpack from "../ProductList/Powerpack"
import PUPIPE from "../ProductList/PUPIPE.JSX"
import Services from "../ProductList/Services"
import ToolsKits from "../ProductList/ToolsKits"
import ToolsTrolly from "../ProductList/ToolsTrolly"
import WallHanger from "../ProductList/WallHanger"
import WorkBench from "../ProductList/WorkBench"

function App() {

  const [isLoading, setisLoading] = useState(true);

 useEffect(()=>{
   
   setTimeout(() => {
     
     setisLoading(false);
    }, 2000);
  })
  

  return (
    <div style={{alignItems:"center"}}>

{
  isLoading ? <Loading/>:
  
<div>


  
<Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact" element={<Contact />} />

      <Route path="/policy" element={<Policy />} />
      {/* <Route path="/product" element={<Product />} /> */}
      {/* <Route path="/dashbord" element={<Dashbord/>} /> */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cart" element={<Cart/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/productmenu" element={<ProductMenu/>} />
      <Route path="/hydraulic" element={<Hydraulic/>} />
   <Route path="/aircompressor" element={<AirCompressor/>} />
   <Route path="/batterycharger" element={<BatteryCharger />} />
   <Route path="/heavylift" element={<HeavyLift />} />
   <Route path="/plugcleaner" element={<PlugCleaner />} />
   <Route path="/powerpack" element={<Powerpack/>} />
   <Route path="/pupipe" element={<PUPIPE />} />
   <Route path="/service" element={<Services/>} />
   <Route path="/toolkit" element={<ToolsKits />} />
   <Route path="/toolstrolly" element={<ToolsTrolly/>} />
   <Route path="/wallhanger" element={<WallHanger />} />
   <Route path="/workbench" element={<WorkBench/>} />
  





      <Route path="*" element={<NotFound />} />




    </Routes>

</div>
}
      </div>
      )
    
    
  
}

export default App
