import { React, Suspense, lazy, useState } from "react";
import ReactDOM from "react-dom/client";
import HeadingComponent from "./components/HeadingComponent";
import BodyComponent from "./components/BodyComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import Shimmer from "./components/Shimmer";
import MenuCard from "./components/MenuCard";
import UserContext from "./utils/UserContext";
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import Cart from "./components/Cart";
// import AboutUs from "./components/AboutUs";
// import Gorcery from "./components/Gorcery";

const Gorcery = lazy(() => import("./components/Gorcery"));
const AboutUs = lazy(() => import("./components/AboutUs"));

const root = ReactDOM.createRoot(document.getElementById("root"));
const App = () => {
  const [username, SetUsername] = useState("Ankit");
  return (
    <Provider store={appStore}>
      <UserContext.Provider value={{ loggedInUser: username, SetUsername }}>
        <div className="">
          <HeadingComponent />
          {/* <BodyComponent /> */}
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        path: "/",
        element: <BodyComponent />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Shimmer />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <ContactUs />,
      },
      {
        path: "/restaurant-menu/:resId",
        element: <MenuCard />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Gorcery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
  // {
  //   path: "/about",
  //   element: <AboutUs />,
  // },
  // {
  //   path: "/contact",
  //   element: <ContactUs />,
  // },
]);

root.render(<RouterProvider router={appRouter} />);
