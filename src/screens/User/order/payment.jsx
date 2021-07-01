import {
  SectionRole,
  Typography,
  IneerSection,
  Line,
  FlexRow,
} from "../../../Global.style";
import Button from '../../../components/button/button'
import { OrderSection,Num } from "./order.style";
import PaymentComponent from './paymentComponent';
import ReviewOrder from './reviewOrder'
import { useLocation } from "react-router";
function Payment() {
  const location = useLocation();
  const isShippingPage = location.pathname.includes("shipping-address");
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
            <Num isGray={isShippingPage}>&nbsp; 2 &nbsp;</Num>  Place an Order
            </Typography>
          </FlexRow>
          {isShippingPage ? <PaymentComponent /> : <ReviewOrder />}
        </OrderSection>
      </IneerSection>
    </SectionRole>
  );
}
export default Payment;
