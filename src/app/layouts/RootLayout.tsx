import { Outlet } from "react-router";
import { ThemeProvider } from "@/app/context/ThemeContext";
import { SoundProvider } from "@/app/context/SoundContext";

/**
 * Root layout component that wraps all routes with ThemeProvider and SoundProvider
 * This ensures all child routes have access to theme and sound contexts
 */
export default function RootLayout() {
  return (
    <ThemeProvider>
      <SoundProvider>
        <Outlet />
      </SoundProvider>
    </ThemeProvider>
  );
}