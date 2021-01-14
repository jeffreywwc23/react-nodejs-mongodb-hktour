import React from 'react';
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
import SignInAndSignUp from './pages/SignInAndSignUp/SignInAndSignUp';
import User from './pages/User/User';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';

import Error from './pages/Error/Error';
import ToastNotification from './utilities/ToastNotification';
import WithSpinner from './components/WithSpinner/WithSpinner';
import { connect } from 'react-redux';
import { GetTourDataAction } from './redux/Tour/Tour.actions';

const OverviewWithSpinner = WithSpinner(Overview);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      tours: [],
    }
  }

  async componentDidMount() {
    await this.props.getTourData();
    this.setState({
      loading: false,
      tours: this.state.tour,
    })
  }

  render() {
    const { tours } = this.props;
    const toursDataArray = tours.tourState.data;
    const { loading } = this.state;

    return (
      <Router>
        <ToastNotification />
        <NavBar />
        <NextPageToTop>
          <div className="pages-container">
            <Route render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="fade"
                >
                  <Switch location={location}>

                    <Route exact path="/" render={props => <Home {...props} />} />
                    <Route exact path="/tours" render={props => <OverviewWithSpinner isLoading={loading} tours={toursDataArray} {...props} />} />
                    <Route exact path="/tours/:_id" render={props => <Tour {...props} />} />
                    <Route exact path="/about-us" render={props => <AboutUs {...props} />} />
                    <Route exact path="/sign-in-sign-up" render={props => <SignInAndSignUp {...props} />} />
                    <Route exact path="/user" render={props => <User {...props} />} />
                    <Route path="/user/mybooking" render={props => <User {...props} />} />
                    <Route exact path="/forgot-password-page" render={props => <ForgotPasswordPage {...props} />} />
                    <Route path="/resetPassword/:token" render={props => <ResetPasswordPage {...props} />} />
                    <Route component={Error} />

                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )} />
          </div>
        </NextPageToTop>

      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  tours: state.tourContainer,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getTourData: () => {
      dispatch(GetTourDataAction());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
