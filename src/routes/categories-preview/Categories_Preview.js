import React, { useContext, Fragment} from "react";

import Product_Preview from "../../components/product-preview/Product_Preview";
import {CategoriesContext} from '../../components/contexts/categoriesContext';

const Categories_Preview =()=>{

 const {categoriesMap} = useContext(CategoriesContext);

    return(
      <Fragment>
        {
          Object.keys(categoriesMap).map((title) =>{
          const products = categoriesMap[title];

          return(
            <Product_Preview key={title} products={products}/>
          )
        })}
      </Fragment>
      
    );
  };

  export default Categories_Preview;