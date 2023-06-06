import React, { useContext} from "react";
import './shop.styles.scss';
// import ProductCard from "../../components/product-card/ProductCard";
import Product_Preview from "../../components/product-preview/Product_Preview";
import {CategoriesContext} from '../../components/contexts/categoriesContext';

const Shop =()=>{

 const {categoriesMap} = useContext(CategoriesContext);

    return(
      <div className="shop-container">
        {
          Object.keys(categoriesMap).map((title) =>{
          const products = categoriesMap[title];

          return(
            <Product_Preview key={title} products={products}/>
          )
        })}
      </div>
      
    );
  };

  export default Shop;