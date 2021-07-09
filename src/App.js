import "./App.css";

import { MainComponent } from "./Global.style";  
import Nav from "./components/nav/nav";
import Home from "./screens/Gust/home/home";
import Cart from './screens/User/cart/cart';
import Checkout from './screens/User/checkout/checkout'
import {Switch, Route} from 'react-router'
import Login from "./screens/Gust/auth/login/login";
import Signup from "./screens/Gust/auth/signup/signup";
import EmptyCart from "./screens/User/cart/emptyCart";
import Payment from "./screens/User/payment/payment";
import Profile from "./screens/User/profile/profile";
import UpdateProfile from "./screens/User/profile/updateProfile";
import { useSelector } from "react-redux";
import ProductPage from "./screens/User/products/products";
import Order from "./screens/User/orders/order";
import Orders from "./screens/User/orders/orders";
// import {Fregment}from 'react' use as <> </>
function App() {
  const state = useSelector((state) => state);

  console.log("store state", state);
  return (
    <MainComponent>
      <Nav></Nav>

      <Switch>
        <Route exact={true} path={"/"} component={Home} />
        <Route  path={"/product/:id/:name"} component={ProductPage} />

        {state.userDetailes.user?._id?(
          <>
            <Route  path={"/profile"} component={Profile} />
            <Route  path={"/updateprofile"} component={UpdateProfile} />
            <Route  path={"/cart"} component={Cart} />
            <Route  path={"/emptycart"} component={EmptyCart} />
            <Route  path={"/checkout"} component={Checkout} />
            <Route  path={"/order/:id"} key={50} component={Order} />
            <Route path={"/orders"} exact={true} component={Orders} />
            <Route  path={"/proceed-checkout/shipping-address"} component={Payment} />
            <Route  path={"/proceed-checkout/place-order"} component={Payment} />
        </>
        ):<>
          <Route  path={"/login"} component={Login} />
          <Route  path={"/signup"} component={Signup} />
        </>}
  
      </Switch>
      
    </MainComponent>
  );
}   

export default App;
