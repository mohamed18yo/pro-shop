

import {
    Typography,
    
  } from "../../../Global.style";
import {
    ReviewsBox,SubReviewsBox
  } from "./products.style";
import ReviewCard from '../../../components/reviews/reviewCard'  
function ReviewsSection(){
  // const today = Date.now();
  // console.log(new Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(today));
    return <ReviewsBox>
            <Typography fontSize={32} >Reviews</Typography>
            <SubReviewsBox>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
                <ReviewCard></ReviewCard>
            </SubReviewsBox>
            
    </ReviewsBox>
}

export default ReviewsSection