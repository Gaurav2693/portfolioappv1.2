import { createBrowserRouter } from "react-router";
import RootLayout from "@/app/layouts/RootLayout";
import AccessScreen from "@/app/pages/AccessScreen";
import Home from "@/app/pages/Home";
import CaseStudies from "@/app/pages/CaseStudies";
import Contact from "@/app/pages/Contact";
import EvidenceMetrics from "@/app/pages/EvidenceMetrics";

// Error Boundary Component
function ErrorBoundary() {
  return (
    <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
      <h1>Something went wrong</h1>
      <p>Please refresh the page to continue.</p>
    </div>
  );
}

// Router configuration for the portfolio app
export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        Component: AccessScreen,
      },
      {
        path: "dashboard",
        Component: Home,
      },
      {
        path: "case-studies",
        Component: CaseStudies,
      },
      {
        path: "evidence-metrics",
        Component: EvidenceMetrics,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);