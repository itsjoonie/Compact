// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage/Splash";
import IndividualListing from "./components/IndividualListingPage/IndividualListing";
import List from "./components/Hosting/ListPage/List";
import HostingForm from "./components/Hosting/HostingForm/HostingForm";
import ImageForm from "./components/Hosting/HostingForm/ImageForm";
import UpdateHostingForm from "./components/Hosting/HostingForm/UpdateHostingForm";
import {getHostings} from './store/hosting'
import UpdateImageForm from "./components/Hosting/HostingForm/UpdateImageForm";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import Footer from "./components/Footer/Footer";



function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    dispatch(getHostings())
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
   
      {isLoaded && (
        <Switch>

          <Route path="/" exact>
            <SplashPage/>
          </Route>
          <Route path="/login" exact>
            <Login/>
          </Route>
          <Route path="/testingpage">
            <HostingForm/> 
            
          </Route>
          <Route path="/listing/:id" exact>
          <Footer/>
            <IndividualListing/>
          </Route>
          <Route path="/listing" exact>
            <Footer/>
            <List/>
          </Route>
          <ProtectedRoute path="/application/hosting" exact>
            <HostingForm/> 
          </ProtectedRoute>
          <Route path="/application/hosting/images/:hostingId" exact>
            <ImageForm/> 
          </Route>
          <Route path="/update/hosting/images/:hostingId" exact>
            <UpdateImageForm/> 
          </Route>
          <Route path="/update/hosting/:id" exact>
              <UpdateHostingForm/>
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
