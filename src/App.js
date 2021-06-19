import "./App.css";

import { MineComponent } from "./Global.style";  
import Nav from "./components/nav/nav";
import Home from "./screens/Gust/home/home";
// import Cart from './screens/User/cart/cart';
// import Checkout from './screens/User/checkout/checkout'

function App() {
  return (
    <MineComponent>
      <Nav></Nav>
      <Home></Home>
    </MineComponent>
  );
}   

export default App;
