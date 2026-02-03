# HUD AND PLAYER FEEDBACK SYSTEM — DOCUMENTATION

## Overview

The HUD communicates player state clearly while staying visually restrained.
Designed for portfolio presentation with scalability for future systems.

**Core Philosophy:**
- Communicate state clearly
- Stay visually restrained
- Never distract from gameplay
- Scale to additional systems later

---

## CORE PLAYER STATES

### 1. Signal Integrity (Primary)
**Purpose**: Core health metaphor  
**Position**: Top-left  
**Always visible**: Yes (both modes)

**Behavior**:
- Decreases on: Hazard contact, poor landings, panic movement
- Recovers slowly during: Calm movement, standing still, successful timing
- Visual: Subtle pulse when low (<30%), no flashing red panic

**What it teaches**: Consequence awareness. Players learn to avoid hazards through signal degradation, not instant death.

---

### 2. Momentum / Velocity (Secondary)
**Purpose**: Movement speed indicator  
**Position**: Bottom-left  
**Visible in**: Diagnostic mode only

**Behavior**:
- Activates during movement
- Shows velocity magnitude (0-100 scale)
- Helps judge landing safety

**What it teaches**: Landing judgment. Players see velocity before impact, learning to control descent.

---

### 3. Contact State (Contextual)
**Purpose**: Grounded vs airborne confirmation  
**Position**: Bottom-right  
**Visible in**: Diagnostic mode only

**Behavior**:
- Small dot indicator
- Solid when grounded, dimmed when airborne
- Instant state feedback

**What it teaches**: State awareness. Confirms grounded vs airborne without guessing.

---

### 4. Hazard Proximity (Contextual)
**Purpose**: Warning for active hazards  
**Position**: Bottom-right  
**Visible in**: Diagnostic mode only

**Behavior**:
- Appears ONLY when near active hazards
- Fades in before danger (not reactive)
- Uses same accent color as hazards
- Disappears after hazard resolves

**What it teaches**: Observation over reaction. Warning appears before danger, rewarding preparation.

---

## HUD LAYOUT

```
┌─────────────────────────────────────────┐
│  [Signal Integrity]                     │  Top-left
│                                         │
│                                         │
│          (Center: No HUD)               │
│                                         │
│                                         │
│  [Momentum]           [Contact State]  │  Bottom corners
│                       [Hazard Warning]  │
└─────────────────────────────────────────┘
```

**Layout Rules**:
- Top-left: Always-visible primary state
- Bottom-left: Secondary movement data
- Bottom-right: Contextual indicators
- Center: Reserved for brief feedback only (landing quality)

**No permanent center HUD**. Player's attention stays on world.

---

## TWO HUD MODES

### CLEAN MODE
**Purpose**: Portfolio showcase presentation  
**Shows**: Signal Integrity only  
**Philosophy**: Minimal distraction, maximum clarity  
**Use case**: Final player experience

This is the "shipped game" mode. Only essential information visible.

---

### DIAGNOSTIC MODE
**Purpose**: Systems thinking demonstration  
**Shows**: All state indicators + context warnings  
**Philosophy**: Transparency for design review  
**Use case**: Interview portfolio walk-through

This mode reveals the system architecture to reviewers and demonstrates thoughtful state management.

---

## SIGNAL INTEGRITY SYSTEM

**Core health metaphor**: Signal represents player viability.

### Decreases On:
- Hazard contact (-20%)
- Poor landings: high velocity impact (-10%)
- Repeated panic movement: spamming inputs (-5% over time)

### Recovers During:
- Calm movement: controlled navigation (+2%/sec)
- Standing still: observing hazards (+3%/sec)
- Successful timing: perfect landings (+5% instant)

### Visual Behavior:
- 100-70%: Solid bar, calm grey
- 70-30%: Normal bar, slight color shift
- <30%: Subtle pulse (1.2s cycle), no panic flashing
- 0%: Run ends (not "death" — signal lost)

### Design Principle:
**Degradation, not destruction**. Player loses viability gradually, always aware of consequence.

---

## PHYSICS FEEDBACK

Visual indicators for movement states (HUD-adjacent, not world clutter):

### Grounded State:
- Small dot indicator (6px)
- Solid grey when grounded
- Confirms player can jump

### Airborne State:
- Momentum indicator activates
- Shows fall velocity
- Helps judge landing timing

### Hard Landing:
- Brief center text: "Impact"
- Signal Integrity dips (-10%)
- No screen shake beyond micro-compression

### Perfect Landing:
- Brief center text: "+Signal"
- Signal Integrity gains (+5%)
- Micro reward for controlled descent

**Critical**: NO arcade effects. NO screen shake. Clarity over spectacle.

---

## HAZARD PROXIMITY INDICATORS

**Contextual only**. Appears when:
- Player within detection range of active hazard
- Hazard has imminent timing window

**Behavior**:
- Fades in smoothly (300ms)
- Opacity based on distance (closer = more opaque)
- Disappears when:
  - Hazard resolves
  - Player moves out of range
  - Hazard enters cooldown

**Visual**:
- Small border box (8×8px)
- Accent color (matches hazard)
- Subtle pulse animation
- Label: "Hazard Active"

**Philosophy**: Warning, not alarm. Player has time to observe and react.

---

## WHAT EACH INDICATOR TEACHES

### Signal Integrity
Teaches **consequence awareness**.  
Players learn avoiding hazards through gradual signal loss, not binary death.

### Momentum
Teaches **landing judgment**.  
Players observe velocity before impact, learning controlled descent.

### Contact State
Teaches **state awareness**.  
Confirms grounded vs airborne, eliminating guess-work.

### Hazard Proximity
Teaches **observation over reaction**.  
Warnings precede danger, rewarding preparation not reflexes.

---

## WHY CLUTTER IS INTENTIONALLY AVOIDED

This game is about **precision, not information overload**.

### NO Score Counters
**Why**: The goal is completion, not points. No arbitrary metrics.

### NO Lives System
**Why**: Signal Integrity is continuous, not discrete. No "lives remaining" pressure.

### NO Timers
**Why**: Precision matters more than speed. No artificial time pressure.

### NO Minimap
**Why**: World is authored and learnable, not randomized. No navigation aids needed.

### Principle:
**The player should focus on the world, not the interface.**

HUD elements must earn their screen space. If it doesn't reduce friction, it's clutter.

---

## HUD SCALABILITY

The layout reserves space for future mechanics without cluttering current experience.

### Potential Additions (Top-left area):
- Secondary resource bar (e.g., energy for abilities)
- Ability cooldown indicators
- Equipment state

### Potential Additions (Bottom area):
- Environmental condition indicators (e.g., gravity zones)
- Temporary buff/debuff icons
- Interaction prompts (contextual only)

### Potential Additions (Context area):
- Objective markers (if needed for complex runs)
- Collectible counters (if collection becomes core mechanic)

### Design Principle:
**Start minimal, add only when necessary.**

Every new element must pass the "does this reduce friction?" test.  
If it adds complexity without solving a problem, reject it.

---

## TECHNICAL STRUCTURE

### Component Hierarchy:
```
HUDContainer (mode toggle)
├── SignalIntegrityBar (always visible)
├── MomentumIndicator (diagnostic only)
├── ContactStateIndicator (diagnostic only)
├── HazardProximityIndicator (contextual)
└── LandingFeedback (brief, center)
```

### Component Naming:
- `HUD/SignalIntegrityBar` — Primary health display
- `HUD/MomentumIndicator` — Velocity feedback
- `HUD/ContactStateIndicator` — Grounded/airborne state
- `HUD/HazardProximityIndicator` — Warning system
- `HUD/LandingFeedback` — Brief center feedback
- `HUD/Container` — Mode management

### Props Interface:
All components accept minimal props:
- `value` (number): Current state value
- `isVisible` (boolean): Contextual display toggle
- `type` (enum): Variant selector where needed

---

## FORBIDDEN PATTERNS

### DO NOT ADD:
- Flashing red warnings
- Screen shake (beyond micro-feedback)
- Explosions or particle storms
- Health bars with segments/pips
- Combo counters
- XP or level indicators
- Currency displays
- Inventory UI
- Quest logs

### If you're tempted to add:
- Aggressive animations → Don't
- Arcade-style effects → Don't
- Permanent center HUD → Don't
- Tutorial tooltips → Don't
- Achievement popups → Don't

**If something feels noisy, it is likely wrong.**

---

## IMPLEMENTATION STATUS

✓ Four core player states defined  
✓ HUD layout established (top-left, bottom corners, center-brief)  
✓ Signal Integrity system designed  
✓ Physics feedback defined  
✓ Hazard proximity system specified  
✓ Clean Mode and Diagnostic Mode implemented  
✓ Scalability considerations documented  
✓ Clutter avoidance philosophy established  

⏳ Pending:
- Integration with actual gameplay logic
- Accent color application (hazard matching)
- Animation implementation (subtle pulses)
- State management hookup

---

**HUD system is complete and ready for portfolio presentation.**
