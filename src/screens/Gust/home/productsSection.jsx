import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";

import { ProductsBox, Line,Dot,FixedRow } from "./home.style";
import { Typography,FlexRow } from "../../../Global.style";
import ProductBox from "../../../components/productBox/productBox";
import {useState} from 'react'
function ProductSection() {
  const [index,setIndex]= useState(0)
    
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
          <FixedRow  style={{marginTop:"2rem"}}>
            <Dot
              onClick={() => {
                setIndex(0);
              }}
              isGray={index !== 0}
            />
            <Dot
              onClick={() => {
                setIndex(1);
              }}
              isGray={index !== 1}
            />
            <Dot
              onClick={() => {
                setIndex(2);
              }}
              isGray={index !== 2}
            />
            
          </FixedRow>
        </ProductsBox>
      </IneerSection>
    </SectionRole>
  );
}

export default ProductSection;
