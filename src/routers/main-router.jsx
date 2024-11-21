import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import MainPage from "../pages/MainPage";
import InvestPage from "../pages/InvestPage";
import ComparePage from "../pages/ComparePage";
import GuidePage from "../pages/GuidePage";
import TestPage from "../pages/TestPage";
import DetailPage from "../pages/DetailPage";

export const mainRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <MainPage />, index: true },
      { element: <InvestPage />, path: "invest" },
      { element: <ComparePage />, path: "compare" },
      { element: <GuidePage />, path: "guide" },
      { element: <DetailPage />, path: "compare/detail" },
      { element: <TestPage />, path: "test" },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;
