import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { ErrorPage } from "./pages/ErrorPage/ErrorPage.jsx";
import { MemberPage } from "./pages/memberPage/MemberPage.jsx";

import { HomePage } from "./pages/home-page/HomePage.jsx";
import { MemberDetailsPage } from "./pages/memberPage/MemberDetailsPage.jsx";
import { ContextProvider } from "./context/GroupOrganizerContext.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/member", element: <MemberPage /> },
      { path: "/member/:id", element: <MemberDetailsPage /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ContextProvider>
      <RouterProvider router={routes} />
    </ContextProvider>
  </React.StrictMode>
);
