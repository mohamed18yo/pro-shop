import styled from "styled-components";

import { FlexCol } from "../../../Global.style";

import { Field } from "formik";

export const OrderSection = styled(FlexCol)`
  height: auto;
  width: 100%;
`;
export const Lbox = styled(FlexCol)`
  /* width: 950px; */
  min-width: 340px;
  width: 65%;
  min-height: 652px;
  height: auto;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  margin-right: 1.5rem;
  margin-bottom:1.5rem;
  padding: 1.5rem;
`;
export const Rbox = styled(FlexCol)`
  /* width: 536px; */
  height: 652px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  padding: 1rem;
  
`;
export const Input = styled(Field)`
  min-width: 300px;
  height: 40px;
  border: 1px solid #707070;
  border-radius: 6px;
  opacity: 1;
  background: #f2f2f2;
`;
export const Num = styled("span")`
  width: 40px;
  height: 40px;
  background: ${(props) => (props.isGray ? "#707070" : "#FCDD06")};
  color: ${(props) => (props.isGray ? "#FFFFFF" : "#00000")};
  opacity: 1;
`;
export const ReviewOrderSection = styled(FlexCol)`
  height: 798px;
  margin-top: 2rem;
`;
export const ShippingBox = styled(FlexCol)`
  width:65%;
  min-width:320px;
  min-height: 700px;
  margin:1rem 1rem;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  padding: 1rem;
`;
export const OrderDetailsBox = styled(FlexCol)`
  width: 100%;
  min-width:300px;
  height: 280px;
  background: #f2f2f2 0% 0% no-repeat padding-box;
  border-radius: 16px;
  opacity: 1;
  margin-bottom: 2rem;
  padding: 2rem;
`;
export const CenterBox = styled(FlexCol)`
  /* width: 813px; */
  width: 100%;
  height: auto;
`;
export const OrdersBox = styled(FlexCol)`
  /* width: 461px; */
  width:50%;
  min-width:300px;
  min-height: 229px;
`;
export const PaymetnBox = styled(FlexCol)`
  /* width: 813px; */
  width:100%;
  height: 80px;
`;
