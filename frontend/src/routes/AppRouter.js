import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home/Home";
import { About } from "../pages/Home/About";

import { Navbar } from "../components/Navbar/Navbar";

export const AppRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};
