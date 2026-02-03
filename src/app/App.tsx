import { RouterProvider } from "react-router";
import { router } from "@/app/routes.tsx";

// Main application component with React Router
export default function App() {
  return <RouterProvider router={router} />;
}