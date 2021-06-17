import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";

import { ProductsBox, Line } from "./home.style";
import { Typography,FlexRow } from "../../../Global.style";
import ProductBox from "../../../components/productBox/productBox";

function ProductSection() {
  return (
    <SectionRole color={"#F7F8FC"}>
      <IneerSection>
        <ProductsBox>
          <Typography fontSize={32}>Featured Categories</Typography>
          <Line style={{ marginTop: 25}} color={"#FCDD06"} height={"7px"}></Line>
          <Line color={"#707070"} height={"1px"} width={"1640px"}></Line>
          <FlexRow  style={{ marginTop: 50}}>
            <ProductBox
              src={"/iphone.png"}
              rate={5}
              price={499.99}
              title={"Apple iPhone 11 Pro 256GB Memory"}
            ></ProductBox>
            <ProductBox
              src={"/iphone.png"}
              rate={5}
              price={499.99}
              title={"Apple iPhone 11 Pro 256GB Memory"}
            ></ProductBox>
            <ProductBox
              src={"/iphone.png"}
              rate={5}
              price={499.99}
              title={"Apple iPhone 11 Pro 256GB Memory"}
            ></ProductBox>
          </FlexRow>
        </ProductsBox>
      </IneerSection>
    </SectionRole>
  );
}

export default ProductSection;
