import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import PrivacyPolicy from "./components/Privacy/PrivacyPolicy";
import Blog from "./components/Blog/Blogs";
import Layout from "./components/Layout";
import Bloginfo from "./components/Blog/Bloginfo";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className="">
      <div className="wrapper">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="privacy policy" element={<PrivacyPolicy />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:title" element={<Bloginfo />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
