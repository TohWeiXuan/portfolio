# Toh Wei Xuan

Computer Science (Real-Time Interactive Simulation) student · Former Air Force Engineer
{.subtitle}

toh.weixuan@gmail.com · +65 82995285 · Singapore · [github.com/TohWeiXuan](https://github.com/TohWeiXuan) · [tohweixuan.github.io/portfolio](https://tohweixuan.github.io/portfolio/)
{.contact}

## Profile

C++ software engineer who designs the core systems a whole team builds on, pairing a Computer Science degree in Real-Time Interactive Simulation with four years of high-reliability engineering. As Engine Champion on an 8-person team, I designed the Entity Component System, event system, scene serialization and editor undo/redo that our game shipped on. As an Air Force Engineer, I kept fighter aircraft serviceable through systematic troubleshooting, quality control and team leadership.

## Projects

### Soot & Scoot — Engine Champion <span class="when">Sep 2025 – Apr 2026</span>

GAM 200/250 · Team of 8 · C++, OpenGL, ECS, ImGui, RTTR, Lua (sol2), FMOD, CMake
{.org}

- Owned the engine core for an 8-person team building a game from scratch on a custom C++ engine. Designed and refactored the Entity Component System, engine loop, window manager and event manager so that gameplay and editor code shared one event-driven architecture.
- Built roomba AI that navigates a tile-based house, combining A\* pathfinding for routes with context steering over 8 directions (interest/danger maps) for smooth obstacle avoidance. Line-of-sight detection drives 4 behaviour states: patrol, look-around, chase and return.
- Made editor undo/redo work for any component without per-component code by using RTTR reflection to snapshot components as JSON. Also shipped full scene and runtime-state serialization, hot-reloading prefabs and a tilemap editor in the ImGui level editor.
- Built a particle system with 3 emitter types (continuous, burst, distance-based trail) for the dust explosion and trail effects. Also added an MPEG video player (pl_mpeg) with audio kept in sync through FMOD for the game's 2 cutscenes.
- Integrated Lua via sol2 so player movement and the pause menu are scripted outside C++. Built a 7-scene game flow (splash, main menu, level select, pause, cutscene, win, death) with controller support, fullscreen toggle and pause on focus loss.

### Dwarf Mayhem: Into the Depths — Gameplay Programmer <span class="when">Jan – Mar 2025</span>

CSD1451 · Team of 5 · C++, Alpha Engine, cellular automata
{.org}

- On a 5-person C++ team, owned player mining on a pixel-based cellular simulation. Line-traced cell selection and a highlighting smart cursor let players dig the exact cells they aim at, and the mining area scales with upgrades.
- Built the inventory system, inventory scene and shop scene that close the dig → sell → upgrade loop, with 4 purchasable upgrades (larger mining size, jetpack, heat armor, full heal).
- Designed heat damage that scales with depth so that digging deeper carries more risk. Heat armor absorbs it, and 2 UI readouts (armor bar, depth indicator) show it.

### Portal Mayhem — Weapons Programmer <span class="when">Sep – Nov 2024</span>

CSD1401 · Team of 5 · C, CProcessing
{.org}

- Main author of the weapon system for a 5-person team in plain C. Shipped 4 weapons (portal gun, pistol, grenade launcher, disk launcher) with weapon switching and sprite rendering, and managed projectile lifetimes through a shared entity array.
- Implemented teleportation between 2 linked portals that keeps the player's angle and velocity through the exit portal, with a cooldown to prevent instant re-teleports.
- Made projectiles portal-aware: gravity-affected grenades bounce off tiles and explode on a timer, disks split into 2 after teleporting (with a speed cap), and explosions deal area damage.

## Technical Skills

- **Languages:** C++, C, Lua
- **Libraries & Engines:** OpenGL, ImGui, RTTR, sol2, FMOD
- **Engineering:** Object-Oriented Programming, ECS Architecture, Event-Driven Design, Serialization, Debugging
- **Tools:** Git, CMake, Visual Studio
- **Spoken:** English (Fluent), Chinese (Native)

## Experience

### Air Force Engineer <span class="when">August 2019 – August 2023</span>

Republic of Singapore Air Force (RSAF) · Singapore
{.org}

- Over 4 years, maintained fighter-aircraft serviceability in a high-reliability environment, tracing faults with systematic troubleshooting and closing them to technical procedure.
- Led a maintenance team to meet maintenance goals while reducing human-factor errors through quality control and clear team communication.
- Introduced new procedures and technologies that improved efficiency and streamlined operations.

## Education

### Singapore Institute of Technology <span class="when">September 2024 – Present</span>

Computer Science in Real-Time Interactive Simulation
{.org}
