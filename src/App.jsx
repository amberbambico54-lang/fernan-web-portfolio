import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Main from "./components/Main";
import AllProjects from "./components/AllProjects";
import { Header } from "./components/Header";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Main /> },
      { path: "projects", element: <AllProjects /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
