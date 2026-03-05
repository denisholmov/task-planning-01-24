import { createBrowserRouter } from "react-router";
import { HomePage } from "../pages/HomePage";
import { AnalyticsPage } from "../pages/AnalyticsPage";
import { BoardPage } from "../pages/BoardPage";
import { DashboardPage } from "../pages/DashboardPage";
import { SettingsPage } from "../pages/SettingsPage";
import { ErrorPage } from "../pages/ErrorPage";

export const ROUTES = createBrowserRouter([
  { path: "/", element: <HomePage/>, children:[
    { path: "/analytics", element: <AnalyticsPage/> },
    { path: "/board", element: <BoardPage/> },
    { path: "/dashboard", element: <DashboardPage/> },
    { path: "/settings", element: <SettingsPage/> },
  ] },

  {path: "*", element: <ErrorPage/>}
  
]);
