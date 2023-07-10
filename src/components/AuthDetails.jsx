/* import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const AuthDetails = () => {
  const navigate = useNavigate();

  const [authUser, setAuthUser] = useState(null);
  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        navigate("/adminpage");
      } else {
        setAuthUser(null);
        navigate("/adminlogin");
      }
    });
    return () => {
      listen();
    };
  }, []);
  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("User signed out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signedIn = () => {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center gap-4">
        <p>Signed In as Admin</p>
        <button onClick={userSignOut}>Log Out</button>
      </div>
    );
  };

  return <div>{authUser ? signedIn() : <p>Signed Out</p>}</div>;
};

export default AuthDetails;

 */