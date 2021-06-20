import styled from "styled-components";

import { FlexRow, FlexCol } from "../../../Global.style";

export const CartBox = styled(FlexRow)`
  margin: 3rem auto ;
  justify-content:space-between;
  align-items: start;
`;
export const RightBox = styled(FlexCol)`
  align-items: center;
  width: 384px;
  height: 351px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
`;
export const EmptyBox= styled(FlexCol)`
  height: 421px;
`
