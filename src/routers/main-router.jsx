import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/Layout';
import MainPage from '../pages/MainPage';
import InvestPage from '../pages/investPage/InvestPage';
import ComparePage from '../pages/ComparePage';
import GuidePage from '../pages/GuidePage';
import TestPage from '../pages/TestPage';
import InvestAmountPage from '../pages/investPage/investAmountPage/InvestAmountPage';
import InvestResult from '../pages/investPage/investResult/InvestResult';
import DetailPage from "../pages/DetailPage";

export const mainRoutes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { element: <MainPage />, index: true },
      { element: <InvestPage />, path: 'invest' },
      { element: <InvestAmountPage />, path: 'invest/amount' },
      { element: <InvestResult />, path: 'invest/result' },
      { element: <ComparePage />, path: 'compare' },
      { element: <GuidePage />, path: 'guide' },
      { element: <TestPage />, path: 'test' },
      { element: <DetailPage />, path: "compare/detail" },
      { element: <TestPage />, path: "test" },
    ],
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;
