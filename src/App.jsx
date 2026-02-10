import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <AllProjects /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
