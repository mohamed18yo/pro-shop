import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";

import { ProductsBox, Line,Dot,FixedRow } from "./home.style";
import { Typography,FlexRow } from "../../../Global.style";
import ProductBox from "../../../components/productBox/productBox";
import {useState} from 'react';
import SwipeableViews from "react-swipeable-views";
import { Link } from "react-router-dom";


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

function FeaturedProductsSection({products}) {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = () => {};


      const chunkSize = window.innerWidth > 1100 ? 3 : window.innerWidth > 800 ? 2 : 1;

  return (
    <SectionRole color={"#F7F8FC"}>
      <IneerSection>
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
            {products.slice(index,chunkSize).map((item)=>
                    <ProductBox 
                      key={item._id}
                      id={item._id}
                      name={item.name}
                      src={"https://proshop-ms.herokuapp.com/" +item.image}
                      rate={item.rating}
                      price={item.price}
                      title={item.name}
                    ></ProductBox>       
            )}
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
      </IneerSection>
    </SectionRole>
  );
}

export default FeaturedProductsSection;
