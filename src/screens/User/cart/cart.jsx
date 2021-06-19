


import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";


import  CartCard from "../../../components/cartCard/cartCard";
import  Button from "../../../components/button/button";
import { FlexCol } from "../../../Global.style";
import { CartBox,RightBox } from "./cart.style";

import { Typography,Line } from "../../../Global.style";



function Cart (){
  return <SectionRole>
  <IneerSection>
    <CartBox>    
      <FlexCol>
      <CartCard src={"/iphone.png"} price={499.2} title={"Apple iPhone 11 Pro 256GB Memory"} count={2}></CartCard>
      <CartCard src={"/iphone.png"} price={499.2} title={"Apple iPhone 11 Pro 256GB Memory"} count={2}></CartCard>
      <CartCard src={"/iphone.png"} price={499.2} title={"Apple iPhone 11 Pro 256GB Memory"} count={2}></CartCard>
      <CartCard src={"/iphone.png"} price={499.2} title={"Apple iPhone 11 Pro 256GB Memory"} count={2}></CartCard>
      </FlexCol>
      <RightBox>
        <Typography color={"#242424"} fontSize={32}>Subtotal (3) items</Typography>
        <Typography isThrough={true} color={"#242424"} fontSize={24}>$999.97</Typography>
        <Typography color={"#242424"} fontSize={38}>$989.97</Typography>
        <Line width={384} color={"#cbcbcb"} /> 
        <Button width={"324px"} text={"Proceed to checkout"} />
      </RightBox>
    </CartBox>
  </IneerSection>
</SectionRole>
}
export default Cart 
