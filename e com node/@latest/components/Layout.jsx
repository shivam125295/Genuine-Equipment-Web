import React from 'react'
import Footer from './Footer'
import Headers from './context/Headers'
import Header from './Header'
import { ToastContainer } from 'react-toastify'
const LAYOUT = (props) => {
 return(
    <div  >
         {/* <Header/> */}
         <Headers/>
        <main style={{minHeight:"90vh", }}>
        
        {props.children}
<ToastContainer/>
        </main>
        <Footer/>
    </div>
 )
}

export default LAYOUT
