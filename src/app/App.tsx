'use client';

import { useMemo } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import HomePage from './pages/HomePage';
import WorkVisaPage from './pages/WorkVisaPage';
import EuropeWorkPermitPage from './pages/EuropeWorkPermitPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TermsConditionsPage from './pages/TermsConditionsPage';
import DisclaimerPage from './pages/DisclaimerPage';

const routeConfig = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'work-visa', element: <WorkVisaPage /> },
      { path: 'europe-work-permit', element: <EuropeWorkPermitPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicyPage /> },
      { path: 'terms-conditions', element: <TermsConditionsPage /> },
      { path: 'disclaimer', element: <DisclaimerPage /> },
    ],
  },
];

export default function App() {
  const router = useMemo(() => {
    if (typeof window === 'undefined') return null;
    return createBrowserRouter(routeConfig);
  }, []);

  if (!router) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-slate-50">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
      </div>
    );
  }

  return <RouterProvider router={router} />;
}