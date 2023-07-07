import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainSection from "./components/MainSection";
import ProductPage from "./components/ProductPage";
import AdminLogin from "./components/AdminLogin";
import MainPage from "./pages/MainPage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div id="top" className="font-sans">
        <Routes>
          <Route element={<MainPage />}>
            <Route path="/" element={<MainSection />}/>
            <Route path="/productpage" element={<ProductPage />}/>
          </Route>
          <Route path="/adminlogin" element={<AdminLogin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
