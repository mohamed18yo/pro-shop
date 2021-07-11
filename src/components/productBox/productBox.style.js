import styled from "styled-components";

import { FlexCol, FlexBox } from "../../Global.style";

// eslint-disable-next-line no-unused-vars
// import { FlexBox, FlexCol } from "../nav/Nav.Style";

export const Card = styled(FlexCol)`
  justify-content: flex-start;
  align-items: center;
  width: 520px;
  height:${(props)=>props.height?props.height:"655px"};   
  border-radius: 16px;
  background: #ffffff 0% 0% no-repeat padding-box;  
  margin:10px 0 50px 0; 
  box-shadow: 0px 2px 20px #08091e1a;
`;
export const Box = styled(FlexBox)`
  width: 380px;
  height: 346px;

  background: #f7f8fc;
`;
