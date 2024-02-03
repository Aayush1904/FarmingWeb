import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
  const { foundProduct } = props;
  console.log('foundProduct in Breadcrum:', foundProduct);

  if (!foundProduct) {
    return null; // or return some default breadcrumb for the loading state
  }

  return (
    <div className='breadcrum'>
      Home <img src={arrow_icon} alt="" /> Shop <img src={arrow_icon} alt="" /> {foundProduct.category} <img src={arrow_icon} alt="" /> {foundProduct.name}
    </div>
  )
}

export default Breadcrum
