import styled from 'styled-components';

import { FlexRow,FlexCol } from '../../../../Global.style'


export const LoginSection=styled(FlexRow)`
    height:709px;
    justify-content: flex-start;
    margin-top:2rem;
`
export const FormBox= styled(FlexCol)`
width: 474px;
height: 709px;
`
export const ImgBox= styled(FlexCol)`
margin-left:147px;
`
export const Input=styled('input')`
    width: 398px;
    height: 40px;
    border: 1px solid #242424;
    border-radius: 6px;
    opacity: 1;
`
export const CBox=styled(FlexRow)`
    width:386px;
    align-items:center;
    justify-content:center;
`;
