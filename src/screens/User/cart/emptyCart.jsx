import {
  Typography,
  ProductImg,
  IneerSection,
  SectionRole,
  Container
} from "../../../Global.style";
import { EmptyBox } from "./cart.style";
import RecentlyViewed from "../../Gust/home/recentlyViewed";

function EmptyCart() {
  return (
    <Container>
      <SectionRole>
        <IneerSection>
          <EmptyBox>
            <Typography fontSize={32} color={"#242424"}>
              Your shopping cart is empty
            </Typography>
            <ProductImg src={"/emptyCart.png"} width={400} />
          </EmptyBox>
        </IneerSection>
      </SectionRole>
      <RecentlyViewed />
    </Container>
  );
}
export default EmptyCart;
