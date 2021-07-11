import { Route} from 'react-router'



import Cart from '../../screens/User/cart/cart';
import Checkout from '../../screens/User/checkout/checkout'
import EmptyCart from "../../screens/User/cart/emptyCart";
import Payment from "../../screens/User/payment/payment";
import Profile from "../../screens/User/profile/profile";
import UpdateProfile from "../../screens/User/profile/updateProfile";
import Order from "../../screens/User/orders/order";
import Orders from "../../screens/User/orders/orders";

function UserRouter (){
    return [
            <Route  path={"/profile"} component={Profile} />,
            <Route  path={"/updateprofile"} component={UpdateProfile} />,
            <Route  path={"/cart"} component={Cart} />,
            <Route  path={"/emptycart"} component={EmptyCart} />,
            <Route  path={"/checkout"} component={Checkout} />,
            <Route  path={"/order/:id"} key={50} component={Order} />,
            <Route path={"/orders"} exact={true} component={Orders} />,
            <Route  path={"/proceed-checkout/shipping-address"} component={Payment} />,
            <Route  path={"/proceed-checkout/place-order"} component={Payment} />
    ]
}
export default UserRouter