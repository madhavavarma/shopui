import { Divider } from "@mui/material";
import { Header } from "./Components/Layout/Header";
import { Categoreis } from "./Components/Products/Categories";
import { Products } from "./Components/Products/Products";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./Components/Account/Login";
import { RootLayout } from "./RootLayout";
import { Create } from "./Components/Account/Create";
import Checkout from "./Components/Checkout/Checkout";
import Detail from "./Components/Products/Detail";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Products /> },
        { path: "/products/:productId", element: <Detail /> },
        { path: "/login", element: <Login /> },
        { path: "/create", element: <Create /> },
        { path: "/checkout", element: <Checkout /> },
      ],
    },
  ],
  {
    basename: "/shopui",
  }
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
