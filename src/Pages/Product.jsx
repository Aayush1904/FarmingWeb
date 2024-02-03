import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Breadcrum from '../Components/Breadcrums/Breadcrum';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productid } = useParams();
  console.log('Product ID:', productid);
  const [foundProduct, setFoundProduct] = useState(null);
  useEffect(() => {
    // If all_product is fetched asynchronously, find the product here
    setFoundProduct(all_product.find((e) => e.id === Number(productid)));
  }, [foundProduct,all_product, productid]);
  console.log('foundProduct in Product:', foundProduct);
  
  return (
    <div>
      {foundProduct && (
        <div>
          <Breadcrum foundProduct={foundProduct} />
          <ProductDisplay foundProduct={foundProduct} />
          <DescriptionBox />
          <RelatedProducts />
        </div>
      )}
      {!foundProduct && <p>Loading product...</p>}
    </div>
  );
};

export default Product;

