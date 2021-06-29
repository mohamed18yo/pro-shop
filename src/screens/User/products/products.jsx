

import { SectionRole,IneerSection, } from '../../../Global.style';
import ProductSection from './productSection';
import ReviewsSection from './reviewsSection';
import FeaturedProductsSection from '../../Gust/home/featuredProductsSection';
import {  useParams } from "react-router";
import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProducts, GetProductById } from '../../../redux/Gust/gustAction';

function ProductPage() {
    const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const params = useParams();
  

  console.log(state.gustState.product.isLoading)
  console.log(params.id)
  useEffect(() => {  
    dispatch(GetProductById(params.id));
    dispatch(getFeaturedProducts())
  }, [dispatch, params.id]);
    return <SectionRole>
        <IneerSection>
            <ProductSection product={state.gustState.product} ></ProductSection>
            <ReviewsSection product={state.gustState.product}></ReviewsSection>
            <FeaturedProductsSection products={state.gustState.products}></FeaturedProductsSection>
        </IneerSection>
    </SectionRole>
}
export default ProductPage; 