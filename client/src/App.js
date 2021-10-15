import LoginPage from "./pages/LoginPage/Login";
import RegisterPage from "./pages/RegisterPage/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Router exact path="/">
          <LoginPage />
        </Router>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Router exact path="/register">
          <RegisterPage />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
