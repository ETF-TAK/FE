import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/common/Layout";
import MainPage from "../pages/mainPage/MainPage";
import InvestPage from "../pages/investPage/InvestPage";
import ComparePage from "../pages/ComparePage";
import GuidePage from "../pages/guidePage/guidePages/GuidePage";
import TestPage from "../pages/testPage/TestPage";
import InvestAmountPage from "../pages/investPage/investAmountPage/InvestAmountPage";
import InvestResult from "../pages/investPage/investResult/InvestResult";
import DetailPage from "../pages/DetailPage";
import GuideDetailPage from "../pages/guidePage/guideDetalPage/GuideDetailPage";
import TestResultPage from "../pages/testPage/testResultPage/TestResultPage";
import ListPage from "../pages/listPage/ListPage";

export const mainRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <MainPage />, index: true },
      { element: <InvestPage />, path: "invest" },
      { element: <InvestAmountPage />, path: "invest/amount" },
      { element: <InvestResult />, path: "invest/result" },
      { element: <ComparePage />, path: "compare" },
      { element: <GuidePage />, path: "guide" },
      { element: <GuideDetailPage />, path: "guide/detail/:num" },
      { element: <DetailPage />, path: "compare/detail" },
      { element: <TestPage />, path: "test" },
      { element: <TestResultPage />, path: "test/result" },
      { element: <ListPage />, path: "etf/list" },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;
