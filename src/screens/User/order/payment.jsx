import {
  SectionRole,
  Typography,
  IneerSection,
  Line,
  FlexRow,
  FlexCol,
  
  ProductImg
} from "../../../Global.style";
import Button from '../../../components/button/button'
import { OrderSection,Input, Lbox,Num, Rbox } from "./order.style";

function Payment() {
  return (
    <SectionRole>
      <IneerSection>
        <OrderSection>
          <Typography fontSize={32} color={"#242424"}>
           Review Order
          </Typography>
          <FlexRow style={{width: "682px",height: "40px"}}>

            <Typography fontSize={22} color={"#242424"}>
            <Num>&nbsp; 1 &nbsp;</Num>  Shipping and Payment
            </Typography>{" "}
            <Line width={140} />
            <Typography fontSize={22} color={"#707070"}>
            <Num isGray={true}>&nbsp; 2 &nbsp;</Num>  Place an Order
            </Typography>
          </FlexRow>
          <FlexRow>
            <Lbox>
              <Typography fontSize={32} color={"#242424"}>
                Shipping Address
              </Typography>
              <FlexRow style={{width:"774px" ,justifyContent: "space-between"}}>
                <FlexCol style={{height: "197px"}}>
                  <Typography fontSize={22} color={"#707070"}>
                    Country
                  </Typography>
                    <Input></Input>
                  <Typography fontSize={22} color={"#707070"}>
                    Zip Code
                  </Typography>
                  <Input></Input>
                </FlexCol >
                <FlexCol style={{height: "197px"}}>
                  <Typography fontSize={22} color={"#707070"}>
                  City
                  </Typography>
                    <Input></Input>
                  <Typography fontSize={22} color={"#707070"}>
                  Street Address
                  </Typography>
                  <Input></Input>
                </FlexCol>
                
              </FlexRow>
              <Typography fontSize={32} color={"#242424"}>
              Payment Details
              </Typography>
              <FlexRow style={{width:"774px" ,justifyContent: "space-between"}}>
                <FlexCol style={{height: "197px"}}>
                  <Typography fontSize={22} color={"#707070"}>
                    Country
                  </Typography>
                    <Input></Input>
                  <Typography fontSize={22} color={"#707070"}>
                    Zip Code
                  </Typography>
                  <Input></Input>
                </FlexCol>
                <FlexCol style={{height: "197px"}}>
                  <Typography fontSize={22} color={"#707070"}>
                  City
                  </Typography>
                    <Input></Input>
                  <Typography fontSize={22} color={"#707070"}>
                  Street Address
                  </Typography>
                  <Input></Input>
                </FlexCol>
                
              </FlexRow>
            </Lbox>
            <Rbox>
              <FlexRow>
                  <Typography fontSize={32} color={"#242424"}>
                     Order Details
                  </Typography>
                  <Typography fontSize={22} color={"#707070"}>
                    Change
                  </Typography>  
              </FlexRow>
              <FlexRow style={{width:"493px",height: "106px"}}>

                <ProductImg src={"/iphone.png"} width={135} />
                <FlexCol style={{height: "99px"}}>
                  <Typography fontSize={22} color={"#707070"}>
                   iPhone 11 Pro 256GB Memory
                  </Typography> 
                  <FlexRow>
                  <Typography fontSize={22} color={"#707070"}>
                  $499.99 ×1
                  </Typography> 
                  <Typography fontSize={22} color={"#707070"}>
                  $499.99
                  </Typography> 
                  </FlexRow>
                </FlexCol>
              </FlexRow >
              <Line width={'520px'} />
              <FlexRow  style={{width:"493px",height: "106px"}}>
                <ProductImg src={"/iphone.png"} width={135} />
                <FlexCol style={{height: "99px"}}>
                <Typography fontSize={22} color={"#707070"}>
                   iPhone 11 Pro 256GB Memory
                  </Typography> 
                  <FlexRow>
                  <Typography fontSize={22} color={"#707070"}>
                  $499.99 ×1
                  </Typography> 
                  <Typography fontSize={22} color={"#707070"}>
                  $499.99
                  </Typography> 
                  </FlexRow>
                </FlexCol>
              </FlexRow>
              <Line width={'520px'} />
              <FlexRow style={{width: "477px" }}>
                  <Typography fontSize={16} color={"#707070"}>
                  Subtotal
                      </Typography> 
                      <Typography fontSize={16} color={"#707070"}>
                      $589.98
                      </Typography> 
              </FlexRow>
              <FlexRow  style={{width: "477px"}}>
                  <Typography fontSize={16} color={"#707070"}>
                  Tax
                      </Typography> 
                      <Typography fontSize={16} color={"#707070"}>
                      $2.53
                      </Typography> 
              </FlexRow>
              <FlexRow style={{width: "477px"}}>
                  <Typography fontSize={16} color={"#707070"}>
                  Shipping
                      </Typography> 
                      <Typography fontSize={16} color={"#707070"}>
                      $0.00
                      </Typography> 
              </FlexRow>
              <FlexRow style={{width: "477px"}}>
                  <Typography fontSize={16} color={"#242424"}>
                  Total
                      </Typography> 
                      <Typography fontSize={16} color={"#242424"}>
                      $592.51
                      </Typography> 
              </FlexRow>

            </Rbox>
          </FlexRow>
          <FlexRow style={{justifyContent: "flex-end"}}>
            <Button  text={"Review order"} />
          </FlexRow>
        </OrderSection>
      </IneerSection>
    </SectionRole>
  );
}
export default Payment;
