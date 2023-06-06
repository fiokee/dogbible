import {Route, Routes} from 'react-router-dom'
import './shop.styles.scss';
// import ProductCard from "../../components/product-card/ProductCard";
import CategoriesPreview from '../categories-preview/Categories_Preview';

const Shop =()=>{

    return(
      <Routes>
        <Route index element={<CategoriesPreview/>}/>
      </Routes>
      
    );
  };

  export default Shop;