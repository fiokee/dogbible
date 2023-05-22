import React, { useContext, Fragment} from "react";
import './shop.styles.scss';
import ProductCard from "../../components/product-card/ProductCard";
import {CategoriesContext} from '../../components/contexts/categoriesContext';

const Shop =()=>{

 const {categoriesMap} = useContext(CategoriesContext);

    return(
      <div className="products_container">
        
        {/* {
          categoriesMap.map((product)=>(
              <ProductCard key={product.id} product={product}/>
          ))
        } */}
      </div>
    )
  }

  export default Shop;