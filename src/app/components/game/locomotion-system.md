# LOCOMOTION SYSTEM — DOCUMENTATION

## Overview

Core locomotion states with posture-based intent integration.
Three states: Idle, Walk, Run — each with distinct behavior and visual posture.

**Design Philosophy:**
Posture communicates player intent visually. No UI needed to understand readiness state.

---

## THREE LOCOMOTION STATES

### 1. IDLE (Gun Down)

**Purpose**: Default resting state  
**Posture**: Gun down — relaxed, observing  
**Animation**: Static frame (no loop)

**Behavior**:
- Default state when not moving
- Gun-down posture signals non-engagement
- Enables signal recovery: +2% per 0.5 seconds
- Momentum decays: -10 per 0.2 seconds to zero
- Vulnerable but recovering

**What it teaches**: Patience and observation. Standing still is a strategic choice, not wasted time.

**Sprite**: Character standing upright, weapon lowered, alert but not engaged.

---

### 2. WALK (Gun Up)

**Purpose**: Low momentum movement  
**Posture**: Gun up — alert, ready  
**Animation**: 8-frame cycle at ~8 FPS (120ms per frame)

**Behavior**:
- Gun-up posture shows readiness
- Low momentum movement: maintains steady 30
- No signal penalty during walk
- No signal recovery during walk (neutral state)
- Immediate transition from idle (no acceleration delay)

**What it teaches**: Controlled movement. You can move safely without penalty.

**Sprite**: Character walking with weapon raised, ready to react. Smooth gait cycle.

**Transition from Idle**: Instant. Gun raises, character begins moving immediately.

---

### 3. RUN (Gun Up)

**Purpose**: High momentum movement  
**Posture**: Gun up — alert, committed  
**Animation**: 11-frame cycle at ~12 FPS (80ms per frame)

**Behavior**:
- Gun-up posture maintained (same readiness as walk)
- Higher momentum: builds from current value to 100
- Momentum builds over time: +5 per 0.2 seconds (max 100)
- No passive signal change during run
- Abrupt stop to idle causes signal loss if momentum > 50

**What it teaches**: Speed has consequence. Running commits you to motion that must be controlled.

**Sprite**: Character running with weapon raised, more aggressive forward lean. Faster stride.

**Transition to Idle**: If momentum > 50, signal penalty = momentum / 10 (teaches controlled deceleration).

---

## POSTURE-BASED INTENT

### Gun Down (Idle)
**Visual**: Weapon lowered, body upright  
**Intent**: Relaxed state. Player is observing, not engaged.  
**Gameplay**: Signal recovers. Vulnerable but recovering.

### Gun Up (Walk/Run)
**Visual**: Weapon raised, body forward-leaning  
**Intent**: Alert state. Player is moving with intent, ready to react.  
**Gameplay**: No recovery, but no penalty for controlled movement.

### Philosophy:
Posture is readable at a glance. No need to check UI to understand player state.  
Other players (in future multiplayer) can read intent from posture alone.

---

## STATE TRANSITION RULES

### Idle → Walk
- **Trigger**: Movement input while idle
- **Behavior**: Immediate transition. Gun raises, character begins movement.
- **Signal cost**: None
- **Momentum**: Instantly sets to 30

### Walk → Run
- **Trigger**: Sprint input while walking (or sustained movement)
- **Behavior**: Smooth acceleration. Animation speeds up.
- **Signal cost**: None
- **Momentum**: Begins building from 30 to 100 (+5 per 0.2s)

### Run → Idle
- **Trigger**: Stop input while running
- **Behavior**: Abrupt stop. Gun lowers.
- **Signal cost**: If momentum > 50, penalty = momentum / 10
- **Momentum**: Begins decaying immediately
- **Teaching**: Controlled deceleration is important. Don't stop recklessly.

### Walk → Idle
- **Trigger**: Stop input while walking
- **Behavior**: Gentle stop. Gun lowers smoothly.
- **Signal cost**: None
- **Momentum**: Begins decaying from 30
- **Teaching**: Safe transition. Walking allows easy stops.

### Run → Walk
- **Trigger**: Release sprint input while running
- **Behavior**: Controlled deceleration. Animation slows.
- **Signal cost**: None
- **Momentum**: Drops to 30 instantly (no buildup)
- **Teaching**: You can control speed mid-motion without penalty.

### Idle → Run
- **Trigger**: Sprint input while idle
- **Behavior**: Goes through Walk state briefly (instant), then accelerates
- **Signal cost**: None
- **Momentum**: Starts at 30, immediately begins building
- **Teaching**: All run states pass through walk momentum threshold.

---

## SIGNAL INTEGRATION

### During Idle:
- **Recovery**: +2% per 0.5 seconds
- **Philosophy**: Standing still is a strategic resource management choice

### During Walk:
- **No change**: Neutral state
- **Philosophy**: Controlled movement has no cost

### During Run:
- **No passive change**: Running itself doesn't drain signal
- **Philosophy**: Speed alone isn't punished

### On Abrupt Stop (Run → Idle):
- **Penalty**: -momentum / 10 (only if momentum > 50)
- **Example**: Momentum at 80 → penalty of -8% signal
- **Philosophy**: Teaches controlled deceleration, not blind sprinting

---

## MOMENTUM INTEGRATION

### During Idle:
- **Decay**: -10 per 0.2 seconds to zero
- **Purpose**: Momentum dissipates naturally when not moving

### During Walk:
- **Maintains**: Steady at 30
- **Purpose**: Walking has consistent, low momentum

### During Run:
- **Builds**: +5 per 0.2 seconds (max 100)
- **Purpose**: Momentum accumulates with sustained running
- **Teaching**: The longer you run, the more committed you are

### Momentum Purpose:
- Affects landing impact (higher momentum = harder landing)
- Determines stop penalty (high momentum stop = signal loss)
- Teaches player to manage speed, not just move fast

---

## ANIMATION FRAME RATES

### Idle:
- **Frames**: 1 (static)
- **Loop**: N/A
- **Purpose**: Shows restful state clearly

### Walk:
- **Frames**: 8
- **Speed**: 120ms per frame (~8 FPS)
- **Purpose**: Smooth, controlled gait

### Run:
- **Frames**: 11
- **Speed**: 80ms per frame (~12 FPS)
- **Purpose**: Faster, more urgent movement

### Technical:
- Frame cycling managed via setInterval
- Frame index wraps using modulo (frame % totalFrames)
- No frame skipping or interpolation

---

## SPRITE PRESERVATION

### No Rescaling:
- Sprites used at original dimensions
- Pixel-perfect rendering: `imageRendering: pixelated`
- No smoothing or anti-aliasing

### Baseline Alignment:
- All frames share common ground baseline
- No vertical drift during animation
- Character feet remain at consistent Y-position

### Frame Extraction:
- Sprite sheets displayed via CSS `transform: translateX()`
- Frame width: 140px (approximate, adjust if needed)
- Overflow hidden to show single frame at a time

---

## WHAT'S NOT INCLUDED (BY DESIGN)

### No Jumping States:
- Jumping is a separate phase
- Will integrate later with air states

### No Shooting/Combat States:
- Combat is a separate phase
- Posture (gun up) shows readiness, but no firing yet

### No Hazard Interactions:
- Hazards exist in environment
- Interaction logic comes later

### No Platform Collision:
- Movement is state-based only for now
- Physics integration is separate phase

### No Directional Variants:
- Single facing direction (right) for now
- Left-facing variants can be added later (flip sprite)

---

## INTEGRATION WITH HUD

Locomotion system connects to HUD via callbacks:

### Signal Callback:
```typescript
onSignalChange?: (delta: number) => void
```
Called when:
- Idle state recovers signal (+2 per 0.5s)
- Abrupt stop from run causes penalty (negative delta)

### Momentum Callback:
```typescript
onMomentumChange?: (value: number) => void
```
Called when:
- Momentum builds during run
- Momentum maintains during walk
- Momentum decays during idle

HUD receives these updates and displays Signal Integrity bar and Momentum indicator accordingly.

---

## DESIGN PRINCIPLES

### Posture Over UI:
Readiness state is visible through character posture, not HUD icons.

### Consequence Over Punishment:
Abrupt stops have consequence (signal loss), not instant failure.

### Control Over Speed:
Player can control speed at any time (run → walk → idle). No forced commitment.

### Recovery Through Patience:
Standing still recovers signal. Teaches observation as strategy.

---

## FORBIDDEN PATTERNS

### DO NOT ADD:
- Instant transitions with no visual feedback
- Speed boosts or power-ups
- Stamina bars (momentum is not stamina)
- Directional aiming while moving (separate combat phase)
- Jump states (separate phase)
- Crouch or prone states (not needed for this game)

### If you're tempted to add:
- More complex state machines → Don't (keep it simple)
- Acceleration curves → Don't (instant state changes are intentional)
- Separate strafe animations → Don't (single direction for now)

**Simplicity is intentional. This is the foundation.**

---

## IMPLEMENTATION STATUS

✓ Three locomotion states implemented (Idle, Walk, Run)  
✓ Posture-based intent system (gun-down vs gun-up)  
✓ Signal integration (recovery during idle, penalty on abrupt stop)  
✓ Momentum integration (builds during run, decays during idle)  
✓ State transition logic (all 6 transitions defined)  
✓ Animation frame management (8 FPS walk, 12 FPS run)  
✓ Sprite preservation (no rescaling, baseline alignment)  
✓ HUD callbacks (signal and momentum updates)  

⏳ Pending:
- Jump/air states integration
- Combat/shooting states
- Hazard collision detection
- Platform physics
- Directional facing variants

---

**Locomotion system is stable and ready for next phase integration.**
