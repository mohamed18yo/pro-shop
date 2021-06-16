import { Typography } from "../../Global.style";
import { ProductImg } from "../../screens/Gust/home/home.style";
import { boxCard, subBox } from "./boxCard.style";

function BoxCard() {
  return (
    <boxCard>
      <subBox>
        <ProductImg width={200} src={"/proplaystion.png"} />
      </subBox>
      <Typography fontSize={24} color={"#242424"}>
        LAPTOP{" "}
      </Typography>
    </boxCard>
  );
}
export default BoxCard;
