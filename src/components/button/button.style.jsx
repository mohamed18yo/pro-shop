import styled from "styled-components";

export const CustomeButton = styled("button")`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "200px")};
  height: 62px;
  color: #242424;
  background-color: ${(props) => (props.isGray ? "#f2f2f2" : "#FCDD06")};
  border: none;
  border-radius: ${(props) => (props.radius ? props.radius : '10px')};
  font-size: 24px;
  cursor: pointer;
  style:${(props)=> props.style};
`;
