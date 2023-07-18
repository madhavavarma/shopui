// import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import { Divider } from "@mui/material";
import { Header } from "./Components/Layout/Header";
import { Categoreis } from "./Components/Products/Categories";
import { Footer } from "./Components/Layout/Footer";
import { Outlet } from "react-router-dom";

// const router = createBrowserRouter([
//     {path: "/", element: <RootLayout}
// ])

export const RootLayout = () => {
  return (
    <main>
      <Header />
      <Divider />
      <Outlet />
      <Footer />
    </main>
  );
};
