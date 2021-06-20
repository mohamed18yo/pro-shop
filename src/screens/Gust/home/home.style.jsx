import styled from "styled-components";
import { IneerSection } from "../../../components/nav/Nav.Style";

import { FlexCol, FlexRow, FlexBox } from "../../../Global.style";

export const FixedIneerSection =styled(IneerSection)`
      flex-direction:column;
`
export const Container = styled("div")`
  max-width: 1920px;
  width: 100%;
`;
export const SideBox = styled(FlexCol)`
  width: ${(props) => (props.width ? props.wdith : "40%")};
  height: 100%;
`;
export const FixedRow = styled(FlexRow)`
  width: auto;
  justify-content: space-between;
`;
export const HeroBox = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: 678px;
`;
export const HeroTitle = styled("h1")`
  color: #242424;
  font-size: 60px;
`;

export const ProductImg = styled("img")`
  width: ${(props) => (props.width ? props.width : "200px")};
  object-fit: cover;
`;
export const Dot = styled("div")`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 0 10.5px;
  cursor: pointer;
  background: ${(props) => (props.isGray ? "#70707030" : "#FCDD06")};
`;

export const Arrow = styled(FlexBox)`
  font-size: 35px;
  margin: 0 23px;
  color: #000;
  width: 30px;
  font-weight: 700;
  cursor: pointer;
  ${(props) => (props.isLeft ? "transform: rotate(-180deg)" : "")}
`;
export const FeaturedBox = styled(FlexCol)`
  height: 483px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 2rem;
  width: 100%;
`;
export const Line = styled("hr")`
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "1px")};
  color: ${(props) => (props.color ? props.color : "#000")};
  
`;
export const Cards = styled(FlexRow)`
  margin-top: 2rem;
`;

export const ProductsBox = styled(FlexCol)`
  height: 948px;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
`;
export const TopRateBox = styled(ProductsBox)`
  height: 897px;
  align-items: flex-start;
`;

export const TopSubBox = styled(FlexRow)`
  margin-top:2rem;
  width: 1640px;
  height: 588px;
  border: 1px solid #fcdd06;
  border-radius: 16px; 
  
`;

