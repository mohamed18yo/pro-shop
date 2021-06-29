import {  SectionRole } from "../../../components/nav/Nav.Style";

import { TopRateBox, Line, TopSubBox } from "./home.style";
import { Typography} from "../../../Global.style";
import ProductBox from "../../../components/productBox/productBox";

function RecentlyViewed() {
  return (
    <SectionRole>
      
        <TopRateBox>
          <Typography fontSize={32}>Recently Viewed</Typography>
          <Line color={"#FCDD06"} height={"7px"}></Line>
          <Line color={"#707070"} height={"1px"} width={"1640px"}></Line>

          <TopSubBox>
            <ProductBox
            
              src={"/iphone.png"}
              rate={5}
              price={499.99}
              title={"Apple iPhone 11 Pro 256GB Memory"}
              height={"540px"}
            ></ProductBox>
            <ProductBox
              src={"/iphone.png"}
              rate={5}
              price={499.99}
              title={"Apple iPhone 11 Pro 256GB Memory"}
              height={"540px"}
            ></ProductBox>
            <ProductBox
              src={"/iphone.png"}
              rate={5}
              price={499.99}
              title={"Apple iPhone 11 Pro 256GB Memory"}
              height={"540px"}
            ></ProductBox>
          </TopSubBox>
        </TopRateBox>
      
    </SectionRole>
  );
}

export default RecentlyViewed;
