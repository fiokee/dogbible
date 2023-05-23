import React, { useContext, Fragment} from "react";
import './shop.styles.scss';
import ProductCard from "../../components/product-card/ProductCard";
import {CategoriesContext} from '../../components/contexts/categoriesContext';

const Shop =()=>{

 const {categoriesMap} = useContext(CategoriesContext);

    return(
      <Fragment>
        {
          Object.keys(categoriesMap).map((title) =>(
          <Fragment key={title} >
          <h2 className="title">{title}</h2>
          <div className="products_container">
        
        {categoriesMap[title].map((product)=>(
              <ProductCard key={product.id} product={product}/>
        ))}
      </div>
          </Fragment>
          ))}
      </Fragment>
      
    );
  };

  export default Shop;