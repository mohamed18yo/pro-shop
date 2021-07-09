

import {
    Typography,
    FlexRow,
    FlexCol,
    ProductImg,
    SectionRole,
    IneerSection
  } from "../../../Global.style";
  import {
    ShippingBox,
    OrderDetailsBox,
    CenterBox,
    OrdersBox,
    PaymetnBox,
  } from "../payment/order.style";
  import { useSelector } from "react-redux";
 
 function Order(){
    const state= useSelector((state)=>state)

    return (
      <SectionRole>
        <IneerSection style={{marginTop:'4rem'}} >
        <FlexRow style={{alignItems: 'flex-start'}}>
          <ShippingBox style={{justifyCcontent: 'space-around'}}>
            <Typography fontSize={24} color={"#242424"}>
              Shipping Address
            </Typography>
            <Typography fontSize={22} color={"#242424"}>
            {state.userDetailes.user.name}
            </Typography>
            <Typography fontSize={16} color={"#707070"}>
                {state.cart.shippingAddress.country}-
                {state.cart.shippingAddress.city}
            </Typography>
            <CenterBox>
              <FlexRow>
                <Typography fontSize={24} color={"#242424"}>
                  Order Details
                </Typography>
                <Typography fontSize={22} color={"#707070"}>
                  Change
                </Typography>
              </FlexRow>

              <OrdersBox>
                {state.cart.cart.map((item)=><FlexRow style={{ width: "461px", height: "106px" }}>
                  <ProductImg src={"https://proshop-ms.herokuapp.com"+item.image} width={135} />
                  <FlexCol style={{ height: "99px" }}>
                    <Typography fontSize={16} color={"#707070"}>
                      {item.name}
                    </Typography>
                    <FlexRow>
                      <Typography fontSize={16} color={"#707070"}>
                        ${item.price} ×{item.quantity}
                      </Typography>
                      <Typography fontSize={16} color={"#707070"}>
                        ${item.price}
                      </Typography>
                    </FlexRow>
                  </FlexCol>
                </FlexRow>
                )}

              </OrdersBox>
            </CenterBox>
            <PaymetnBox>
              <FlexRow>
                <Typography fontSize={24} color={"#242424"}>
                  Payment Details
                </Typography>
                <Typography fontSize={22} color={"#707070"}>
                  Change
                </Typography>
              </FlexRow>
              <Typography fontSize={16} color={"#242424"}>
                Visa **** 1245
              </Typography>
            </PaymetnBox>
          </ShippingBox>
          <FlexCol style={{alignItems:'flex-end'}}>
            <OrderDetailsBox>
              <Typography fontSize={24} color={"#242424"}>
                Order Details
              </Typography>
              <FlexRow >
                <Typography fontSize={16} color={"#707070"}>
                  Subtotal
                </Typography>
                <Typography fontSize={16} color={"#707070"}>
                  $ {state.cart.cart.reduce((acc, item)=>{
                    return acc+item.price*item.quantity
                  },0).toFixed(2)}
                </Typography>
              </FlexRow>
              <FlexRow >
                <Typography fontSize={16} color={"#707070"}>
                  Tax
                </Typography>
                <Typography fontSize={16} color={"#707070"}>
                  $0.00
                </Typography>
              </FlexRow>
              <FlexRow >
                <Typography fontSize={16} color={"#707070"}>
                  Shipping
                </Typography>
                <Typography fontSize={16} color={"#707070"}>
                  $0.00
                </Typography>
              </FlexRow>
              <FlexRow >
                <Typography fontSize={16} color={"#242424"}>
                  Total
                </Typography>
                <Typography fontSize={16} color={"#242424"}>
                  ${state.cart.cart.reduce((acc, item)=>{
                    return acc+item.price*item.quantity
                  },0).toFixed(2)}
                </Typography>
              </FlexRow>
            </OrderDetailsBox>
          </FlexCol>
        </FlexRow>
        </IneerSection>
      </SectionRole>
        
     
   
);
}

export default Order