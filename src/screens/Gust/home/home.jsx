

import CategoriesSection from "./categoriesSection";
import {Container} from './home.style';
import HeroSection from './heroSection';
import ProductSection from './productsSection';
import TopRateSection from './topRateSection';
import axios from 'axios';
import { useEffect } from "react";
import { useState } from "react";

    
function Home() {
  
  const [products, setProducts]= useState([])
  const fetchDta= async function(){
    try{
      const res= await axios.get('products/top')
    setProducts(res.data)
    }catch(e){
      console.log(e);
    }
    
  }

  useEffect(()=>{  
    fetchDta()
    
  },[])
  return (
    <Container>
      
      <HeroSection products={products}></HeroSection>
      <CategoriesSection></CategoriesSection>
      <ProductSection></ProductSection>   
      <TopRateSection></TopRateSection>
    </Container>
  );
}

export default Home;     
