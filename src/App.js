import { Route } from "react-router-dom";

import "./App.css";
import LoginContainer from "./components/auth/LoginContainer";
import DefaultContainer from "./components/auth/DefaultContainer";
import { StandardUser } from "./components/helpers/userRoles";

function App() {
  return (
    <div className="app-container">
      <Route path="/" component={LoginContainer} />

      <StandardUser withRedirect>
        <Route component={DefaultContainer} />
      </StandardUser>
      {/* <Redirect exact from="/" to="/login" /> */}
    </div>
  );
}

export default App;
