


import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";


import  CartCard from "../../../components/cartCard/cartCard";
import  Button from "../../../components/button/button";
import { FlexCol } from "../../../Global.style";
import { CartBox,RightBox } from "./cart.style";

import { Typography,Line } from "../../../Global.style";
import { useSelector,useDispatch } from "react-redux";
import { DeleteCartItem } from "../../../redux/Cart/cartAction";



function Cart (){
  const state= useSelector(state=>state)
  const dispatch= useDispatch()
  return <SectionRole>
  <IneerSection>
    <CartBox>    
      <FlexCol>
        {state.cart.cart.map((item)=>(
          <CartCard 
                src={"https://proshop-ms.herokuapp.com/"+item.image} 
                price={item.price} 
                title={item.name}
                count={item.quantity}
                 deleteFunction={()=>{
                   dispatch(DeleteCartItem(item._id))
                   console.log('item deleted')}}
                 ></CartCard>
          ))}
      </FlexCol>
      <RightBox>
        <Typography color={"#242424"} fontSize={32}>Subtotal ({state.cart.cart.length}) items</Typography>
        {/* <Typography isThrough={true} color={"#242424"} fontSize={24}>$999.97</Typography> */}
        <Typography color={"#242424"} fontSize={38}>total price $
                                                                    {state.cart.cart
                                                                        .reduce((acc, item) => {
                                                                          return acc + item.price * item.quantity;
                                                                        }, 0)
              .toFixed(2)}</Typography>
        <Line width={384} color={"#cbcbcb"} /> 
        <Button link={"/proceed-checkout/shipping-address"} width={"324px"} text={"Proceed to checkout"} />
      </RightBox>
    </CartBox>
  </IneerSection>
</SectionRole>
}
export default Cart 
