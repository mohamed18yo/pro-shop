

import CategoriesSection from "./categoriesSection";
import HeroSection from './heroSection';
import FeaturedProductsSection from './featuredProductsSection';
import TopRateSection from './topRateSection';
import { useEffect, } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProducts, GetSliderProducts } from "../../../redux/Gust/gustAction";
import {SpinnerContainer} from '../../../Global.style';
    
function Home() {
  const dispatch= useDispatch()
  const state = useSelector((state) => state);
  const isLoading= state.gustState.isLoading;
const product= state.gustState.products

  // const [products, setProducts]= useState([])
  // const fetchDta= async function(){
  //   try{
  //     const res= await axios.get('products/top')
  //   setProducts(res.data)  
  //   }catch(e){
  //     console.log(e);
  //   }
    
  // }
  // const logPro=()=>{
  //   console.log(product)
  // }
  useEffect(()=>{  
    // fetchDta()
    dispatch(GetSliderProducts())
    dispatch(getFeaturedProducts())
    console.log(state.gustState.products)
    
  },[dispatch])
  return (isLoading?(<SpinnerContainer/>):(
      <>
      <HeroSection products={state?.gustState?.sliderImages} ></HeroSection>
      <CategoriesSection></CategoriesSection>
      <FeaturedProductsSection products={state.gustState.products}></FeaturedProductsSection>   
      <TopRateSection products={state?.gustState?.sliderImages} ></TopRateSection>
      </>
    )
    
      
    
  );
}

export default Home;     
