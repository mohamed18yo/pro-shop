import {
  Typography,
  SpinnerContainer,
  FlexRow,
  ErrorMsg,
} from "../../../Global.style";
import { ReviewsBox, SubReviewsBox, ReviwInput } from "./products.style";
import ReviewCard from "../../../components/reviews/reviewCard";
import Rating from "@material-ui/lab/Rating";
import Button from "../../../components/button/button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { useLocationWithQuery } from "react-router-query-hooks";
import { AddReviewAction } from "../../../redux/Gust/gustAction";
import { ADD_REVIEW_RESET } from "../../../redux/Gust/gustTypeConstent";
function ReviewsSection({ product }) {
  const locationQuery = useLocationWithQuery();
  const {
    query: { review: reviewFromQuery, rating: ratingFromQuery },
  } = locationQuery;
  const state = useSelector((state) => state);
  const User = state?.userDetailes?.user;
  const [rating, setRating] = useState(ratingFromQuery ? ratingFromQuery : 0);
  const [review, setReview] = useState(reviewFromQuery ? reviewFromQuery : "");
  const [error, setError] = useState("");
  const location = useLocation();

  const dispatch = useDispatch();
  const message= state.gustState.addingReview.success 
  let Err= state?.gustState?.addingReview?.error;


  
  return product?.isLoading ? (
    <SpinnerContainer />
  ) : (
    <ReviewsBox>
      <Typography fontSize={32}>Reviews</Typography>
      <SubReviewsBox>
        <FlexRow>
          <Typography fontSize={28}>Add Review</Typography>
        </FlexRow>
        <ReviwInput
          type="text"
          placeholder={"Comment..."}
          required={true}
          onChange={(e) => {
            setReview(e.target.value);
          }}
          value={review}
        />

        <FlexRow>
          <Rating
            onClick={(n) => {
              setRating(n.target.value);
            }}
            name="rt"
            style={{ marginTop: 20 }}
            value={rating}
          />
        </FlexRow>
        <FlexRow>
          <Button
            link={
              User._id
                ? " "
                : `/login?pathname=${location.pathname}&rating=${rating}&review=${review}`
            }
            handleClick={() => {
              if (review && rating) {
                dispatch(
                  AddReviewAction({ comment: review, rating }, product.product._id)
                );
              } else {
                setError("Please write a comment and add rating");
              }
            }}
            style={{ marginTop: "2rem", marginBottom: "2rem" }}
            text={"Submit"}
          />
          {error ? <ErrorMsg style={{marginLeft:'2rem'}}>{error}</ErrorMsg> : null}
          {Err ? <ErrorMsg style={{marginLeft:'2rem'}}>{Err}</ErrorMsg> : null}
          {message ? <ErrorMsg style={{marginLeft:'2rem', color:'green'}}>{message}</ErrorMsg> : null}
        </FlexRow>

        {product?.product?.reviews?.map((item) => (
          <ReviewCard
            key={item.name}
            name={item.name}
            comment={item.comment}
            rating={item.rating}
            date={item.updatedAt}
          />
        ))}
        {/* {product?.product?.reviews?.length<1 &&(<Typography fontSize={28} >No Reviews</Typography>)} */}
      </SubReviewsBox>
    </ReviewsBox>
  );
}

export default ReviewsSection;
