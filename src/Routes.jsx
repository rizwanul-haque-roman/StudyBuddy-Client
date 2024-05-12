import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import Assignments from "./Pages/Assignments/Assignments";
import PendingAssignments from "./Pages/PendingAssignments/PendingAssignments";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import CreateAssignments from "./Pages/CreateAssignments/CreateAssignments";
import Private from "./Private/Private";

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
        loader: () => fetch("http://localhost:3000/totalAssignments"),
      },
      {
        path: "/CreateAssignments",
        element: (
          <Private>
            <CreateAssignments />
          </Private>
        ),
      },
      {
        path: "/pendingAssignments",
        element: (
          <Private>
            <PendingAssignments />
          </Private>
        ),
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
