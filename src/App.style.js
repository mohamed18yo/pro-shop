import styled from "styled-components";

export const MineComponent = styled("main")`
  max-width: 1920px;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  
`;
export const Typography= styled("p")`
font-size: ${props=>props.fontSize}px;
color: ${props=> props.color};
`
export const Button= styled("Button")`
     width: auto;
     padding:5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FCDD06;
    color: #fff;
    height:25px;
    border:none;
    border-radius: 5px;
    cursor: pointer;
    &:hover{
        background: green;
    }
`