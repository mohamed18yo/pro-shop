
import {
  SectionRole,
  IneerSection,
  NavBar,
  Button,
  InputSearch,
  List,
  IconList,
  LogoText
} from "./Nav.Style";
import { Typography } from "../../Global.style";
import { FlexBox } from "../../Global.style";
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
function Nav() {
  return (
    <SectionRole color={"#000"}>
      <IneerSection>
        <NavBar>
            <LogoText to={'/'}>
            <Typography fontSize={40} color={"#FCDD06"} >Pro</Typography>  <Typography fontSize={40} color={"#fff"} >Shop</Typography> 
            </LogoText>
            <FlexBox >
              <InputSearch></InputSearch> <Button> <SearchIcon></SearchIcon> Search</Button>
            </FlexBox>
            <FlexBox >
              <List >
                <Link to={"/login"}><IconList>User</IconList></Link>
                <Link to={"/profile"}><IconList>Wishlist</IconList></Link>
                <Link to={"/cart"}><IconList>Cart</IconList></Link>
              </List>
            </FlexBox>
          
        </NavBar>
      </IneerSection>
    </SectionRole>
  );
}
export default Nav;

// <section className="nav">
//   <div className="center">
//     <div className="logo">
//       <span className="pro">Pro</span>
//       <span>Shop</span>
//     </div>
//     <div className="search">
//       <input type="text" className="input-search" />
//       <button className="search-btn">Search</button>
//     </div>
//     <div className="icons">
//       <ul>
//         <li>User</li>
//         <li>WishList</li>
//         <li>Cart</li>
//       </ul>
//     </div>
//   </div>
// </section>
