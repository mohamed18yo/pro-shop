

import { SectionRole,IneerSection, } from '../../../Global.style';
import ProductSection from './productSection';
import ReviewsSection from './reviewsSection';
import FeaturedProductsSection from '../../Gust/home/featuredProductsSection';
import {  useParams } from "react-router";
import { useEffect,  } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedProducts, GetProductById } from '../../../redux/Gust/gustAction';
import Meta from '../../../components/meta/meta';

function ProductPage() {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);
    const params = useParams();
  console.log(state)
  useEffect(() => {  
    dispatch(GetProductById(params.id));
    dispatch(getFeaturedProducts())
  }, [dispatch, params.id]);


    return <>
     <Meta
        title={state.gustState.product?.product?.name}
        description={state.gustState.product?.product?.description}
      />
     <SectionRole>
        <IneerSection>
            <ProductSection product={state.gustState.product} ></ProductSection>
            <ReviewsSection product={state.gustState.product}></ReviewsSection>
            <FeaturedProductsSection products={state.gustState.products}></FeaturedProductsSection>
        </IneerSection>
    </SectionRole>
    </>
}
export default ProductPage; 