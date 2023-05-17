import "./App.css";
import React, {useEffect} from "react";
import Portfolio from "./portfolio/index.js";
import Admin from "./pages/admin.js";
import Error from "./pages/errorPage.js";
import Forms from "./pages/forms/index.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const [user, setUser] = React.useState("");

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        console.log("User Logged Out.");
        setUser('')
        // Your function to be executed when user focuses out of the application
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);
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
