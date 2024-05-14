import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home/Home";
import Assignments from "./Pages/Assignments/Assignments";
import PendingAssignments from "./Pages/PendingAssignments/PendingAssignments";
import Register from "./Pages/Register/Register";
import Login from "./Pages/Login/Login";
import CreateAssignments from "./Pages/CreateAssignments/CreateAssignments";
import Private from "./Private/Private";
import Update from "./Pages/Update/Update";
import ViewAssignment from "./Pages/View/ViewAssignment";

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
        path: "/update/:id",
        element: (
          <Private>
            <Update />
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://study-buddy-server-six.vercel.app/assignment?id=${params.id}`
          ),
      },
      {
        path: "/view/:id",
        element: (
          <Private>
            <ViewAssignment />
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://study-buddy-server-six.vercel.app/assignment?id=${params.id}`
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
