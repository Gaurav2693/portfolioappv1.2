import { RouterProvider } from "react-router-dom";
import { router } from "@/app/routes";

// Main application component with React Router
export default function App() {
  return <RouterProvider router={router} />;
}