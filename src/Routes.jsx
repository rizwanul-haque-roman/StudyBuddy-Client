import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import Assignments from "./Pages/Assignments/Assignments";
import CreatAssignments from "./Pages/CreatAssignments/CreatAssignments";
import PendingAssignments from "./Pages/PendingAssignments/PendingAssignments";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/assignments",
        element: <Assignments />,
      },
      {
        path: "/creatAssignments",
        element: <CreatAssignments />,
      },
      {
        path: "/pendingAssignments",
        element: <PendingAssignments />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
