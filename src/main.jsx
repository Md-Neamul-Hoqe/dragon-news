import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Login from "./pages/auth/Login.jsx";
import Register from "./pages/auth/Register.jsx";
import AuthProviders from "./Providers/AuthProviders.jsx";
import DetailsNews from "./pages/Home/DetailsNews.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        
        /* must use / in fetch url to navigate after reload page. */
        loader: () => fetch("/news.json"),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/news/:id",
        element: (
          <PrivateRoute>
            <DetailsNews />
          </PrivateRoute>
        ),
        loader: () => fetch("/news.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={routers} />
    </AuthProviders>
  </React.StrictMode>
);
