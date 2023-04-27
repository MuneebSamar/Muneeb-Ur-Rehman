import "./App.css";
import React from "react";
import Portfolio from "./portfolio";
import Admin from "./pages/admin";
import Error from "./pages/errorPage";
import Forms from "./pages/forms";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [user, setUser] = React.useState("");
  return (
      <Router>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route path="/admin">
            <Admin setUser={setUser} />
          </Route>
          <Route path="/index.php*">
            <Forms  setUser={setUser} user={user} />
          </Route>
          <Route path="*" component={Error} />
        </Switch>
      </Router>
  );
}

export default App;
