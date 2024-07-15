import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { RootLayout } from "./layout";
import { ErrorPage, Home, Login, Register, Book } from "./pages";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/book",
          element: <Book />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/register",
          element: <Register />,
        },
      ],
      errorElement: <ErrorPage />,
    },
  ]);
  return <RouterProvider router={router} />;
}