import {  SectionRole } from "../../../components/nav/Nav.Style";

import {
  HeroBox,
  FixedIneerSection,
  HeroTitle,
  SliderImage,
  SideBox,
  FixedRow,
  Arrow,
  Dot,
  
} from "./home.style";
import { Typography } from "../../../Global.style";
import Button from "../../../components/button/button";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";

const styles = {
  root: {
    position: "relative",
    width: "100%",
  },
  styleIcon: {
    fontSize: 35,
    color: "#06aefc",
    fill: "#06aefc",
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

function HeroSection({products}) {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = () => {};
  return (
    <SectionRole color={"#F2F2F2"}>
      <FixedIneerSection>
        <SwipeableViews
          style={Object.assign({}, styles.root, styles.root)}
          index={index}
          onChangeIndex={handleChangeIndex}
        > 
        {products.map((items)=> <HeroBox  key={items._id}> 
            <SideBox style={{maxWidth:'500px'}} >
              <Typography fontSize={32} color={"#242424"}>
                Save up to $ {items.price}
              </Typography>
              <HeroTitle>{items.name}</HeroTitle>
              {/* <Typography fontSize={32} color={"#242424"}>
                {items.description}
              </Typography> */}
              <Button
                radius={"20px"}
                style={{ marginTop: 42, height: 52 }}
                text={"SHOP NOW"}
                link={`/product/${items._id}/${items.name}`}
              />
            </SideBox>
            <SideBox>
              <SliderImage src={"https://proshop-ms.herokuapp.com/"+ items.image} width={"100%"} />
            </SideBox>
        </HeroBox>
         )} 
        </SwipeableViews>
        <FixedRow>
          <Arrow
            onClick={() => {
              if(index===0){
                setIndex(2);
              }else{
                setIndex(index - 1);
              }
              
            }}
            isLeft={true}
          >
            &#10095;
          </Arrow>
          {products.map((el, i) => 
              <Dot
              onClick={() => {
                setIndex(i);
              }}
              isGray={index !== i}
            />
            
          )}
          
          
          <Arrow
            onClick={() => {
              if(index===2){
                setIndex(0);
              }else{
                setIndex(index + 1);
              }
            }}
          >
            &#10095;
          </Arrow>
        </FixedRow>
      </FixedIneerSection>
    </SectionRole>
  );
}
export default HeroSection;
