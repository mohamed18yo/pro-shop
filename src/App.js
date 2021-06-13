import "./App.css";

// import { Button, MineComponent, Typography } from "./App.style";
import Nav from "./components/nav/nav";
import Profile from "./components/profile/profile";

function App() {
  return (
    <div className="container" >
      <Nav></Nav>
      <Profile></Profile>
    </div>
  );

  // <MineComponent>
  //   <Typography color={"red"} fontSize={40}>
  //     Hello World
  //   </Typography>
  //   <Button background={"blue"}>Add</Button>
  // </MineComponent>
}

export default App;
