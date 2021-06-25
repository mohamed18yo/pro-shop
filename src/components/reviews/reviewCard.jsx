import { Typography, FlexRow } from "../../Global.style";
import Rating from "@material-ui/lab/Rating";

import { CardBox, DescreptionBox } from "./review.style";
function ReviewCard() {
  return (
    <CardBox>
      <Typography fontSize={24}>Jenifer Medhurst</Typography>
      <FlexRow>
        <Rating name="read-only" value={4} readOnly />
        <Typography fontSize={16} color={"#707070"}>
          28th March 2022
        </Typography>
      </FlexRow>
      <DescreptionBox>
        <Typography fontSize={16}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita.
        </Typography>
      </DescreptionBox>
    </CardBox>
  );
}
export default ReviewCard;