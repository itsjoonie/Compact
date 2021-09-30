// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage/Splash";
import IndividualListing from "./components/IndividualListingPage/IndividualListing";
import List from "./components/Hosting/ListPage/List";
import HostingForm from "./components/Hosting/HostingForm/HostingForm";


function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/" exact>
            <SplashPage/>
          </Route>
          <Route path="/testingpage">
            
          </Route>
          <Route path="/hosting/:id" exact>
            <IndividualListing/>
          </Route>
          <Route path="/listing" exact>
            <List/>
          </Route>
          <Route path="/hosting/application" exact>
            <HostingForm/> 
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
