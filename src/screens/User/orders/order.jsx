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
import { useParams } from "react-router";
import { useEffect } from "react";

function Order() {
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    GetOrderById(id);
  }, [id]);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const isLoading= false;
  // state.order.initialState.orderById.isLoading;
  console.log('isLoading from ordar page:',state)
  return isLoading ? (
    <SpinnerContainer />
  ) : (
    <SectionRole>
      <IneerSection style={{ marginTop: "4rem" }}>
        <FlexRow style={{ flexWrap: "wrap", alignItems: "flex-start" }}>
          <ShippingBox style={{ justifyCcontent: "space-around" }}>
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
                {state.cart.cart.map((item) => (
                  <FlexRow style={{ width: "100%", height: "106px" }}>
                    <ProductImg
                      src={"https://proshop-ms.herokuapp.com" + item.image}
                      width={135}
                    />
                    <FlexCol style={{margin:'8px', height: "99px" }}>
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
          <FlexCol style={{margin:'1rem', alignItems: "flex-end" }}>
            <OrderDetailsBox>
              <Typography fontSize={24} color={"#242424"}>
                Order Details
              </Typography>
              <FlexRow>
                <Typography fontSize={16} color={"#707070"}>
                  Subtotal
                </Typography>
                <Typography fontSize={16} color={"#707070"}>
                  ${" "}
                  {state.cart.cart
                    .reduce((acc, item) => {
                      return acc + item.price * item.quantity;
                    }, 0)
                    .toFixed(2)}
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
                  $
                  {state.cart.cart
                    .reduce((acc, item) => {
                      return acc + item.price * item.quantity;
                    }, 0)
                    .toFixed(2)}
                </Typography>
              </FlexRow>
            </OrderDetailsBox>
            <PayPalButton
              amount={state?.order?.userOrders?.order?.orderItems
                .reduce((acc, item) => acc + item.price * item.qty, 0)
                .toFixed(2)}
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
          </FlexCol>
        </FlexRow>
      </IneerSection>
    </SectionRole>
  );
}

export default Order;
