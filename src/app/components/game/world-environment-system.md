# WORLD ENVIRONMENT SYSTEM — DOCUMENTATION

## Component Catalog

All environment components created in neutral greys.
Components are modular and can be combined to create segments.

---

## Background (Far) — Env/BG-Far/

**Purpose**: Establish world scale and depth  
**Motion**: Very slow parallax (0.1x–0.2x player speed)  
**Interaction**: None

### Components Created:
- Large structural frame
- Vertical shaft silhouette  
- Horizontal support beams

**Usage**: Place behind all other layers. Extends full screen width.

---

## Background (Mid) — Env/BG-Mid/

**Purpose**: Add mechanical detail and subtle life  
**Motion**: Subtle parallax (0.3x–0.5x) + occasional indicator blink  
**Interaction**: Visual only

### Components Created:
- Horizontal pipe system (with joints)
- Vertical conduit  
- Cable bundles
- Blinking indicators (slow flicker: 2-4 second intervals)

**Usage**: Layer between far background and foreground. Indicators can pulse softly.

---

## Foreground — Env/FG/

**Purpose**: Add depth, partial occlusion  
**Motion**: Static depth layer (1:1 with player)  
**Interaction**: Visual only (can occlude player partially)

### Components Created:
- Top rail with supports
- Floor grate sections  
- Broken panels

**Usage**: Place in front of player. Allows partial occlusion for depth without blocking gameplay visibility.

---

## Interactive Platforms — Env/Platform/

**Purpose**: Player collision surfaces  
**Motion**: Static (some variants may have slow vertical motion)  
**Interaction**: Full collision

### Components Created:
- Standard flat platform (140px wide, 12px tall)
- Step-up platform (100px wide, offset 50px up)
- Small step (50px wide, 10px tall)

**Support Structure**: All platforms have visible support columns/beams

**Vertical Rules**:
- Maximum stack: 2 levels
- Step height: 40-60px recommended
- Gaps between platforms: Allow jump distance (to be defined with character movement)

**Usage**: Primary gameplay layer. Arrange for moderate vertical navigation only.

---

## Hazards — Env/Hazard/

**Purpose**: Mechanical threats with learnable patterns  
**Motion**: Predictable, telegraphed  
**Interaction**: Damage on contact

### Components Created:

#### 1. Vertical Crusher
- **Pattern**: Slow descent → pause → quick retract
- **Telegraph**: Visible piston shaft, warning indicator blinks before descent
- **Timing**: ~3 second cycle (example)

#### 2. Vent Discharge
- **Pattern**: Charge phase → burst → cooldown
- **Telegraph**: Energy indicator bar fills before discharge
- **Timing**: ~4 second cycle (example)

#### 3. Exposed Energy Conduit
- **Pattern**: Pulse travels vertically, predictable intervals
- **Telegraph**: Pulse is visible, travels at constant speed
- **Timing**: ~2 second intervals between pulses (example)

**Critical Rules**:
- All hazards MUST have visible timing or pattern
- First encounter teaches the behavior
- Repetition tests precision, not panic reflex
- No instant deaths without warning

**Accent Color**: Apply accent to active hazard state only (e.g., energy glow, warning indicator)

---

## Collectibles — Env/Collectible/

**Purpose**: Signals/data to collect  
**Motion**: Subtle pulse allowed (soft breathing effect)  
**Interaction**: Collect on touch

### Components Created:
- Data cube (16×16px)
- Data shard (diamond shape, 16×16px)  
- Signal node (with connection lines)

**Visual Identity**:
- Clearly distinct from hazards (different shapes, softer forms)
- Accent color permitted here
- Optional: Soft pulsing glow (slow, ~2 second cycle)

**Usage**: Place in paths that require exploration or risk/reward decisions.

---

## Segment Assembly Guidelines

### Segment Structure
A "segment" is a self-contained horizontal section with:
- Clear entry point (visual continuation from previous segment OR start gate)
- Core gameplay section (100-300px horizontal length recommended)
- Clear exit point (gate, lift, corridor)

### Layering Order (back to front):
1. Background (Far)
2. Background (Mid)
3. Platforms
4. Hazards
5. Collectibles
6. Player (not shown here)
7. Foreground (partial occlusion)

### Segment Connection Methods:
- **Horizontal continuation**: Platforms align, background elements seamlessly extend
- **Lift transition**: Platform rises/lowers, next segment slides in
- **Gate/door**: Visual pause, gate opens, next segment revealed
- **Service corridor**: Narrow transitional space between larger areas

### Run Closure:
End of run must have visual finality:
- Exit door closes
- Machinery shuts down (indicators stop blinking)
- Lift descends out of view
- Screen fades to black

**NO endless loops**. Runs are finite.

---

## Color Usage Rules

### Base Environment:
All components shown in neutral greys:
- Near-Black: #0A0A0A
- Charcoal: rgba(60-80, 60-80, 65-85, various alphas)
- Muted Grey: rgba(90-110, 90-110, 95-115, various alphas)

### Accent Color Application:
ONE accent color per screen maximum.

Apply accent ONLY to:
- Active hazard state (energy, warning indicator)
- Collectibles (glow, core)
- Active machinery (indicator lights)

Do NOT apply accent to:
- Platforms
- Inactive background elements
- Structural components

**No gradients** on world geometry (solid fills or simple highlights only).

---

## Motion & Feedback Guidelines

### Allowed Motion:
- **Slow parallax**: Background layers move at 0.1x-0.5x player speed
- **Gentle flicker**: Indicators blink slowly (2-4 second intervals)
- **Mechanical motion**: Pistons, fans, lifts (slow, predictable)
- **Soft pulse**: Collectibles breathe softly (~2 second cycle)

### Not Allowed:
- Constant shaking or vibration
- Aggressive camera shake
- Chaotic geometry movement
- Screen-filling particle effects

### Feedback Style:
**Clear but restrained**

Player interaction feedback:
- Platform landing: Small dust puff (2-3 particles max)
- Collectible pickup: Brief light flash, soft pulse outward
- Hazard hit: Brief screen edge vignette (no screen shake)

**No explosions, no shard storms, no excessive debris**.

---

## Verticality: MODERATE

This world is NOT a vertical platformer.

### Allowed:
- Platforms stacked 1-2 levels high
- Short ladders or lift-like transitions (if needed)
- Drops that can be recovered from (player lands safely)

### Not Allowed:
- Extreme vertical shafts
- Parkour wall-running mechanics
- Continuous vertical climbing as primary gameplay

**Focus**: Horizontal progression with occasional vertical navigation.

---

## Hazard Philosophy: Semi-Random but Learnable

Hazards are NOT random death traps.

### Design Principle:
1. **First encounter**: Player observes pattern safely (or at minimal risk)
2. **Recognition**: Pattern repeats consistently
3. **Mastery**: Player learns timing, navigates confidently

### Timing Examples:
- Crusher: 1s warning blink → 1s descent → 0.5s pause → 0.5s retract → repeat
- Vent: 2s charge (indicator fills) → 0.5s burst → 1.5s cooldown → repeat
- Energy pulse: travels at constant speed, 2s intervals between pulses

**All timings MUST be consistent within a segment**.

**No instant, unfair deaths**. Player always has opportunity to learn and react.

---

## World Tone Reminders

This world is:
- Industrial
- Mechanical
- Functional
- Abandoned but still running

This world is NOT:
- Cyberpunk neon fantasy
- Explosive action spectacle
- Organic or natural
- Aggressive or hostile in tone (hazards are environmental, not adversarial)

**Visual restraint is more important than visual density**.

If something feels aggressive, it is likely wrong.

---

## Implementation Status

✓ Environment components created (neutral grey)  
✓ Layer system defined  
✓ Segment connection rules documented  
✓ Motion and feedback guidelines established  
✓ Hazard philosophy clarified  
✓ Component naming convention set  

⏳ Pending (separate phases):
- Character sprites
- HUD design
- Gameplay logic
- Accent color selection (will be applied to components marked above)

---

**Environment system foundation is complete and ready for game design work.**
