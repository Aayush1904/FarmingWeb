import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/Assets/star_icon.png'
import star_dull_icon from '../Assests/Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
  const {foundProduct} = props;
  const {addToCart} = useContext(ShopContext)
  console.log('foundProduct in ProductDisplay:', foundProduct);

  if (!foundProduct || !foundProduct.image) {
    return null; // or return some default content for the loading state
  }
  return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
            <img src={foundProduct.image} alt="" />
            <img src={foundProduct.image} alt="" />
            <img src={foundProduct.image} alt="" />
            <img src={foundProduct.image} alt="" />
        </div>
        <div className="productdisplay-img">
            <img className='productdisplay-main-img' src={foundProduct.image} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
       <h1>{foundProduct.name}</h1>
       <div className="productdisplay-right-stars">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>122</p>
       </div>
       <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">${foundProduct.old_price}</div>
        <div className="productdisplay-right-price-new">${foundProduct.new_price}</div>
       </div>
       <div className="productdisplay-right-description">
        Fruits : Freshness Personified: Our farm-fresh fruits are handpicked at the peak of ripeness, ensuring maximum flavor and nutrition in every bite. From succulent strawberries to juicy oranges, each fruit is cultivated with care and dedication to bring nature's bounty straight to your table.
        <br/>
        Vegetables : From Farm to Fork: Experience the difference of farm-to-table freshness with our range of vegetables. Grown with sustainable practices and a commitment to quality, our vegetables are bursting with flavor, nutrients, and the wholesome goodness that only Mother Nature can provide.
        <br/>
        OrganicProducts : Pure and Wholesome: Embrace the purity of nature with our organic products, crafted with the highest standards of quality and integrity. Free from synthetic pesticides and GMOs, our organic offerings promise a wholesome and nourishing experience that respects both your health and the environment.
       </div>
       <br/>
       <button onClick = {()=>{addToCart(foundProduct.id)}}>Add To Cart</button>
       <p className='productdisplay-right-category'><span>Category : </span> Fresh Veggies , Fruits and Organic Material.</p>
       <p className='productdisplay-right-category'><span>Tags : </span> Fresh , Farmed.. </p>
      </div>
    </div>
  )
}

export default ProductDisplay
