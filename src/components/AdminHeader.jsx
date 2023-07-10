import React, { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminHeader = () => {
  const { user, logOut } = UserAuth();
  const [nav, setNav] = useState(false);
  const navigate = useNavigate();
  const handleNav = () => {
    setNav(!nav);
  };
  const closeNav = () => {
    setNav(false);
  };
  useEffect(() => {
    const handleResize = () => {
      const innerWidth = window.innerWidth;
      if (innerWidth >= 768) {
        closeNav();
        return;
      }
    };
    // Attach event listener on component mount
    window.addEventListener("resize", handleResize);
  }, []);

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };
  const isSignedIn = () => {
    return (
      <div className="flex flex-col md:flex-row gap-4">
        <h1 className="text-center">Welcome {user.email}</h1>
        <button onClick={handleSignOut}>Logout</button>
      </div>
    );
  };
  return (
    <div className="w-full sticky top-0 z-10">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex justify-between md:justify-center items-center h-20 w-full mx-auto px-4 text-[#71717A] bg-white font-semibold">
        <div className="flex justify-between items-center w-[1080px]">
          <ScrollLink
            to="top"
            spy={true}
            smooth={true}
            duration={500}
            className="text-5xl font-bubblegum text-[#D77FA1] cursor-pointer"
          >
            kart.
          </ScrollLink>
          <div className="hidden md:flex justify-between w-[50%]">
            <RouterLink to="adminmainsection">Admin</RouterLink>
            {user?.email ? isSignedIn() : null}
          </div>

          <div></div>
        </div>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 h-full w-[60%] border-r bg-white ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div className="flex flex-col p-2 gap-6 justify-center items-center">
          <h1 className="text-5xl font-bubblegum text-[#D77FA1] p-3 font-semibold">
            kart.
          </h1>
          <h1>Admin</h1>
          {user?.email ? isSignedIn() : null}
        </div>
      </div>
    </div>
  );
};

export default AdminHeader;
export const notifyLogin = () =>
  toast.success("Welcome, Admin", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
export const notifyUpload = () =>
  toast.success("File uploaded!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
export const notifyUpdate = () =>
  toast.success("File updated!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
export const notifyDeleted = () =>
  toast.success("Product removed!", {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
