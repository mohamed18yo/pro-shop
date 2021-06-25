import styled from "styled-components";

export const FlexBox = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FlexCol = styled(FlexBox)`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;
export const FlexRow = styled(FlexBox)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
export const Container = styled("div")`
  max-width: 1920px;
  width: 100%;
`;

export const MainComponent = styled("main")`
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const SectionRole = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1920px;
  width: 100%;
  background: ${(props) => props.color};
`;
export const IneerSection = styled("div")`
  display: flex;
  width: 90%;
  align-items: center;
  justify-content: center;
  flex-direction:column;
`;
export const Box = styled("div")`
  display: flex;
`;
export const Typography = styled("p")`
  font-size: ${(props) => props.fontSize}px;
  color: ${(props) => props.color};
  text-decoration: ${(props) => (props.isThrough ? "line-through" : "none")};
`;
export const ProductImg = styled("img")`
  width: ${(props) => (props.width ? props.width : "200px")};
  object-fit: cover;
`;
export const PrivetButton = styled("Button")`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #fff;
  color: #000;
  cursor: pointer;
  width: 220px;
  height: 56px;
  border: 3px solid #fcdd06;
  border-radius: 20px;
  font-size: 22px;
letter-spacing: 0.88px;
color: #242424;
text-transform: capitalize;
opacity: 1;
  /* &:hover {
    background: green;
  } */
`;
export const Line = styled("hr")`
  width: ${(props) => (props.width ? props.width : "200px")};
  height: ${(props) => (props.height ? props.height : "1px")};
  color: ${(props) => (props.color ? props.color : "#000")};
`;
export const Input=styled('input')`
    width: 398px;
    height: 40px;
    border: 1px solid #242424;
    border-radius: 6px;
    opacity: 1;
`
export const Counter = styled(FlexRow)`
  padding:1rem;
  background: #fff;
  width: 204px;
  height: 40px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
`;
