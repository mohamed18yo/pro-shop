import { Typography, FlexRow } from "../../Global.style";
import Rating from "@material-ui/lab/Rating";

import { CardBox, DescreptionBox } from "./review.style";
function ReviewCard(props) {
  return (
    <CardBox>
      <Typography fontSize={24}>{props.name}</Typography>
      <FlexRow>
        <Rating name="read-only" value={props.rating} readOnly />
        <Typography fontSize={16} color={"#707070"}>
        {props.date}
        </Typography>
      </FlexRow>
      <DescreptionBox>
        <Typography fontSize={16}>
        {props.comment}
        </Typography>
      </DescreptionBox>
    </CardBox>
  );
}
export default ReviewCard;