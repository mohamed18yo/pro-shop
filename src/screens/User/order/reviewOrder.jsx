import {
  SectionRole,
  Typography,
  IneerSection,
  Line,
  FlexRow,
  FlexCol,
  ProductImg,
} from "../../../Global.style";
import Button from "../../../components/button/button";
import {
  ReviewOrderSection,
  ShippingBox,
  OrderDetailsBox,
  Num,
  CenterBox,
  OrdersBox,
  PaymetnBox,
} from "./order.style";

function ReviewOrder() {
  return (
    <SectionRole>
      <IneerSection>
        <ReviewOrderSection>
          <Typography fontSize={32} color={"#242424"}>
            Review Order
          </Typography>
          <FlexRow style={{ width: "682px", height: "40px" }}>
            <Typography fontSize={22} color={"#707070"}>
              <Num>&nbsp; 1 &nbsp;</Num> Shipping and Payment
            </Typography>{" "}
            <Line width={140} />
            <Typography fontSize={22} color={"#242424"}>
              <Num >&nbsp; 2 &nbsp;</Num> Place an Order
            </Typography>
          </FlexRow>
          <FlexRow style={{alignItems: 'flex-start'}}>
            <ShippingBox>
              <Typography fontSize={24} color={"#242424"}>
                Shipping Address
              </Typography>
              <Typography fontSize={22} color={"#242424"}>
                John rose
              </Typography>
              <Typography fontSize={16} color={"#707070"}>
                56051 Jones Falls, Philippines, Turkey - 62502
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
                  <FlexRow style={{ width: "461px", height: "106px" }}>
                    <ProductImg src={"/iphone.png"} width={135} />
                    <FlexCol style={{ height: "99px" }}>
                      <Typography fontSize={16} color={"#707070"}>
                        iPhone 11 Pro 256GB Memory
                      </Typography>
                      <FlexRow>
                        <Typography fontSize={16} color={"#707070"}>
                          $499.99 ×1
                        </Typography>
                        <Typography fontSize={16} color={"#707070"}>
                          $499.99
                        </Typography>
                      </FlexRow>
                    </FlexCol>
                  </FlexRow>
                  <FlexRow style={{ width: "461px", height: "106px" }}>
                    <ProductImg src={"/iphone.png"} width={135} />
                    <FlexCol style={{ height: "99px" }}>
                      <Typography fontSize={16} color={"#707070"}>
                        iPhone 11 Pro 256GB Memory
                      </Typography>
                      <FlexRow>
                        <Typography fontSize={16} color={"#707070"}>
                          $499.99 ×1
                        </Typography>
                        <Typography fontSize={16} color={"#707070"}>
                          $499.99
                        </Typography>
                      </FlexRow>
                    </FlexCol>
                  </FlexRow>
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
                    $589.98
                  </Typography>
                </FlexRow>
                <FlexRow >
                  <Typography fontSize={16} color={"#707070"}>
                    Tax
                  </Typography>
                  <Typography fontSize={16} color={"#707070"}>
                    $2.53
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
                    $592.51
                  </Typography>
                </FlexRow>
              </OrderDetailsBox>
              <Button text={"Place Order"} />
            </FlexCol>
          </FlexRow>
        </ReviewOrderSection>
      </IneerSection>
    </SectionRole>
  );
}
export default ReviewOrder;
