import styled from "styled-components";

import { FlexRow, FlexCol, Typography } from "../../../Global.style";

import { Field } from "formik";

export const LoginSection = styled(FlexRow)`
  height: 709px;
  justify-content: space-between;
  margin-top: 2rem;
`;
export const Title = styled(Typography)`
  font-size: 60px;
  color: #242424;
  @media screen and ( max-width:400px) {
    font-size: 40px;
  }
`;
export const Description = styled(Typography)`
  font-size: 32px;
  color: #707070;
  margin: 16px 0;
  @media screen and (max-width: 400px){
    font-size: 20px;
    width:300px;
  }
`;
export const Label = styled(Typography)`
  font-size: 22px;
  color: #242424;
  @media screen and (max-width: 400px){
    font-size: 17px;
  }
`;

export const FormBox = styled(FlexCol)`
  width: 474px;
  height: 709px;
  @media screen and (max-width:400px){
    width:100%;
  }
`;

export const ImgBox = styled(FlexCol)`
  width: 60%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
export const Input = styled(Field)`
  width: 398px;
  height: 50px;
  border: 1px solid #242424;
  border-radius: 6px;
  opacity: 1;
  text-indent: 5px;
  padding: 1rem;
  margin: 15px 0;
  @media screen and (max-width: 400px) {
    width: 300px;
  }
`;
export const CBox = styled(FlexRow)`
  width: 386px;
  align-items: center;
  justify-content: center;
  @media screen and (max-width:400px){
    width:100%;
  }
`;
export const ErrorMsg = styled("span")`
  color: red;
  margin: 14px 0 14px;
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  font-size: 17px;
`;
export const SignupSection = styled(FlexRow)`
  height: 787;
  justify-content: space-between;
  margin-top: 2rem;
`;
