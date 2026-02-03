# SEGMENT GRAMMAR — DOCUMENTATION

## Overview

Segments are reusable micro-units that assemble into finite runs.
This is NOT level design yet — it is segment grammar.

Each segment:
- Fits within one screen width (1440px primary canvas)
- Has clear entry zone (left 200px)
- Has clear exit zone (right 200px)
- Uses existing Env/* components only

---

## THREE SEGMENT TEMPLATES

### 1. SEGMENT / FLAT

**Purpose**: Teach rhythm and timing

**Structure**:
- Single ground platform
- 1-2 hazards with visible timing
- 1-2 collectibles placed safely
- No vertical jumps required

**What it teaches**:
- Movement + hazard cadence
- Player learns basic timing patterns

**What it punishes**:
- Rushing without observing patterns
- Ignoring hazard indicators

**What it reinforces**:
- Patience
- Pattern recognition
- Safe timing windows

**Learning Goal**: Player understands movement + hazard cadence

---

### 2. SEGMENT / VERTICAL

**Purpose**: Test spatial judgment without speed pressure

**Structure**:
- 1-2 platform height difference max
- One recoverable drop OR ladder/lift
- Hazards placed to punish panic, not patience
- Collectibles placed to suggest path

**What it teaches**:
- Vertical positioning
- Reading elevation changes
- Safe descent timing

**What it punishes**:
- Panic climbing
- Ignoring collectible path guidance
- Hasty drops

**What it reinforces**:
- Observation before action
- Using collectibles as visual guides
- Controlled movement

**Learning Goal**: Player learns vertical positioning

---

### 3. SEGMENT / MIXED

**Purpose**: Combine timing + positioning

**Structure**:
- Flat entry → vertical middle → flat exit
- One primary hazard + one secondary hazard
- Collectibles used as guidance, not reward spam
- No blind jumps

**What it teaches**:
- Integration of timing and spatial skills
- Multi-phase navigation
- Hazard layering

**What it punishes**:
- Single-skill reliance
- Ignoring environment structure
- Blind progression

**What it reinforces**:
- Mastery without aggression
- Reading full segment layout
- Precision over speed

**Learning Goal**: Player demonstrates mastery without aggression

---

## SEGMENT DESIGN RULES (STRICT)

### Hazard Rules:
- **No more than 3 hazards per segment**
- Every hazard must be visible before activation
- All hazards have learnable patterns
- No instant, unfair deaths

### Collectible Rules:
- Collectibles must never force damage
- Used as guidance, not reward spam
- Suggest safe paths and timing windows
- Visually distinct from hazards

### Platform Rules:
- Platforms must visually communicate solidity
- Support structures required for all platforms
- Maximum vertical offset: 1-2 levels
- No extreme gaps or blind jumps

### Pacing Rules:
- No segment should feel faster than the previous one
- Entry and exit zones (200px each) must remain clear
- Each segment has clear start and end
- Transitions use gates, lifts, or corridors

---

## SEGMENT COMPOSITION

### Component Usage:
All segments use existing environment components:
- `Env/BG-Far/*` — Background far layer
- `Env/BG-Mid/*` — Background mid layer with indicators
- `Env/FG/*` — Foreground occlusion layer
- `Env/Platform/*` — Interactive platforms
- `Env/Hazard/*` — Mechanical hazards (crushers, vents, energy)
- `Env/Collectible/*` — Data objects (cubes, shards, nodes)

### Layering Order (back to front):
1. Background (Far)
2. Background (Mid)
3. Platforms
4. Hazards
5. Collectibles
6. Player (not shown in templates)
7. Foreground (partial occlusion)

---

## RUN ASSEMBLY

### From Segments to Runs:
A "run" is a finite sequence of connected segments.

**Example Run Structure**:
```
[Start Gate] → [Flat 1] → [Vertical 1] → [Flat 2] → [Mixed 1] → [Vertical 2] → [Exit Door]
```

### Connection Methods:
- **Horizontal continuation**: Platforms align, backgrounds extend seamlessly
- **Lift transition**: Platform rises/lowers, next segment slides in
- **Gate/door**: Visual pause, gate opens, reveal next segment
- **Service corridor**: Narrow transitional space

### Run Closure:
End of run must have visual finality:
- Exit door closes
- Machinery shuts down (indicators stop)
- Lift descends out of view
- Screen fades to black

**NO endless loops**. Runs are finite.

---

## DESIGN PHILOSOPHY

### This is NOT:
- Random level generation
- Procedural endless runner
- Speed-based challenge
- Reflex-testing gauntlet

### This IS:
- Authored, learnable sequences
- Precision-based navigation
- Pattern mastery over memorization
- Restrained, functional challenge

---

## SEGMENT PROGRESSION STRATEGY

### Early Segments:
- Use Flat segments to introduce hazard types
- Single hazard per segment
- Generous safe zones
- Clear timing indicators

### Mid Segments:
- Introduce Vertical segments for spatial learning
- Combine two hazard types
- Collectibles guide optimal paths
- Moderate vertical navigation (1 level)

### Late Segments:
- Use Mixed segments to combine skills
- Layer hazards with clear patterns
- Require observation + timing + positioning
- Still no speed pressure

### Key Principle:
**Difficulty through precision requirement, NOT through speed or chaos.**

---

## FORBIDDEN PATTERNS

### DO NOT:
- Create segments with more than 3 hazards
- Place hazards that activate without warning
- Force damage to collect items
- Create blind jumps or drops
- Add vertical sections exceeding 2 platform levels
- Make segments feel faster than previous ones
- Block entry/exit zones with geometry
- Use random or unpredictable hazard patterns

### If you're tempted to add:
- Screen shake → Don't
- Explosions → Don't
- Particle storms → Don't
- Aggressive motion → Don't
- Neon effects → Don't
- Cyberpunk styling → Don't

**If something feels aggressive, it is likely wrong.**

---

## IMPLEMENTATION STATUS

✓ Three segment templates created (Flat, Vertical, Mixed)  
✓ Segment grammar documented (teaches, punishes, reinforces)  
✓ Design rules established (strict constraints)  
✓ Component composition defined  
✓ Run assembly strategy outlined  

⏳ Pending:
- Character sprites (separate phase)
- Accent color application (separate phase)
- Motion and animation implementation
- Gameplay logic and state management
- Actual level/run design

---

**Segment grammar is complete and ready for use.**
