import { Route} from 'react-router'


import Login from "../../screens/Gust/auth/login/login";
import Signup from "../../screens/Gust/auth/signup/signup";

function AuthRouter (){
    return [
        <Route  path={"/login"} component={Login} />,
          <Route  path={"/signup"} component={Signup} />
    ]
}
export default AuthRouter