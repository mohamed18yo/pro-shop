import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";

import { TopRateBox, Line ,TopSubBox} from "./home.style";
import { Typography,FlexRow } from "../../../Global.style";
import ProductBox from "../../../components/productBox/productBox";

function TopRatSection() {
  return (
    <SectionRole >
      <IneerSection>
        <TopRateBox>
          <Typography fontSize={32}>TOP RATE PRODUCTS</Typography>
          <Line color={"#FCDD06"} height={"7px"}></Line>
          <Line color={"#707070"} height={"1px"} width={"1640px"}></Line>

          <TopSubBox >
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
          </TopSubBox>
        </TopRateBox>
      </IneerSection>
    </SectionRole>
  );
}

export default TopRatSection;
