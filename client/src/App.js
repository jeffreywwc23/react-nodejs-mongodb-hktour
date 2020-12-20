import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";

import NextPageToTop from './components/NextPageToTop/NextPageToTop';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Overview from './pages/Overview/Overview'
import Tour from './pages/Tour/Tour';
import AboutUs from './pages/AboutUs/AboutUs';
import SignPage from './pages/SignInAndSignUp/SignInAndSignUp';
import User from './pages/User/User';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';

import Error from './pages/Error/Error';
import { ToastContainer } from 'react-toastify';

function App() {

  return (
    <Router>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <NavBar />
      <NextPageToTop>
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={450}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/" render={props => <Home {...props} />} />
                <Route exact path="/tours" render={props => <Overview {...props} />} />
                <Route exact path="/tours/:_id" render={props => <Tour {...props} />} />
                <Route exact path="/about-us" render={props => <AboutUs {...props} />} />
                <Route exact path="/sign-in-sign-up" render={props => <SignPage {...props} />} />
                <Route exact path="/user" render={props => <User {...props} />} />
                <Route exact path="/forgot-password-page" render={props => <ForgotPasswordPage {...props} />} />
                <Route exact path="/resetPassword/:token" render={props => <ResetPasswordPage {...props} />} />
                <Route component={Error} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        )} />
      </NextPageToTop>
    </Router>
  );
}

export default App;