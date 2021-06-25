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
import Payment from "./screens/User/order/payment";
import ReviewOrder from "./screens/User/order/reviewOrder";
import Profile from "./screens/User/profile/profile";
import { useSelector } from "react-redux";
import ProductPage from "./screens/User/products/products";
function App() {
  const state = useSelector((state) => state);

  console.log("store state", state);
  return (
    <MainComponent>
      <Nav></Nav>

      <Switch>
          <Route exact={true} path={"/"} component={Home} />
          <Route  path={"/cart"} component={Cart} />
          <Route  path={"/emptycart"} component={EmptyCart} />
          <Route  path={"/checkout"} component={Checkout} />
          <Route  path={"/payment"} component={Payment} />
          <Route  path={"/product"} component={ProductPage} />
          <Route  path={"/profile"} component={Profile} />
          <Route  path={"/revieworder"} component={ReviewOrder} />
          <Route  path={"/login"} component={Login} />
          <Route  path={"/signup"} component={Signup} />
      </Switch>
      
    </MainComponent>
  );
}   

export default App;
