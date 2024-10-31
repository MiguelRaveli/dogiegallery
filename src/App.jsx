import {
  Route,
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import DogieInfoPage from "./pages/DogieInfoPage";
import GalleryPage from "./pages/GalleryPage";
import NotFoundPage from "./pages/NotFoundPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import React, { useState } from "react";
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="/gallery/dogie-info/:id" element={<DogieInfoPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/*" element={<NotFoundPage />} />
    </Route>
  )
);

export const Context = React.createContext();
const App = () => {
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <Context.Provider value={[pageNumber, setPageNumber ]}>
      <RouterProvider router={router} />{" "}
    </Context.Provider>
  );
};

export default App;
