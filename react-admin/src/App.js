import React from "react";
import { 
  HashRouter as Router,
  Switch,
  Route
 } from "react-router-dom";
import publicRoutes from './routes/publicRoutes';
import MyRoute from './components/MyRoute';
import 'antd/dist/antd.css';
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        {publicRoutes.map(
          ({ path, component, ...routes }) =>
            <MyRoute key={path} path={path} component={component} {...routes} />
        )}
      </Switch>
    </Router>
  );
}

export default App;
