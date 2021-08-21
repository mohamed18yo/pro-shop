import styled from "styled-components";

import { FlexBox } from "../../Global.style";

// eslint-disable-next-line no-unused-vars
// import { FlexBox, FlexCol } from "../nav/Nav.Style";

import { Link } from "react-router-dom";

export const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  background: #fff;
  width: 30%;
  height: auto;
  border-radius: 16px;
  font-size: 24px;
  height: ${(props) => props.height};
  margin: ${(props) => (props.margin ? "0 43px" : "0")};
  /* border: 2px solid red; */
  margin: 0 15px;
  padding-bottom:40px;
  color: #000;
  text-decoration: none;
  ${(props) => (props.widthBorder ? "box-shadow: 0px 2px 20px #08091E1A;" : "")}
  @media screen and (max-width: 1500px) {
    margin-bottom: 30px;
    /* min-height: 700px; */
    padding:20px;
  }
  @media screen and (max-width: 1000px) {
    width:100%;
    margin-bottom: 30px;
  }
`;
export const Box = styled(FlexBox)`
  width: 380px;
  height: 346px;
  background: #f7f8fc;
`;
