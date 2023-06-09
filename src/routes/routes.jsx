import AboutUs from "../pages/AboutUs";
import Akbatan from "../pages/BranchPage/akbatan";
import Cart from "../pages/Cart";
import ContactUs from "../pages/ContactUs";
import EasyAccess from "../pages/EasyAccess";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Product from "../pages/Product";
import Search from "../pages/search";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import User from "../pages/UserPage/User";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/Cart", element: <Cart /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/akbatan", element: <Akbatan /> },
  { path: "/aboutus", element: <AboutUs /> },
  { path: "/contactus", element: <ContactUs /> },
  { path: "/easyaccess/*", element: <EasyAccess /> },
  { path: "/user/*", element: <User /> },
  { path: "/search/:query", element: <Search /> },
  { path: "/:name/:id", element: <Product /> },
  { path: "*", element: <NotFound /> },
];

export default routes;
