import { Routes, Route } from "react-router-dom";

import { LoginPage } from "../auth";
import { LibraryRoutes } from "../heroes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="login" element={<LoginPage />} />

        <Route path="/*" element={<LibraryRoutes />} />
      </Routes>
    </>
  );
};
