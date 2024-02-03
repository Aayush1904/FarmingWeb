import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
      <p>Fruits : Freshness Personified: Our farm-fresh fruits are handpicked at the peak of ripeness, ensuring maximum flavor and nutrition in every bite. From succulent strawberries to juicy oranges, each fruit is cultivated with care and dedication to bring nature's bounty straight to your table.</p>
      <p>Vegetables : From Farm to Fork: Experience the difference of farm-to-table freshness with our range of vegetables. Grown with sustainable practices and a commitment to quality, our vegetables are bursting with flavor, nutrients, and the wholesome goodness that only Mother Nature can provide.</p>
      <p>OrganicProducts : Pure and Wholesome: Embrace the purity of nature with our organic products, crafted with the highest standards of quality and integrity. Free from synthetic pesticides and GMOs, our organic offerings promise a wholesome and nourishing experience that respects both your health and the environment.</p>
      </div>
    </div>
  )
}

export default DescriptionBox

