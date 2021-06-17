



import styled from "styled-components";
export const SectionRole = styled('div')`
  display:flex;
  justify-content: center;
  align-items:center;
  max-width: 1920px;
  width: 100%;
  background: ${(props) => props.color};
`;
export const IneerSection = styled('div')`
  display:flex;
  width: 90%;
  align-items:center;
  justify-content:center;
`;

export const NavBar = styled('div')`
  width: 100%;
  display:flex;
  flex-direction:row;
  height: 85px;
  justify-content: space-between;
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
