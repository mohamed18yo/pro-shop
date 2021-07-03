import { ProductImg } from "../../screens/Gust/home/home.style";
import { Typography } from "../../Global.style";

import { SecCard,Cancel,Counter } from "./cartCard.style";
import { useDispatch } from "react-redux";
import { AddCartItem } from "../../redux/Cart/cartAction";

function CartCard(props) {
  const dispatch= useDispatch()

  return (
    <SecCard>
      <ProductImg width={250} src={props.src} />
      <Typography fontSize={24}> {props.title} </Typography>
      <Counter>
      <Typography onClick={()=>{
            if(props.product.quantity>1){
              dispatch(AddCartItem(props.product,-1))
            }
          }} style={{cursor:'pointer'}} fontSize={30}> ــ</Typography>
      <Typography fontSize={30}> {props.count}</Typography>
      <Typography onClick={()=>{
            if(props.product.quantity < props.product.countInStock){
              dispatch(AddCartItem(props.product,1))
            }
          }} style={{cursor:'pointer'}} fontSize={30}> +</Typography>
      </Counter>
      <Typography fontSize={30}>$ {props.price}</Typography>
      <Cancel onClick={props.deleteFunction}>×</Cancel>
      
    </SecCard>
  );
}
export default CartCard;
