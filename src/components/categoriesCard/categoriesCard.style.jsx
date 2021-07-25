import styled from "styled-components";

import { FlexCol,FlexBox } from "../../Global.style";


// eslint-disable-next-line no-unused-vars
// import { FlexBox, FlexCol } from "../nav/Nav.Style";


export const Card = styled(FlexCol)`
  justify-content: flex-start;
  align-items: center;
  width: 380px;
  height: 392px;
@media screen and (max-width:400px){
  width:300px;
}
  
`;
export const Box = styled(FlexBox)`    
  width: 380px;
  height: 346px;
  border-radius: 16px;
  background: #F7F8FC;
`;
