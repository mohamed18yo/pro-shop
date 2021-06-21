import {  SectionRole } from "../../../components/nav/Nav.Style";

import {
  HeroBox,
  FixedIneerSection,
  HeroTitle,
  ProductImg,
  SideBox,
  FixedRow,
  Arrow,
  Dot,
  
} from "./home.style";
import { Typography, FlexRow } from "../../../Global.style";
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
        > {products.map((items)=> <HeroBox>
          <FlexRow>
            <SideBox>
              <Typography fontSize={32} color={"#242424"}>
                Save up to $ {items.price}
              </Typography>
              <HeroTitle>{items.name}</HeroTitle>
              <Typography fontSize={32} color={"#242424"}>
                {items.description}
              </Typography>
              <Button
                radius={"20px"}
                style={{ marginTop: 42, height: 52 }}
                text={"SHOP NOW"}
              />
            </SideBox>
            <SideBox width={"30%"}>
              <ProductImg src={"https://proshop-ms.herokuapp.com/"+ items.image} width={"507px"} />
            </SideBox>
          </FlexRow>
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
