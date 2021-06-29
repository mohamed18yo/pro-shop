

import {
    Typography,
    SpinnerContainer
  } from "../../../Global.style";
import {
    ReviewsBox,SubReviewsBox
  } from "./products.style";
import ReviewCard from '../../../components/reviews/reviewCard'  
function ReviewsSection({product}){
  // const today = Date.now();
  // console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today));
    return(product?.isLoading?
       <SpinnerContainer/>:(
        <ReviewsBox >
            <Typography fontSize={32} >Reviews</Typography>
            <SubReviewsBox>
              {product?.product?.reviews?.map((item)=><ReviewCard name={item.name} comment={item.comment} rating={item.rating} date={item.updatedAt} />)}
              {product?.product?.reviews?.length<1 &&(<Typography fontSize={28} >No Reviews</Typography>)}
            </SubReviewsBox>
            
        </ReviewsBox>
      )
    )
     
}

export default ReviewsSection