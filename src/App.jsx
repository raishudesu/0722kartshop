import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
import ProductPage from "./components/ProductPage";
import AdminLogin from "./components/AdminLogin";
import MainPage from "./pages/MainPage";
import AdminPage from "./pages/AdminPage";
import AdminMainSection from "./components/AdminMainSection";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";
import EditData from "./components/CRUD/EditData";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <div id="top" className="font-sans">
          <Routes>
            <Route element={<MainPage />}>
              <Route path="/" element={<MainSection />} />
              <Route path="/productpage" element={<ProductPage />} />
            </Route>
            <Route element={<AdminPage />}>
              <Route path="/adminmainsection" element={<Protected><AdminMainSection /></Protected>}/>
              <Route path='/editproduct' element={<Protected><EditData /></Protected>} />
            </Route>
            <Route path="/adminlogin" element={<AdminLogin />} />
          </Routes>
        </div>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
