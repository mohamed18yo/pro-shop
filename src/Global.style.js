import styled from "styled-components";


export const FlexBox = styled("div")`
  display: flex;
  justify-content:center;
  align-items: center;
`;
export const FlexCol = styled(FlexBox)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around
`;
export const FlexRow = styled(FlexBox)`
  flex-direction: row; 
  justify-content:space-between;
  align-items: center;
  width:100%
`;


export const MineComponent = styled("main")`
  max-width: 1920px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction:column;
  width:${(props) => (props.width ? props.width : "100%")};
`;
export const Box = styled('div')`
  display: flex; 
`
export const Typography = styled("p")`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
`;
export const Button = styled("Button")`
  min-width: 25%;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fcdd06;
  color: #fff;
  height: 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background: green;
  }
`;
