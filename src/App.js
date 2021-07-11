import "./App.css";

import { MainComponent } from "./Global.style";  
import Nav from "./components/nav/nav";   


import {Switch} from 'react-router'

import { useSelector } from "react-redux";
import GustRouter from "./router/gustRouter/gustRouter";
import UserRouter from "./router/userRouter/userRouter";
import AuthRouter from "./router/authRouter/authRouter";
import ErrorBoundary from "./components/ErrorBoundary/errorBoundary";

// import {Fregment}from 'react' use as <> </>
function App() {
  const state = useSelector((state) => state);

  return (
    <MainComponent>
       <ErrorBoundary>
          <Nav></Nav>

          <Switch>
                {GustRouter()}

                {state.userDetailes.user?._id?(
                UserRouter()
                ):(
                  AuthRouter()
                )
                }
      
          </Switch>
      </ErrorBoundary>
    </MainComponent>
  );
}   

export default App;
