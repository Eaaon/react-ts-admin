import { Navigate, createBrowserRouter } from "react-router-dom"
import Home from "../pages/Home"
import About from "../pages/About"
import ErrorPage from "../pages/Error"

const routes = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/",
    element: <Navigate to="home" />,
    errorElement: <ErrorPage />
  },
] as {
  path: string
  element: JSX.Element
}[])
export default routes
