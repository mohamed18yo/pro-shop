import styled from "styled-components";
import { FlexCol, FlexRow, FlexBox } from "../../../components/nav/Nav.Style";

export const Container = styled("div")`
  max-width: 1920px;
  width: 100%;
`;
export const SideBox = styled(FlexCol)`
  width: 40%;
  align-items: start;
  height: 100%;
`;

export const HeroBox = styled(FlexCol)`
  justify-content: space-between;
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
  background:${(props=> props.isGray?'#70707030':"#FCDD06")};
`;

export const Arrow= styled(FlexBox)`
    font-size:35px;
    margin:0 23px;
    color:#000;
    width:30px;
    font-weight:700;
    cursor:pointer;
    ${(props)=> props.isLeft?"transform: rotate(-180deg)":""}
`
export const FeaturedBox = styled(FlexCol)`
  height: 483px;
  align-items: flex-start;
  justify-content: flex-start;
  margin-top: 2rem;
`;
export const Line = styled("hr")`
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "1px")};
  color: ${(props) => (props.color ? props.color : "#000")};
`;
export const Cards = styled(FlexRow)`
  margin-top: 2rem;
`;
