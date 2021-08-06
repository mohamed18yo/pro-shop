import { useSelector, useDispatch } from "react-redux";
import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";

import CartCard from "../../../components/cartCard/cartCard";
import Button from "../../../components/button/button";
import { CartBox,ItemBox, RightBox,EmptyBox } from "./cart.style";

import { Typography, Line,ProductImg } from "../../../Global.style";
import { DeleteCartItem } from "../../../redux/Cart/cartAction";
import Meta from "../../../components/meta/meta";
function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const isEmpty= state.cart.cart.length > 0
  return<>
  <Meta
        title={'ProShop-Cart'}
        description={"ProShop-Cart"}
      />
   {isEmpty? (<SectionRole>
        <IneerSection>
          <CartBox>
            <ItemBox>
              {state.cart.cart.map((item) => (
                <CartCard
                  src={"https://proshop-ms.herokuapp.com/" + item.image}
                  product={item}
                  price={item.price}
                  title={item.name}
                  count={item.qty}
                  deleteFunction={() => {
                    dispatch(DeleteCartItem(item._id));
                  }}
                ></CartCard>
              ))}
            </ItemBox>
            <RightBox>
              <Typography color={"#242424"} fontSize={32}>
                Subtotal ({state.cart.cart.length}) items
              </Typography>
              {/* <Typography isThrough={true} color={"#242424"} fontSize={24}>$999.97</Typography> */}
              <Typography color={"#242424"} fontSize={38}>
                total price $
                {state.cart.cart
                  .reduce((acc, item) => {
                    return acc + item.price * item.qty;
                  }, 0)
                  .toFixed(2)}
              </Typography>
              <Line width={'100%'} color={"#cbcbcb"} />
              <Button
                link={"/proceed-checkout/shipping-address"}
                width={"100%"}
                text={"Proceed to checkout"}
              />
            </RightBox>
          </CartBox>
        </IneerSection>
      </SectionRole>):(<>
                        <SectionRole>
                          <IneerSection>
                            <EmptyBox>
                              <Typography fontSize={32} color={"#242424"}>
                                Your shopping cart is empty
                              </Typography>
                              <ProductImg src={"/emptyCart.png"} width={320} />
                            </EmptyBox>
                           </IneerSection>
                        </SectionRole>
                        
                      </>
      )}
    </>
}
export default Cart;
