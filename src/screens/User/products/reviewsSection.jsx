

import {
    Typography,
    
  } from "../../../Global.style";
import {
    ReviewsBox,SubReviewsBox
  } from "./products.style";
import ReviewCard from '../../../components/reviews/reviewCard'  
function ReviewsSection(){
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