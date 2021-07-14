import { Route} from 'react-router'


import Home from "../../screens/Gust/home/home";
import SearchPage from "../../screens/Gust/home/searchPage";
import ProductPage from "../../screens/User/products/products";

function GustRouter (){
    return [
        <Route exact={true} path={"/"} component={Home} />,
        <Route exact={true} path={"/search-result"} component={SearchPage} />,
        <Route  path={"/product/:id"} component={ProductPage} />
    ]
}
export default GustRouter