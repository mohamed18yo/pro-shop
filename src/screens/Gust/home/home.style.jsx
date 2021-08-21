import styled from "styled-components";
import { IneerSection } from "../../../components/nav/Nav.Style";

import { FlexCol, FlexRow, FlexBox } from "../../../Global.style";

export const FixedIneerSection = styled(IneerSection)`
  flex-direction: column;
`;
export const Container = styled("div")`
  max-width: 1920px;
  width: 100%;
`;
export const SideBox = styled(FlexCol)`
  max-width: 510px;
  height: 100%;
  @media screen and(min-width:400) {
    width: 300px;
  }
`;
export const FixedRow = styled(FlexRow)`
  width: auto;
  justify-content: space-between;
`;
export const HeroBox = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 678px;
  @media screen and (max-width: 1100px) {
    height: auto;
    min-height: 590px;
    flex-direction: column-reverse;
  }
`;
export const HeroTitle = styled("h1")`
  color: #242424;
  font-size: 60px;
  @media screen and (min-width: 400px) {
    font-size: 35px;
  }
`;

export const ProductImg = styled("img")`
  width: ${(props) => (props.width ? props.width : "200px")};
  min-width: 200px;
  object-fit: cover;
`;
export const Dot = styled("div")`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 0 10.5px;
  cursor: pointer;
  background: ${(props) => (props.isGray ? "#70707030" : "#06aefc")};
`;
export const SliderImage = styled(ProductImg)`
  border-radius: 10px;
  margin-top: 2rem;
  margin-bottom: 1rem;
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
  min-height: 483px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 2rem;
  width: 100%;
  @media screen and (max-width: 1100px) {
    /* height: auto;
    min-height: 590px;
    flex-direction: column; */
    /* justify-content: center;
    align-items:center; */
  }
`;
export const Line = styled("hr")`
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "1px")};
  color: ${(props) => (props.color ? props.color : "#000")};
`;
export const Cards = styled(FlexRow)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  flex-wrap: wrap;

  @media screen and (max-width: 1100px) {
    justify-content: center;
  }
`;

export const ProductsBox = styled(FlexCol)`
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  margin-top: 2rem;
`;
export const TopRateBox = styled(ProductsBox)`
  height: auto;
  align-items: flex-start;
  padding:1rem;
`;

export const TopSubBox = styled(FlexRow)`
  padding-top: 1rem;
  margin-top:2rem;
  max-width: 1640px;
  width: 100%;
  /* height: 588px; orginal height */
  align-items:flex-start;
  height: auto;
  min-height:700px;
  border: 1px solid #06aefc;
  border-radius: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;
export const BoxResult = styled(FlexRow)`
  width: 100%;
  flex-wrap: wrap;
  margin-top: 4rem;
`;
