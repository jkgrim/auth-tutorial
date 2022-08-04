import { Switch, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";

export default function DefaultContainer() {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
