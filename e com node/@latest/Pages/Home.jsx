import React from 'react'
import LAYOUT from '../components/Layout'
import Herosection from '../Pages/user/HeroSection'
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import RollingGallery from './user/Sweeper';
import Product from './Product';
import TestimonialSlider from '../Pages/user/TestiMonial'
import FeaturePro from '../Pages/user/FeatureProduct';
import Lottie from 'lottie-react';
import Hero from '../assets/Hero.json'
import Blog from '../Pages/user/Blog'



const Home = () => {

  const box = {
    width: 100,
    height: 100,
    backgroundColor: "#ff0088",
    borderRadius: 5,
}


  return (
    <>
    
    <div>
      <LAYOUT>
        

  <Herosection/>
{/* <Product/> */}
        








        <FeaturePro/> 
        <br />
{/* <div>

<Lottie style={{height:"400px",width:"80%", position:"absolute", alignItems:"end" }} animationData={Hero} loop={true} />
</div> */}
<br />
<Blog/>


<TestimonialSlider/>



        </LAYOUT>
    </div>
    </>
  )
}

export default Home
