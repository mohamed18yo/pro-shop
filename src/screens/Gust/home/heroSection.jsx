import { IneerSection, SectionRole } from "../../../components/nav/Nav.Style";

import {
  HeroBox,
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
function HeroSection() {
  const [index, setIndex] = useState(0);
  
  return (
    <SectionRole color={"#F2F2F2"}>
      <IneerSection>
        <HeroBox>
          <FlexRow>
            <SideBox>
              <Typography fontSize={32} color={"#242424"}>
                Save up to $39.99
              </Typography>
              <HeroTitle>PlayStation 5</HeroTitle>
              <Typography fontSize={32} color={"#242424"}>
                Lightning-fast download speed with super-fast SSD storage
              </Typography>
              <Button
                radius={"20px"}
                style={{ marginTop: 42, height: 52 }}
                text={"SHOP NOW"}
              />
            </SideBox>
            <SideBox width={"30%"}>
              <ProductImg src={"/playstation.png"} width={"507px"} />
            </SideBox>
          </FlexRow>

          <FixedRow>
            <Arrow
              onClick={() => {
                setIndex(index - 1);
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
                setIndex(index + 1);
              }}
            >
              &#10095;
            </Arrow>
          </FixedRow>
        </HeroBox>
      </IneerSection>
    </SectionRole>
  );
}
export default HeroSection;
