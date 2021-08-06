import styled from "styled-components";
import { FlexRow } from "../../Global.style";

export const SecCard = styled(FlexRow)`
  position: relative;
  justify-content: space-around;
  width: 100%;
  height:auto;
  min-height: 242px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  margin-bottom: 2rem;
  flex-wrap: wrap;
  padding:1rem;
  @media screen and (max-width:700px){
    font-size:22px;
  }
`;

export const Cancel = styled("span")`
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 22px;
  right: 27px;  
`;
export const Counter = styled(FlexRow)`
  padding:1rem;
  background: #fff;
  width: 20%;
  min-width:150px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`;
