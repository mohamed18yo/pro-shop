import styled from "styled-components";

import { FlexCol, FlexBox } from "../../Global.style";

// eslint-disable-next-line no-unused-vars
// import { FlexBox, FlexCol } from "../nav/Nav.Style";

export const Card = styled(FlexCol)`
  justify-content: flex-start;
  align-items: center;
  width: 30%;
  min-width:300px;
  height:${(props)=>props.height?props.height:"655px"};   
  height:auto;
  border-radius: 16px;
  background: #ffffff 0% 0% no-repeat padding-box;  
  margin:0 10px; 
  box-shadow: 0px 2px 20px #08091e1a;
  margin-bottom: 1rem;
  @media screen and (max-width:400px){
    width: 300px;
  }
`;
export const Box = styled(FlexBox)`
  width: 380px;
  height: 346px;
  background: #f7f8fc;
`;
