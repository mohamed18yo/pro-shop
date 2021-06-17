
import {
  SectionRole,
  IneerSection,
  NavBar,
  Button,
  InputSearch,
  List,
  IconList,
} from "./Nav.Style";
import { Typography } from "../../Global.style";
import { FlexBox } from "../../Global.style";
import { FlexRow } from "../../Global.style";
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
function Nav() {
  return (
    <SectionRole color={"#000"}>
      <IneerSection>
        <NavBar>
            <FlexBox>
            <Typography fontSize={40} color={"#FCDD06"} >Pro</Typography>  <Typography fontSize={40} color={"#fff"} >Shop</Typography> 
            </FlexBox>
            <FlexBox >
              <InputSearch></InputSearch> <Button>Search</Button>
            </FlexBox>
            <FlexBox >
              <List >
                <IconList>User</IconList>
                <IconList>Wishlist</IconList>
                <IconList>Cart</IconList>
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
