import { ProductImg } from "../../screens/Gust/home/home.style";
import { Typography } from "../../Global.style";

import { SecCard,Cancel,Counter } from "./cartCard.style";

function CartCard(props) {
  return (
    <SecCard>
      <ProductImg width={250} src={"/playstation.png"} />
      <Typography fontSize={24}> {props.title} </Typography>
      <Counter>
      <Typography fontSize={30}> ــ</Typography>
      <Typography fontSize={30}> {props.count}</Typography>
      <Typography fontSize={30}> +</Typography>
      </Counter>
      <Typography fontSize={30}>$ {props.price}</Typography>
      <Cancel>×</Cancel>
      
    </SecCard>
  );
}
export default CartCard;
