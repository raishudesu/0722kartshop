import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { notifyLogin } from "./AdminHeader";
import { UserAuth } from "../context/AuthContext";
import { Link as RouterLink } from "react-router-dom";


const AdminLogin = () => {
  
  const { signIn, user } = UserAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try{
      await signIn(email, password);
      notifyLogin();
      console.log('user signed in');
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    if(user != null){
      navigate('/adminmainsection');
    }
  }, [user])
  return (
    <div className="w-full h-screen">
      <div className="h-screen flex justify-center items-center">
        <div className="flex flex-col gap-4 justify-center items-center max-h-fit max-w-fit p-10 rounded-lg shadow-lg">
          <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="font-bubblegum text-7xl font-bold text-[#D77FA1]">
              kart.
            </h1>
            <h1 className="text-lg font-normal">Admin Login</h1>
          </div>
          <form
            onSubmit={handleSignIn}
            className="flex flex-col gap-2 justify-center items-start "
          >
            <input
              type="email"
              placeholder="Email"
              required
              className="p-1 border-2 border-gray-300 rounded-md outline-[#D77FA1]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              required
              className="p-1 border-2 border-gray-300 rounded-md outline-[#D77FA1]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-[#D77FA1] py-2 rounded-lg text-white self-center w-full"
            >
              Login
            </button>
          </form>
          <RouterLink to='/' className="text-sm underline">Go back to main page</RouterLink>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;