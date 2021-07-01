import { ProductImg } from "../../screens/Gust/home/home.style";
import { Typography } from "../../Global.style";

import { SecCard,Cancel,Counter } from "./cartCard.style";

function CartCard(props) {
  return (
    <SecCard>
      <ProductImg width={250} src={props.src} />
      <Typography fontSize={24}> {props.title} </Typography>
      <Counter>
      <Typography style={{cursor:'pointer'}} fontSize={30}> ــ</Typography>
      <Typography fontSize={30}> {props.count}</Typography>
      <Typography style={{cursor:'pointer'}} fontSize={30}> +</Typography>
      </Counter>
      <Typography fontSize={30}>$ {props.price}</Typography>
      <Cancel onClick={props.deleteFunction}>×</Cancel>
      
    </SecCard>
  );
}
export default CartCard;
