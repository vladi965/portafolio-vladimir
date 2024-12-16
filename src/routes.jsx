import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Contact from "./Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/experience",
    element: <Experience />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
]);

export default router;
