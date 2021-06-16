import styled from "styled-components";

export const FlexBox = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  /* width:${(props) => props.width} */
`;
export const FlexCol = styled(FlexBox)`
  flex-direction: column;
`;
export const FlexRow = styled(FlexBox)`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;

export const SectionRole = styled(FlexBox)`
  max-width: 1920px;
  width: 100%;
  background: ${(props) => props.color};
`;
export const IneerSection = styled(FlexRow)`
  width: 90%;
  justify-content: space-between;
`;

export const NavBar = styled(IneerSection)`
  height: 85px;
  justify-content: space-around;
  width: 100%;
`;

export const Logo = styled("img")`
  width: 10%;
`;
export const InputSearch = styled("input")`
  width: 553px;
  height: 40px;
  border-radius: 6px;
  border: none;
  text-indent: 1rem;
  &:focus {
    border: none;
    outline: none;
  }
`;
export const Button = styled("Button")`
  width: 152px;
  height: 40px;
  background-color: #fcdd06;
  color: black;
  border: none;
  border-radius: 5px;
  margin-left: -10px;
`;
export const List = styled("ul")`
  list-style: none;
`;
export const IconList = styled("li")`
  display: inline;
  margin-left: 2rem;
  color: #fff;
`;
