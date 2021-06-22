import styled from 'styled-components';

import { FlexRow,FlexCol } from '../../../../Global.style'

import { Field} from 'formik';

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
export const Input=styled(Field)`
    width: 398px;
    height: 50px;
    border: 1px solid #242424;
    border-radius: 6px;
    opacity: 1;
    text-indent:5px ;
    padding:1rem;
    
`
export const CBox=styled(FlexRow)`
    width:386px;
    align-items:center;
    justify-content:center;
`;
export const ErrorMsg = styled("span")`
  color: red;
  margin: -14px 0 14px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  font-size: 12px;
`;