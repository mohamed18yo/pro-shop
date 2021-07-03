import {
  Typography,
  Line,
  FlexRow,
  FlexCol,
  ProductImg,
  ErrorMsg
} from "../../../Global.style";
import { ShippingSchema } from "../../../validationSchema";
import Button from "../../../components/button/button";
import { Input, Lbox, Rbox } from "./order.style";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { addShippingAddress } from "../../../redux/Cart/cartAction";

export function PaymentComponent() {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector((state) => state);
  
    const handleSaveShipping = (value) => {
       
        dispatch(addShippingAddress(value));
        history.push("/proceed-checkout/place-order");
      };
  return (
    <>   
      <FlexRow style={{alignItems: "flex-start"}}>
      <Formik
            initialValues={{
            country: state.cart.shippingAddress.country || "",
            city: state.cart.shippingAddress.city || "",
            address: state.cart.shippingAddress.address || "",
            zipCode: state.cart.shippingAddress.zipCode || "",
            }}
            validationSchema={ShippingSchema()}
            onSubmit={handleSaveShipping}
        >
         {({ errors, touched })=>{
             return (
                <Form
              style={{
                width: "100%",
                // height: "100%",
                display: "flex",
                justifyContent: "start",
                alignItems: "start",
                flexDirection: "row",
              }}
            >
                <Lbox>
                    <Typography fontSize={32} color={"#242424"}>
                        Shipping Address
                    </Typography>
                    <FlexRow style={{ width: "774px", justifyContent: "space-between" }}>
                        <FlexCol style={{ height: "197px" }}>
                        <Typography fontSize={22} color={"#707070"}>
                            Country
                        </Typography>
                        <Input name={"country"}></Input>
                        {errors.country && touched.country ? (
                        <ErrorMsg>{errors.country}</ErrorMsg>
                      ) : null}
                        <Typography fontSize={22} color={"#707070"}>
                            Zip Code
                        </Typography>
                        <Input name={"zipCode"}></Input>
                        {errors.zipCode && touched.zipCode ? (
                        <ErrorMsg>{errors.zipCode}</ErrorMsg>
                      ) : null}
                        </FlexCol>
                        <FlexCol style={{ height: "197px" }}>
                            <Typography fontSize={22} color={"#707070"}>
                                City
                            </Typography>
                            <Input name={"city"}></Input>
                            {errors.city && touched.city ? (
                        <ErrorMsg>{errors.city}</ErrorMsg>
                      ) : null}
                            <Typography fontSize={22} color={"#707070"}>
                                Street Address
                            </Typography>
                            <Input name={"address"}></Input>
                            {errors.address && touched.address ? (
                        <ErrorMsg>{errors.address}</ErrorMsg>
                      ) : null}
                        </FlexCol>
                    </FlexRow>
                    <Typography fontSize={32} color={"#242424"}>
                        Payment Details
                    </Typography>
                    <FlexRow style={{ width: "774px", justifyContent: "space-between" }}>
                            <FlexCol style={{ height: "197px" }}>
                                <Typography fontSize={22} color={"#707070"}>
                                    visa
                                </Typography>
                                <Input></Input>
                                <Typography fontSize={22} color={"#707070"}>
                                    Code
                                </Typography>
                                <Input></Input>
                            </FlexCol>
                                {/* <FlexCol style={{height: "197px"}}>
                                        <Typography fontSize={22} color={"#707070"}>
                                        City
                                        </Typography>
                                            <Input></Input>
                                        <Typography fontSize={22} color={"#707070"}>
                                        Street Address
                                        </Typography>
                                        <Input></Input>
                                </FlexCol> */}
                    </FlexRow>
              </Lbox>
            
         <FlexCol>

        
        <Rbox>
          <FlexRow>
            <Typography fontSize={32} color={"#242424"}>
              Order Details
            </Typography>
            <Typography fontSize={22} color={"#707070"}>
              Change
            </Typography>
          </FlexRow>
          {state.cart.cart.map((item)=><>
          <FlexRow style={{ width: "493px", height: "106px" }}>
                        <ProductImg src={"https://proshop-ms.herokuapp.com"+item.image} width={135} />
                        <FlexCol style={{ height: "99px" }}>
                          <Typography style={{marginLeft:'1rem'}} fontSize={22} color={"#707070"}>
                          {item.name}
                          </Typography>
                          <FlexRow>
                            <Typography style={{marginLeft:'1rem'}} fontSize={22} color={"#707070"}>
                            ${item.price} ×{item.quantity}
                            </Typography>
                            <Typography fontSize={22} color={"#707070"}>
                            ${item.price}
                            </Typography>
                          </FlexRow>
                        </FlexCol>
                      </FlexRow>
                   <Line width={"520px"} />
                   </>
          )}
                      
         
          
         
          <FlexRow style={{ width: "477px" }}>
            <Typography fontSize={16} color={"#707070"}>
              Subtotal
            </Typography>
            <Typography fontSize={16} color={"#707070"}>
              $589.98
            </Typography>
          </FlexRow>
          <FlexRow style={{ width: "477px" }}>
            <Typography fontSize={16} color={"#707070"}>
              Tax
            </Typography>
            <Typography fontSize={16} color={"#707070"}>
              $2.53
            </Typography>
          </FlexRow>
          <FlexRow style={{ width: "477px" }}>
            <Typography fontSize={16} color={"#707070"}>
              Shipping
            </Typography>
            <Typography fontSize={16} color={"#707070"}>
              $0.00
            </Typography>
          </FlexRow>
          <FlexRow style={{ width: "477px" }}>
            <Typography fontSize={16} color={"#242424"}>
              Total
            </Typography>
            <Typography fontSize={16} color={"#242424"}>
              $592.51
            </Typography>
          </FlexRow>
          
        </Rbox>
        <FlexRow style={{ justifyContent: "flex-end" , marginTop:'1rem'}}>
        <Button text={"Review order"} />
      </FlexRow>
        </FlexCol>
    </Form>
            )
        }}
        
    </Formik>
</FlexRow>
      
    </>
  );
}
export default PaymentComponent;
