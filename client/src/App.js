import React from "react";
// import SignupComponent from './components/Signup';
import SigninComponent from './components/Signin';
import PlayersSearch from "./components/Search/PlayersSearch";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/Wrapper";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import SignupComponent from './components/Signup';
import LoggedInHomepage from './LoggedInHomepage';

const App = () => {
  return(
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={LoggedInHomepage} />
          <Route exact path="/signin" component={SigninComponent} />
          <Route exact path='/signup' component={SignupComponent} />
          <Route exact path="/teammanager" component={PlayersSearch} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
