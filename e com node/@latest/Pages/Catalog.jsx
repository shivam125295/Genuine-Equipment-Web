import React, { useContext } from 'react'
import { AppContext } from '../components/context/productcontext'
import Cart from "../Pages/Cart"

const Catalog = () => {
  const {myName}=useContext(AppContext);

  const data={
    name :"shivam bansal"
  }
  return (
    <div>
      {myName}
      {/* <Cart myData={data}/>{""} */}
    </div>
  )
}

export default Catalog
