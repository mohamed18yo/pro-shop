import styled from 'styled-components';


import { FlexCol,FlexRow } from '../../../Global.style';



export const OrderSection= styled(FlexCol)`
    height: 890px;
`
export const Lbox = styled(FlexCol)`
width: 950px;
height: 652px;
    background: #F2F2F2 0% 0% no-repeat padding-box;
border-radius: 16px;
opacity: 1;
margin-right:1.5rem;
padding:3rem;
`
export const Rbox = styled(FlexCol)`
width: 536px;
height: 652px;
background: #F2F2F2 0% 0% no-repeat padding-box;
border-radius: 16px;
opacity: 1;
padding: 1rem;
`
export const Input = styled('input')`
    width: 360px;
height: 40px;
border: 1px solid #707070;
border-radius: 6px;
opacity: 1;
background:#F2F2F2;
`
export const Num = styled('span')`
    
    width: 40px;
    height: 40px;
    background: ${(props)=>props.isGray? "#707070" :"#FCDD06"}  ;
    color: ${(props)=>props.isGray? "#FFFFFF" :"#00000"}  ;
    opacity: 1;
`
export const ReviewOrderSection= styled(FlexCol)`
    height:798px;
    margin-top:2rem;
`
export const ShippingBox= styled(FlexCol)`
    width: 950px;
    height: 652px;
    background: #F2F2F2 0% 0% no-repeat padding-box;
    border-radius: 16px;
    opacity: 1;
    padding:2rem;
` 
export const OrderDetailsBox= styled(FlexCol)`
    width: 400px;
    height: 280px;
    background: #F2F2F2 0% 0% no-repeat padding-box;
    border-radius: 16px;
    opacity: 1;
    margin-left:2rem;
    margin-bottom:2rem;
    padding:2rem;
`
export const CenterBox=styled(FlexCol)`
    width: 813px;
    height: 277px;
`
export const OrdersBox=styled(FlexCol)`
    width: 461px;
    height: 229px;
`
export const PaymetnBox= styled(FlexCol)`
    width: 813px;
    height: 80px;
`