import {
  SectionRole,
  IneerSection,
  NavBar,
  Button,
  InputSearch,
  List,
  IconList,
  LogoText,
} from "./Nav.Style";
import { Typography } from "../../Global.style";
import { FlexBox } from "../../Global.style";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../redux/user/userAction";

const Style = {
  fontSize: 25,
  color: "#FFF",
  fill: "#FFF",
  margin: "auto 0 10px 0",
};

function Nav() {
  const dispatch = useDispatch();
  const User = useSelector((state) => state);
  console.log('profile state', User.userDetailes.user._id)
  const Logout = () => {
    dispatch(logoutAction());
  };
  return (
    <SectionRole color={"#000"}>
      <IneerSection>
        <NavBar>
          <LogoText to={"/"}>
            <Typography fontSize={40} color={"#FCDD06"}>
              Pro
            </Typography>{" "}
            <Typography fontSize={40} color={"#fff"}>
              Shop
            </Typography>
          </LogoText>
          <FlexBox>
            <InputSearch></InputSearch>{" "}
            <Button>
              {" "}
              <SearchIcon></SearchIcon> Search
            </Button>
          </FlexBox>
          <FlexBox>
            <List>
              {User.userDetailes.user._id ? (
                <Link to={"/profile"}>
                  <IconList>
                    <PersonIcon style={Style} />
                    Profile
                  </IconList>
                </Link>
              ) : (
                <Link to={"/login"}>
                  <IconList>
                    <PersonIcon style={Style} />
                    Login/Signup
                  </IconList>
                </Link>
              )}
              <Link to={"/login"}>
                <IconList>
                  <span>0</span> <BookmarkIcon style={Style} />
                  Wishlist
                </IconList>
              </Link>
              <Link to={"/cart"}>
                <IconList>
                  <span>0</span> <ShoppingCartIcon style={Style} />
                  Cart
                </IconList>
              </Link>
              {User.userDetailes.user._id && (
                <IconList onClick={Logout}>
                  <ExitToAppIcon style={Style} />
                  Logout
                </IconList>
              )}
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
