import styled from "styled-components";


import { Link } from "react-router-dom";

export const CustomeButton = styled(Link)`

  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "250px")};
  height: 62px;
  color: #242424;
  background-color: ${(props) => (props.isGray ? "#f2f2f2" : "#06aefc")};
  border: none;
  border-radius: ${(props) => (props.radius ? props.radius : "10px")};
  font-size: 15px;
  cursor: pointer;
  margin-bottom:30px;
  style: ${(props) => props.style};
  ${(props) =>props.disabled? `background:gray;
                               color:white;
                               cursor: none;`: ""}        
`;
