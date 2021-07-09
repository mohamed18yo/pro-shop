import {
  SectionRole,
  IneerSection,
  NavBar,
  Button,
  InputSearch,
  List,
  IconList,
  LogoText,
  SearchBox,
  IconeBox,
  ListIcon,
  Minu,
  MinuIcon,
} from "./Nav.Style";
import { Typography,FlexRow,FlexCol } from "../../Global.style";
import SearchIcon from "@material-ui/icons/Search";
import PersonIcon from "@material-ui/icons/Person";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutAction } from "../../redux/user/userAction";
import { MenuOutlined } from "@material-ui/icons";
import { useState } from "react";
// import { useHistory } from "react-router";

const Style = {
  fontSize: 25,
  color: "#FFF",
  fill: "#FFF",
  margin: "auto 0 10px 0",
};
const MinuStyle={
  fontSize: 30,
  color: "#000",
  fill: "#000",
  margin: "auto 0 10px 0",
}
function Nav() {
  const [isMinuOpen, setIsMinuOpen] = useState(false);
  const dispatch = useDispatch();
  // const history= useHistory()
  const User = useSelector((state) => state);
  console.log("profile state", User.userDetailes.user._id);
  const Logout = () => {
    dispatch(logoutAction());
  };
  return (
    <>  
      {isMinuOpen ? (
        <Minu>
          <FlexRow >
          <Typography style={{cursor: 'pointer'}} onClick={()=>{setIsMinuOpen(false)}} fontSize={40}>&nbsp; &nbsp;X</Typography>
          </FlexRow>
              <LogoText onClick={()=>{setIsMinuOpen(false)}} to={"/"}>
                <Typography color={"#000"}>Pro</Typography>{" "}
                <Typography color={"#fff"}>Shop</Typography>
              </LogoText>
              <FlexCol style={{alignItems: 'flex-start',height:"300px"}}>
              {User.userDetailes.user._id ? (
                    <Link onClick={()=>{setIsMinuOpen(false)}} to={"/profile"}>
                      <MinuIcon>
                        <PersonIcon style={MinuStyle} />
                        Profile
                      </MinuIcon>
                    </Link>
                  ) : (
                    <Link onClick={()=>{setIsMinuOpen(false)}} to={"/login"}>
                      <MinuIcon>
                        <PersonIcon style={MinuStyle} />
                        Login/Signup
                      </MinuIcon>
                    </Link>
                  )}
                  <Link onClick={()=>{setIsMinuOpen(false)}} to={"/login"}>
                    <MinuIcon>
                      <span>0</span> <BookmarkIcon style={MinuStyle} />
                      Wishlist
                    </MinuIcon>
                  </Link>
                  <Link onClick={()=>{setIsMinuOpen(false)}} to={"/cart"}>
                    <MinuIcon>
                      <span>0</span> <ShoppingCartIcon style={MinuStyle} />   
                      Cart
                    </MinuIcon>
                  </Link>
                  {User.userDetailes.user._id && (
                    <Link>
                    <MinuIcon onClick={Logout}>
                      <ExitToAppIcon style={MinuStyle} />
                      Logout
                    </MinuIcon>
                    </Link>
                  )}
              </FlexCol>
              
        </Minu>
      ) : (   
        <SectionRole color={"#000"}>
          <IneerSection>
            <NavBar>
              <LogoText to={"/"}>
                <Typography color={"#FCDD06"}>Pro</Typography>{" "}
                <Typography color={"#fff"}>Shop</Typography>
              </LogoText>
              <SearchBox>
                <InputSearch></InputSearch>
                <Button>
                  <SearchIcon></SearchIcon> Search
                </Button>
              </SearchBox>

              <IconeBox>
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
              </IconeBox>
              <ListIcon>
                <MenuOutlined
                  onClick={() => {
                    setIsMinuOpen(true);
                  }}
                  style={{
                    ...Style,
                    fontSize: "40px",
                    margin: "auto",
                    cursor: "pointer",
                  }}
                ></MenuOutlined>
              </ListIcon>
            </NavBar>
          </IneerSection>
        </SectionRole>
      )}
    </>
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
