import {
  Typography,
  FlexRow,
  FlexCol,
  ProductImg,
  SectionRole,
  IneerSection,
  SpinnerContainer,
} from "../../../Global.style";
import {
  ShippingBox,
  OrderDetailsBox,
  CenterBox,
  OrdersBox,
  PaymetnBox,
} from "../payment/order.style";
import { useDispatch, useSelector } from "react-redux";
import { PayPalButton } from "react-paypal-button-v2";
import { GetOrderById, payOrder } from "../../../redux/order/orderAction";
// import { useParams } from "react-router";
import { useEffect } from "react";

function Order(props) {
  // const params = useParams();
  const dispatch = useDispatch();
  const id = props.match.params.id;
  useEffect(() => {
    dispatch(GetOrderById(id));
  }, [dispatch, id]);
  const state = useSelector((state) => state);
  const isLoading = state.ord?.orderById?.isLoading;
  const Order = state.ord?.orderById?.order;
  console.log('OOOreder',Order);
  // state.order.initialState.orderById.isLoading;
  // console.log("isLoading from ordar page:", state.order.orderById?.isLoading);
  // console.log("orderByid from ordar page:", state.order.orderById.order);

  return isLoading ? (
    <SpinnerContainer />
  ) : (
    <SectionRole>
      <IneerSection style={{ marginTop: "4rem" }}>
        <FlexRow style={{ flexWrap: "wrap", alignItems: "flex-start" }}>
          
          <ShippingBox style={{ justifyCcontent: "space-around" }}>
            <FlexRow>
            <Typography fontSize={24} color={"#242424"}>
              Shipping Address
            </Typography>
            <Typography fontSize={24} color={Order.isPaid?"green":"red"}>
              {Order.isPaid?"Paid":"No Paid" }
            </Typography>
            <Typography fontSize={24} color={Order.isDelivered?"green":"red"}>
              {Order.isDelivered && Order.isPaid ?"Delivered":"No Delivered" }
            </Typography>
          </FlexRow>
            
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
                {Order?.orderItems?.map((item) => (
                  <FlexRow style={{ width: "100%", height: "106px" }}>
                    <ProductImg
                      src={"https://proshop-ms.herokuapp.com" + item.image}
                      width={135}
                    />
                    <FlexCol style={{ margin: "8px", height: "99px" }}>
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
                ))}
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
          <FlexCol style={{ margin: "1rem" }}>
            <OrderDetailsBox>
              <Typography fontSize={24} color={"#242424"}>
                Order Details
              </Typography>
              <FlexRow>
                <Typography fontSize={16} color={"#707070"}>
                  Subtotal
                </Typography>
                <Typography fontSize={16} color={"#707070"}>
                  ${Order?.totalPrice}
                </Typography>
              </FlexRow>
              <FlexRow>
                <Typography fontSize={16} color={"#707070"}>
                  Tax
                </Typography>
                <Typography fontSize={16} color={"#707070"}>
                  $0.00
                </Typography>
              </FlexRow>
              <FlexRow>
                <Typography fontSize={16} color={"#707070"}>
                  Shipping
                </Typography>
                <Typography fontSize={16} color={"#707070"}>
                  $0.00
                </Typography>
              </FlexRow>
              <FlexRow>
                <Typography fontSize={16} color={"#242424"}>
                  Total
                </Typography>
                <Typography fontSize={16} color={"#242424"}>
                  ${Order?.totalPrice}
                </Typography>
              </FlexRow>
            </OrderDetailsBox>
            {!Order.isPaid ? (
              <PayPalButton
                amount={Order?.totalPrice}
                // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                onSuccess={(details, data) => {
                  alert(
                    "Transaction completed by " + details.payer.name.given_name
                  );
                  const payResalt = {
                    email_address: details.payer.email_address,
                    status: details.status,
                    create_time: details.create_time,
                    update_time: details.update_time,
                    id: details.id,
                  };
                  // OPTIONAL: Call your server to save the transaction
                  dispatch(payOrder(id, payResalt));
                  // return fetch("/paypal-transaction-complete", {
                  //   method: "post",
                  //   body: JSON.stringify({
                  //     orderId: data.orderID
                  //   })
                  // });
                }}
                onError={(error) => {
                  console.log(error);
                }}
                options={{
                  clientId:
                    "AcRsv5mb-LjZUfgY-n9SK9wOW64M26N1efQUBoBNBbo0XkV85KrzyPkFw3q1JEVK8NhQj1mjwmmyINbW",
                }}
              />
            ) : null}
          </FlexCol>
        </FlexRow>
      </IneerSection>
    </SectionRole>
  );
}

export default Order;
