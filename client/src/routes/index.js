import React, { lazy, Suspense } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import loading from "../asset/Loader/spinner.gif"

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<div style={{ display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",height:"100vh"}}><img src={loading}/></div>}>
      <Component />
    </Suspense>
  );
};

export default function Index() {
  const routes = useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
      { path: "", element: <Navigate to="/dashboard/app" /> },
      ]
    },
    { path: "/auth/login", element: <Login /> },
    { path: "/auth/register", element: <Register /> },
    {
      path: "/dashboard",
      element: <Dashboard />,
      children: [
        { path: "", element: <Navigate to="/dashboard/app" /> },
        { path: "app", element: <App /> },
        { path: "new", element: <NewSubmssion /> },
        { path: "submission", element: <Submssion /> },
        { path: "settings", element: <Settings /> },
      ],
    },
  ]);

  return routes;
}

const LandingPage = Loadable(lazy(() => import("../pages/LandingPage")));
const Login = Loadable(lazy(() => import("../pages/auth/Login")));
const Register = Loadable(lazy(() => import("../pages/auth/Register")));
const Dashboard = Loadable(
  lazy(() => import("../layouts/dashboard/Dashboard"))
);
const App = Loadable(lazy(() => import("../pages/dashboard/App")));
const NewSubmssion = Loadable(lazy(() => import("../pages/dashboard/NewSubmission")));
const Submssion = Loadable(lazy(() => import("../pages/dashboard/Submissions")));
const Settings = Loadable(lazy(() => import("../pages/dashboard/Settings")));
