import { createBrowserRouter } from "react-router";
import RootLayout from "@/app/layouts/root-layout";
import GameLayout from "@/app/layouts/game-layout";
import AccessScreen from "@/app/pages/access-screen";
import Home from "@/app/pages/home";
import CaseStudies from "@/app/pages/case-studies";
import Contact from "@/app/pages/contact";
import EvidenceMetrics from "@/app/pages/evidence-metrics";
import ThinkingCanvas from "@/app/pages/thinking-canvas";
import ThinkingEncyclopedia from "@/app/pages/thinking-encyclopedia";
import GameCanvas from "@/app/pages/game/game-canvas";
import EnvironmentLayers from "@/app/pages/game/environment-layers";
import UIHud from "@/app/pages/game/ui-hud";
import Character from "@/app/pages/game/character";
import MotionStates from "@/app/pages/game/motion-states";
import ColorSignalSystem from "@/app/pages/game/color-signal-system";
import NotesRules from "@/app/pages/game/notes-rules";
import GamePlay from "@/app/pages/game/play";

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
      {
        path: "thinking-canvas",
        Component: ThinkingCanvas,
      },
      {
        path: "thinking-encyclopedia",
        Component: ThinkingEncyclopedia,
      },
    ],
  },
  {
    path: "/game",
    Component: GameLayout,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "canvas",
        Component: GameCanvas,
      },
      {
        path: "environment-layers",
        Component: EnvironmentLayers,
      },
      {
        path: "ui-hud",
        Component: UIHud,
      },
      {
        path: "character",
        Component: Character,
      },
      {
        path: "motion-states",
        Component: MotionStates,
      },
      {
        path: "color-signal-system",
        Component: ColorSignalSystem,
      },
      {
        path: "notes-rules",
        Component: NotesRules,
      },
      {
        path: "play",
        Component: GamePlay,
      },
    ],
  },
]);