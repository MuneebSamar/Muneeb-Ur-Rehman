import "./App.css";
import Portfolio from "./portfolio";
import Admin from "./pages/admin";
import Error from "./pages/errorPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div data-spy="scroll" data-target="#pb-navbar" data-offset="200">
      <Router>
        <Switch>
          <Route exact path="/" component={Portfolio} />
          <Route path="/admin" component={Admin} />
          {/* <Route path='/form' component={Form} /> */}
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
