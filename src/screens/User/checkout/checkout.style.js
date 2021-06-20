import styled from 'styled-components'

import { FlexRow,FlexCol } from "../../../Global.style";


export const CheckoutBox = styled(FlexCol)`
margin-top:2rem;
    height:472px;
    width:100%;
    align-items: center;
  justify-content: center;
`
export const UpBox= styled(FlexCol)`
    width: 1640px;
    height: 372px;
    background: #F2F2F2 0% 0% no-repeat padding-box;
    border-radius: 16px;
    opacity: 1;
    padding-left:3rem;
  
`
export const PayInfo= styled(FlexRow)`
    width :60%;
`
export const DownBox = styled(FlexRow)`
    margin-top:2rem;
    justify-content: flex-end;
`