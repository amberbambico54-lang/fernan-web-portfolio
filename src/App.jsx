import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import GraphicDesign from "./pages/GraphicDesign";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "projects", element: <AllProjects /> },
      { path: "graphic-design", element: <AllProjects /> },
      { path: "*", element: <Home /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
