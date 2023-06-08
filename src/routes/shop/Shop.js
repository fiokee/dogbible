import {Route, Routes} from 'react-router-dom'
import './shop.styles.scss';
// import ProductCard from "../../components/product-card/ProductCard";
import CategoriesPreview from '../categories-preview/Categories_Preview';
import Category from '../../components/category/Category';
const Shop =()=>{

    return(
      <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=':category' element={<Category/>} />
      </Routes>
      
    );
  };

  export default Shop;