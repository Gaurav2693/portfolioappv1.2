import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, PanInfo, useMotionValue, useSpring } from 'motion/react';
import { Maximize2, Minimize2, Square, Copy, Trash2, Circle, Droplet, Zap, Menu, RotateCcw, ArrowLeft, Lightbulb, X, Triangle, ChevronLeft, ChevronRight, Eraser } from 'lucide-react';
import { useTheme } from '@/app/context/theme-context';
import { useSound } from '@/app/context/sound-context';
import { THINKING_MODELS, type ThinkingModel, type LaneConfig } from '@/app/data/thinking-models';
import { SketchColorPaletteRedesign } from '@/app/components/sketch-color-palette-redesign';
import { ThinkingCanvasMobileFloatingUI } from '@/app/components/thinking-canvas-mobile-floating-ui';
import { ThinkingModelsMobileSheet } from '@/app/components/thinking-models-mobile-sheet';

interface Point {
  x: number;
  y: number;
  speed?: number;
}

type StrokeMode = 'calm' | 'quick' | 'focus';
type GlowIntensity = 'subtle';
type CardSize = 'small' | 'medium' | 'large';
type HandlePosition = 'top' | 'right' | 'bottom' | 'left';

interface Stroke {
  points: Point[];
  color: string;
  glowColor: string;
  mode: StrokeMode;
  glow: GlowIntensity;
  isEraser?: boolean;
}

interface Card {
  id: string;
  x: number;
  y: number;
  content: string;
  size: CardSize;
  color: string;
  customWidth?: number;
  customHeight?: number;
}

interface Connection {
  id: string;
  sourceId: string;
  sourceHandle: HandlePosition;
  targetId: string;
  targetHandle: HandlePosition;
  color: string;
}

type ShapeType = 'circle' | 'square' | 'triangle';

interface GeometricShape {
  id: string;
  type: ShapeType;
  x: number;
  y: number;
  size: number;
  color: string;
  glowColor: string;
}

// Rich, warm muted color palette
const CARD_COLORS = [
  { name: 'Pure White', bg: 'rgba(255, 255, 255, 0.95)', text: 'rgba(30, 30, 35, 1)' },
  { name: 'Soft Lavender', bg: 'rgba(240, 235, 255, 0.95)', text: 'rgba(60, 50, 80, 1)' },
  { name: 'Pale Rose', bg: 'rgba(255, 240, 245, 0.95)', text: 'rgba(80, 50, 65, 1)' },
  { name: 'Mint Cream', bg: 'rgba(240, 255, 250, 0.95)', text: 'rgba(40, 70, 60, 1)' },
  { name: 'Sky Blue', bg: 'rgba(240, 248, 255, 0.95)', text: 'rgba(40, 60, 85, 1)' },
  { name: 'Pale Peach', bg: 'rgba(255, 248, 240, 0.95)', text: 'rgba(85, 65, 50, 1)' },
];

const DARK_CARD_COLORS = [
  { name: 'Soft Black', bg: 'rgba(30, 30, 35, 0.95)', text: 'rgba(255, 255, 255, 1)' },
  { name: 'Deep Lavender', bg: 'rgba(50, 45, 65, 0.95)', text: 'rgba(230, 225, 245, 1)' },
  { name: 'Deep Rose', bg: 'rgba(65, 45, 55, 0.95)', text: 'rgba(255, 230, 240, 1)' },
  { name: 'Deep Mint', bg: 'rgba(40, 55, 50, 0.95)', text: 'rgba(230, 250, 240, 1)' },
  { name: 'Deep Sky', bg: 'rgba(40, 50, 65, 0.95)', text: 'rgba(230, 240, 255, 1)' },
  { name: 'Deep Peach', bg: 'rgba(65, 55, 45, 0.95)', text: 'rgba(255, 240, 230, 1)' },
];

// Stroke colors for sketch control panel
const STROKE_COLORS = [
  { name: 'Charcoal', stroke: 'rgba(60, 60, 65, 0.85)', glow: 'rgba(120, 120, 130, 0.4)' },
  { name: 'Slate Blue', stroke: 'rgba(100, 115, 145, 0.85)', glow: 'rgba(150, 170, 200, 0.4)' },
  { name: 'Forest', stroke: 'rgba(85, 110, 90, 0.85)', glow: 'rgba(130, 160, 140, 0.4)' },
  { name: 'Rust', stroke: 'rgba(145, 90, 75, 0.85)', glow: 'rgba(190, 130, 110, 0.4)' },
];

const DARK_STROKE_COLORS = [
  { name: 'Charcoal', stroke: 'rgba(200, 200, 210, 0.85)', glow: 'rgba(160, 160, 180, 0.4)' },
  { name: 'Slate Blue', stroke: 'rgba(150, 170, 200, 0.85)', glow: 'rgba(120, 140, 170, 0.4)' },
  { name: 'Forest', stroke: 'rgba(130, 160, 140, 0.85)', glow: 'rgba(100, 130, 110, 0.4)' },
  { name: 'Rust', stroke: 'rgba(190, 130, 110, 0.85)', glow: 'rgba(160, 100, 80, 0.4)' },
];

// Card size dimensions
const CARD_SIZES = {
  small: { width: 140, height: 100 },
  medium: { width: 200, height: 140 },
  large: { width: 280, height: 200 },
};

const GRID_SIZE = 10;
const CARD_SNAP_GRID = 20;

export default function ThinkingCanvasPreview() {
  const { theme } = useTheme();
  const { playClick } = useSound();
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowCanvasRef = useRef<HTMLCanvasElement>(null);
  const connectionCanvasRef = useRef<HTMLCanvasElement>(null);
  const boardRef = useRef<HTMLDivElement>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [strokes, setStrokes] = useState<Stroke[]>([]);
  const [currentStroke, setCurrentStroke] = useState<Point[]>([]);
  const [cards, setCards] = useState<Card[]>([]);
  const [connections, setConnections] = useState<Connection[]>([]);
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null);
  const [hoveredConnectionId, setHoveredConnectionId] = useState<string | null>(null);
  const [selectedConnectionId, setSelectedConnectionId] = useState<string | null>(null);
  const [showIntro, setShowIntro] = useState(true);
  const [activeCardId, setActiveCardId] = useState<string | null>(null);
  const [showSketchControls, setShowSketchControls] = useState(false);
  const [showCardControls, setShowCardControls] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [deleteProgress, setDeleteProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [strokeMode, setStrokeMode] = useState<StrokeMode>('calm');
  const [strokeColor, setStrokeColor] = useState('#14171F');
  const [glowColor, setGlowColor] = useState('');
  
  // Connection state
  const [connectingFrom, setConnectingFrom] = useState<{
    cardId: string;
    side: HandlePosition;
  } | null>(null);
  const [previewEnd, setPreviewEnd] = useState<{ x: number; y: number } | null>(null);
  
  const longPressTimerRef = useRef<NodeJS.Timeout | null>(null);
  const deleteProgressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const controlsHideTimerRef = useRef<NodeJS.Timeout | null>(null);
  const lastInputPosRef = useRef<{ x: number; y: number; time: number } | null>(null);
  const [isDraggingCard, setIsDraggingCard] = useState(false);
  const [dragStartPositions, setDragStartPositions] = useState<Record<string, { x: number; y: number }>>({});
  const createCardTimerRef = useRef<NodeJS.Timeout | null>(null);
  const isCreatingCardRef = useRef(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [clearProgress, setClearProgress] = useState(0);
  const [isClearing, setIsClearing] = useState(false);
  const clearTimerRef = useRef<NodeJS.Timeout | null>(null);
  const clearProgressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [isEraserMode, setIsEraserMode] = useState(false);

  // Thinking Models state
  const [showModelsOverlay, setShowModelsOverlay] = useState(false);
  const [showLearningOverlay, setShowLearningOverlay] = useState(false);
  const [hasSeenLearning, setHasSeenLearning] = useState(false);
  const [showThinkingCTA, setShowThinkingCTA] = useState(false);
  const [showModelSelector, setShowModelSelector] = useState(false);
  const interactionCountRef = useRef(0);

  // Lane reconfiguration state (Phase 3A)
  const [activeModelId, setActiveModelId] = useState<string | null>(null);
  const [isStructureApplied, setIsStructureApplied] = useState(false);
  const [originalCardsSnapshot, setOriginalCardsSnapshot] = useState<Card[]>([]);
  const [cardAffinities, setCardAffinities] = useState<Record<string, string>>({});
  const [activeLanes, setActiveLanes] = useState<LaneConfig[]>([]);

  // Geometric shapes state
  const [shapes, setShapes] = useState<GeometricShape[]>([]);
  const [selectedShapeType, setSelectedShapeType] = useState<ShapeType | null>(null);
  const [selectedShapeId, setSelectedShapeId] = useState<string | null>(null);
  const [resizingShapeId, setResizingShapeId] = useState<string | null>(null);

  // Sketch mode toggle
  const [isSketchModeEnabled, setIsSketchModeEnabled] = useState(true);

  // Pan/zoom state
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const [isPanning, setIsPanning] = useState(false);
  const [panStart, setPanStart] = useState({ x: 0, y: 0 });
  const [isShiftPressed, setIsShiftPressed] = useState(false);

  // Help tooltip carousel state
  const [showHelpTooltip, setShowHelpTooltip] = useState(false);
  const [currentTooltipIndex, setCurrentTooltipIndex] = useState(0);
  const tooltipAutoAdvanceRef = useRef<NodeJS.Timeout | null>(null);

  // Resize state
  const [resizingCardId, setResizingCardId] = useState<string | null>(null);
  const [resizingLaneId, setResizingLaneId] = useState<string | null>(null);
  const [resizeStartPos, setResizeStartPos] = useState<{ x: number; y: number } | null>(null);
  const [resizeStartSize, setResizeStartSize] = useState<{ width: number; height: number } | null>(null);

  // Lane drag state
  const [isDraggingLane, setIsDraggingLane] = useState(false);
  const [laneDragStartPositions, setLaneDragStartPositions] = useState<Record<string, { x: number; y: number }>>({});

  // Smooth cursor position with spring physics
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const smoothX = useSpring(cursorX, { damping: 18, stiffness: 220 });
  const smoothY = useSpring(cursorY, { damping: 18, stiffness: 220 });

  // Theme-aware colors
  const bgColor = theme === 'dark' ? 'bg-black' : 'bg-white';
  const textColor = theme === 'dark' ? 'text-white' : 'text-black';
  const gridDotColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';
  const controlsBg = theme === 'dark' ? 'rgba(20, 20, 20, 0.92)' : 'rgba(250, 250, 250, 0.92)';
  const controlsBorder = theme === 'dark' ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.08)';
  const cardColors = theme === 'dark' ? DARK_CARD_COLORS : CARD_COLORS;
  const strokeColors = theme === 'dark' ? DARK_STROKE_COLORS : STROKE_COLORS;

  // Help tooltip content
  const helpTooltips = [
    {
      title: 'Create Cards',
      description: isMobile 
        ? 'Long-press anywhere to create a new card. Cards are your building blocks for organizing ideas.'
        : 'Right-click or double-click anywhere to create a new card. Cards are your building blocks for organizing ideas.',
    },
    {
      title: 'Pan the Canvas',
      description: 'Hold Shift and drag anywhere to pan the entire canvas. This helps you navigate large workspaces.',
    },
    {
      title: 'Sketch Mode',
      description: 'Toggle sketch mode to draw freely on the canvas. When disabled, you can interact with cards without accidental drawing.',
    },
    {
      title: 'Geometric Shapes',
      description: 'Use circle, square, and triangle tools to add visual structure. Click a shape tool, then click on the canvas to place it.',
    },
    {
      title: 'Connect Cards',
      description: 'Click and drag from the small handles on card edges to create connections between related ideas.',
    },
    {
      title: 'Thinking Lenses',
      description: 'Apply cognitive frameworks like First Principles or Eisenhower Matrix to organize your cards into meaningful structures.',
    },
  ];

  // Core utility functions from the main thinking-canvas.tsx
  // (I'll keep these brief - just the essential ones for the preview)
  
  const getCanvasCoords = useCallback((clientX: number, clientY: number) => {
    if (!boardRef.current) return { x: 0, y: 0 };
    const rect = boardRef.current.getBoundingClientRect();
    return { 
      x: clientX - rect.left - panOffset.x, 
      y: clientY - rect.top - panOffset.y 
    };
  }, [panOffset]);

  const snapToGrid = (value: number, gridSize: number) => {
    return Math.round(value / gridSize) * gridSize;
  };

  // This is a SIMPLIFIED preview version - keeping only essential interactivity
  // For full implementation, copy all handlers from thinking-canvas.tsx
  
  const handleCanvasClick = () => {
    if (showIntro) setShowIntro(false);
    setSelectedCardId(null);
    setSelectedShapeId(null);
    setSelectedConnectionId(null);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // Initialize stroke colors
  useEffect(() => {
    if (!strokeColor) {
      setStrokeColor(strokeColors[0].stroke);
      setGlowColor(strokeColors[0].glow);
    }
  }, [strokeColor, strokeColors]);

  // Detect mobile/tablet
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Hide intro after interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      if (showIntro) setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, [showIntro]);

  return (
    <div className={`${bgColor} w-full h-full relative overflow-hidden`} onClick={handleCanvasClick}>
      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, ${gridDotColor} 1px, transparent 1px)`,
          backgroundSize: `${GRID_SIZE}px ${GRID_SIZE}px`,
        }}
      />

      {/* Intro overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className={`text-center px-6 space-y-4 ${textColor}`}>
              <p className={`font-['Caladea',serif] text-[32px] md:text-[36px] tracking-[-0.5px] opacity-90`}>
                STILLROOM
              </p>
              <p className={`font-['Cambay',sans-serif] text-[14px] md:text-[16px] tracking-[0.14px] opacity-50`}>
                {isMobile ? 'Draw freely • Long-press for cards' : 'Draw freely • Right-click for cards'}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Board reference for coordinate calculations */}
      <div ref={boardRef} className="absolute inset-0" />
      
      {/* Connection canvas */}
      <canvas
        ref={connectionCanvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 5 }}
      />
      
      {/* Glow canvas */}
      <canvas
        ref={glowCanvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 2, filter: 'blur(20px)', opacity: 0.7 }}
      />
      
      {/* Main drawing canvas */}
      <canvas
        ref={canvasRef}
        onContextMenu={handleContextMenu}
        className="absolute inset-0 touch-none"
        style={{ 
          touchAction: 'none', 
          zIndex: isSketchModeEnabled ? 15 : 0.5,
          cursor: isSketchModeEnabled ? (isShiftPressed ? (isPanning ? 'grabbing' : 'grab') : (isEraserMode ? 'cell' : 'crosshair')) : 'default',
          pointerEvents: isSketchModeEnabled ? 'auto' : 'none',
          transform: `translate(${panOffset.x}px, ${panOffset.y}px)`,
        }}
      />
    </div>
  );
}
