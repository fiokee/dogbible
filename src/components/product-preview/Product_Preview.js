import React, { Fragment } from 'react';
import ProductCard from '../product-card/ProductCard';
import './product-preview.style.scss';

const Product_Preview = ({title, products}) => {
  return (
    <Fragment>
    <div className='category-preview-container'>
        <h2>
            <span className='title'>{title}</span>
        </h2>
        <div className='preview'>

        {products
            .filter((_, idx)=> idx < 4 )
            .map((product)=>(
             <ProductCard key={product.id} product={product}/>

             ))}
        </div>
    </div>

    </Fragment>
  )
}

export default Product_Preview