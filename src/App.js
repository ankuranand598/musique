import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Songs from "./components/Songs";
import Artistdash from "./components/UserHome";
import Profile from "./components/Profile";
import SongEdit from "./components/SongEdit";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* <Route path="/" exact>
          <Home />
        </Route> */}
        <Route path="/page/:p">
          <Home />
        </Route>
        <Route path="/profile" exact>
          <Profile />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/songs/:album">
          <Songs />
        </Route>
        <Route path="/Artist/dashboard">
          <Artistdash />
        </Route>
        <Route path="/edit/album/songs/:id">
          <SongEdit />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
