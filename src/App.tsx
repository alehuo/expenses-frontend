import * as React from "react";
import "./styles/App.scss";

import Nav from "./components/Nav";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Title from "./components/Title";
import History from "./pages/History";
import Profile from "./pages/Profile";

const NotFound = () => <Title title="Not found" />;

const App = () => (
  <React.Fragment>
    <Router>
      <React.Fragment>
        <Nav />
        <Content>
          <Switch>
            <Route exact={true} path="/home" component={Home} />
            <Route exact={true} path="/profile" component={Profile} />
            <Route exact={true} path="/history" component={History} />
            <Route component={NotFound} />
          </Switch>
        </Content>
        <Footer />
      </React.Fragment>
    </Router>
  </React.Fragment>
);
export default App;
