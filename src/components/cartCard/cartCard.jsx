import { ProductImg } from "../../screens/Gust/home/home.style";
import { Typography } from "../../Global.style";

import { SecCard,Cancel,Counter } from "./cartCard.style";
import { useDispatch } from "react-redux";
import { AddCartItem } from "../../redux/Cart/cartAction";
import { Link } from "react-router-dom";

function CartCard(props) {
  const dispatch= useDispatch()

  return (
    <SecCard>
      <ProductImg width={'26%'} src={props.src} />
      <Typography
        style={{width:"300px"}}
        color={"#242424"}
        as={Link}
        to={`/product/${props.product._id}/${props.product.name}` }
        fontSize={24}> {props.title} </Typography>
      <Counter>
      <Typography onClick={()=>{
            if(props.product.qty>1){
              dispatch(AddCartItem(props.product,-1))
            }
          }} style={{cursor:'pointer'}} fontSize={30}> ــ</Typography>
      <Typography fontSize={30}> {props.count}</Typography>
      <Typography onClick={()=>{
            if(props.product.qty < props.product.countInStock){
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
