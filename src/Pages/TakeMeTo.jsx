import React, { useEffect } from 'react';
import "./TakeMeTo.css";
import Section from "../components/GeneralComponents/Section";
import Welcome from "../components/GeneralComponents/Welcome";
import Navbar from "../components/GeneralComponents/Navbar";

import { auth, signInWithGoogle, logout } from "../login";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";




const TakeMeTo = () => {

  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    
    if (!user) {
      console.log("login first")
      alert("Login first");
      return navigate("/");
    }

  }, [])


  function logoutHandler() {
    logout();
    if(!user)
    {
      console.log("logged out")
      return navigate("/");

    }
  }

  function profileHandler(){
    return navigate("/profile");

  }

  function tweetsHnadler(){
    return navigate("/mytweets")
  }




  return (
    <div className="parent animate__animated">
      <Navbar />
      <div className="welcome-page-flex">
        <Welcome />
        <div className="take-me-to">
          <div className="sections_upper">
            <Section
            click={profileHandler}
              title="profile"
              description="your profile!"
              className="section_profile animate__animated animate__fadeIn"
            />
            <Section
            click={tweetsHnadler}
              title="tweets"
              description="have a look at your tweets"
              className="section_tweets animate__animated animate__fadeIn "
            />
          </div>
          <div className="sections_lower">
            <Section
              title="posts"
              description="lets go through your posts!"
              className="section_posts animate__animated animate__fadeIn"
            />
           
             <Section
          click={logoutHandler}
              title="logout"
              description="see ya!"
              className="section_logout animate__animated animate__fadeIn"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeMeTo;