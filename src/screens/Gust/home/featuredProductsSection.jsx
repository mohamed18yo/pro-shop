import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";

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

function FeaturedProductsSection({products}) {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = () => {};
// get screen width 
    const chunkSize = window.innerWidth > 1100 ? 3 : window.innerWidth > 800 ? 2 : 1;
// constract array slider
     const arr=[...products]
      const productArray=[] 

            for (let index = 0; index < arr.length; index++) {
              productArray.push(arr.splice(0, chunkSize))
              
            }
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
         
            {productArray.map((item)=>
            <FlexRow key={item._id} style={{ marginTop: 50}}>
                      {item.map((pro)=><ProductBox 
                      product={pro}
                      key={pro._id}
                      id={pro._id}
                      name={pro.name}
                      src={"https://proshop-ms.herokuapp.com/" +pro.image}
                      rate={pro.rating}
                      price={pro.price}
                      title={pro.name}
                    ></ProductBox>  )}
                </FlexRow>
            )}

           </SwipeableViews>
          <FixedRow  style={{marginTop:"2rem"}}>
                    {productArray.map((dot,i)=>
                        <Dot
                        onClick={() => {
                          setIndex(i);
                        }}
                        isGray={index !== i}
                      />
                    )}
            
            
          </FixedRow>
        </ProductsBox>
      </IneerSection>
    </SectionRole>
  );
}

export default FeaturedProductsSection;
