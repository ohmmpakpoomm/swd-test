import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Homepage from "../pages/Homepage";
import Question1 from "../pages/Question1";
import Question2 from "../pages/Question2";

const router = createBrowserRouter([
  {
    path: "",
    element: <Homepage />,
  },
  {
    path: "question1",
    element: <Question1 />,
  },
  {
    path: "question2",
    element: <Question2 />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
