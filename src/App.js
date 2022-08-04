import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import LoginContainer from "./components/auth/LoginContainer";
import DefaultContainer from "./components/auth/DefaultContainer";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Route path="/" component={LoginContainer} />

        {/* <Route path="/" component={DefaultContainer} /> */}

        {/* <Redirect exact from="/" to="/login" /> */}
      </Router>
    </div>
  );
}

export default App;
