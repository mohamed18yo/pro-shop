

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

  useEffect(()=>{  
  
    dispatch(GetSliderProducts())
    dispatch(getFeaturedProducts())
    
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
