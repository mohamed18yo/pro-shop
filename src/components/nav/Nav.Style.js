import { Link } from "react-router-dom";
import styled from "styled-components";
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
`;

export const NavBar = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: row;
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
  display: flex;
  align-items: center;
  justify-content: center;
  width: 152px;
  height: 40px;
  background-color: #fcdd06;
  font-size: 20px;
  color: black;
  border: none;
  border-radius: 5px;
  margin-left: -10px;
`;
export const List = styled("ul")`
  list-style: none;
  display: inherit;
`;
export const IconList = styled("li")`
   cursor: pointer;
  display: inline;
  margin-left: 2rem;
  color: #fff;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40px;
  width: auto;
  margin: auto 0 auto 32px;
  span {
    color: #000;
    background: #fcdd06;
    font-size: 8px;
    font-weight: 700;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 8px;
    top: 10px;
    z-index: 1;
  }
`;
export const LogoText = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-decoration: none;
`;   

export const Icon= styled(Link)`
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 40px;
  width: auto;
  margin: auto 0 auto 32px;
  span {
    color: #000;
    background: #fcdd06;
    font-size: 8px;
    font-weight: 700;
    border-radius: 50%;
    width: 13px;
    height: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    left: 8px;
    top: 10px;
    z-index: 1;
  }

`;
