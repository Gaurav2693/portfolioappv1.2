import { Outlet } from "react-router";
import { ThemeProvider } from "@/app/context/theme-context";
import { SoundProvider } from "@/app/context/sound-context";

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