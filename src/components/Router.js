import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "./Navigation";
import Profile from "../routes/Profile";

const AppRouter = ({ isLoggedIn }) => {
  return (
    <Router>
        {isLoggedIn && <Navigation />}
      <Routes>
        {isLoggedIn ? (
          <>
            <Route path="/" element={<Home />} />
          </>
              // &&
          // <>
          //   <Route path="/" element={<Profile/>}/>  
          // </>           에라이 썩을 #3.1
                ) : (
            <>
          <Route path="/" element={<Auth/>}/>
            </>
          )
          }   
      </Routes>
    </Router>
  );
};
export default AppRouter;