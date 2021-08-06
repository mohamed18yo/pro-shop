import styled from "styled-components";

import { FlexRow, FlexCol } from "../../../Global.style";

export const CartBox = styled(FlexRow)`
  margin: 3rem auto ;
  justify-content:space-between;
  align-items: start;
  flex-wrap: wrap;
  width:100%;
`;
export const ItemBox= styled(FlexCol)`
    width:70%;
    min-width:300px;

    @media screen and (max-width:700px){
      width:100%;
  }
`
export const RightBox = styled(FlexCol)`
  align-items: center;
  width: 25%;
  min-width:300px;
  height: 351px;
  padding:1rem;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
`;
export const EmptyBox= styled(FlexCol)`
  height: 421px;
`
