import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import Blog from "./components/Blog/Blogs";
import Layout from "./components/Layout";
import Bloginfo from "./components/Blog/Bloginfo";
// import Blogtel from "./components/Blog/Blogtel";

function App() {
  return (
    <div className="">
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="privacy policy" element={<PrivacyPolicy />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog info" element={<Bloginfo />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
