// import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";

import { ProductsBox, Line,Dot,FixedRow } from "./home.style";
import { Typography,FlexRow } from "../../../Global.style";
import ProductBox from "../../../components/productBox/productBox";
import {useState} from 'react';
import SwipeableViews from "react-swipeable-views";


const styles = {
  root: {
    position: "relative",
    width: "100%",
  },
  styleIcon: {
    fontSize: 35,
    color: "#FCDD06",
    fill: "#FCDD06",
    cursor: "pointer",
  },
  styleIconSave: {
    fontSize: 40,
    color: "#242424",
    fill: "#242424",
    opacity: 0.3,
  },
  styleIconArrow: {
    fontSize: 40,
    color: "#242424",
  },
  styleIconArrowBack: {
    fontSize: 40, 
    color: "#707070",
    opacity: 0.3,
  },
};

function FeaturedProductsSection() {
  
  const [index, setIndex] = useState(0);
  const handleChangeIndex = () => {};
    
  return (
   

        <ProductsBox>
          <Typography fontSize={32}>Featured Categories</Typography>
          <Line style={{ marginTop: 25}} color={"#FCDD06"} height={"7px"}></Line>
          <Line color={"#a0a0a0"} height={"1px"} width={"1640px"}></Line>

          
        <SwipeableViews
          style={Object.assign({}, styles.root, styles.root)}
          index={index}
          onChangeIndex={handleChangeIndex}
          >
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
           </SwipeableViews>
         

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
    
  );
}

export default FeaturedProductsSection;
