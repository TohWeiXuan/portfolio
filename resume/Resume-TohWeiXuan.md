# Toh Wei Xuan

Computer Science (Real-Time Interactive Simulation) student · Former Air Force Engineer
{.subtitle}

toh.weixuan@gmail.com · +65 82995285 · Singapore<br>[linkedin.com/in/wei-xuan-toh-091173436](https://www.linkedin.com/in/wei-xuan-toh-091173436) · [tohweixuan.github.io/portfolio](https://tohweixuan.github.io/portfolio/)
{.contact}

## Summary

Computer Science (Real-Time Interactive Simulation) undergraduate at Singapore Institute of Technology, graduating 2028, after four years as an Air Force engineer. I designed the Entity Component System and generic undo/redo for my team's custom C++ engine, and built an all-Singapore station map for a real-time MRT crowd simulator in Unreal Engine 5.

<!-- Tailored copies: add "applying for the [ROLE] role at [COMPANY]" to the first sentence, using the posting's exact title. -->

## Experience

### Air Force Engineer (Electrical Instruments) <span class="when">Aug 2019 – Aug 2023</span>

Republic of Singapore Air Force (RSAF) · Singapore
{.org}

- Helped build a wire-testing kit that cut an F-16 wiring check from 2–3 people and up to 3 hours to 1 person in about 1.5 hours.
- Maintained electrical and instrument systems on F-16 fighter aircraft for 4 years, leading teams of 3–4 and closing faults to technical procedure with quality-control checks.

## Projects

### CROWDCRUSH — Simulation Programmer <span class="when">Sep 2026 – Present</span>

SIT team project · Team of 7 · Unreal Engine 5, C++, Mass Entity, SQLite, OpenStreetMap
{.org}

- Built the station map for a real-time Mass Rapid Transit (MRT) crowd simulator: all of Singapore from OpenStreetMap, streamed in tiles on background threads from 8 regional SQLite databases, with markers for all 238 stations. It draws 30,800 road segments and 2,100 buildings for about 3 ms a frame.
- Built a one-way throughput counter (people per minute) for Mass Entity agents, which have no collision. After a gantry that blocked navigation and a per-frame check of every agent against every plane, I moved to pooled proxy spheres for agents near a plane only, for performance.

### Soot & Scoot — Engine Champion <span class="when">Sep 2025 – Apr 2026</span>

SIT team project · Team of 8 · C++, OpenGL, ECS, ImGui, RTTR, Lua (sol2), FMOD, CMake
{.org}

- Owned the core of the team's custom real-time C++/OpenGL engine as its top committer (472 of 1,454 commits in Git): designed the Entity Component System (ECS), engine loop and event manager, and made 34 of the 50 CMake build changes.
- Gave all 25 component types in the ImGui level editor undo/redo with one generic command that snapshots components as JSON through RTTR runtime reflection, instead of undo code per component.
- Built navigation for up to 11 roombas on a 55×31 tile grid: replaced a breadcrumb trail that stuttered when retraced with A\* pathfinding, plus context steering over 8 directions for local obstacle avoidance.
- Built a particle system, an MPEG video player with audio synced through FMOD for 2 cutscenes, and Lua scripting through sol2 for player movement and the pause menu.

### Portal Mayhem — Weapons Programmer <span class="when">Sep 2024 – Nov 2024</span>

SIT team project · Team of 5 · C, CProcessing
{.org}

- Main author of the weapon system in plain C with no engine: 4 weapons, including a portal gun that keeps the player's velocity through linked portals, with projectile lifetimes in a shared entity array.

## Education

### Singapore Institute of Technology <span class="when">Sep 2024 – Aug 2028 (expected)</span>

Bachelor of Science (Honours) in Computer Science in Real-Time Interactive Simulation
{.org}

## Skills

- **Languages:** C++, C, Lua, SQL (SQLite)
- **Engines & Libraries:** Unreal Engine 5, Mass Entity, OpenGL, ImGui, RTTR, sol2, FMOD
- **Methods:** ECS, Event-Driven Architecture, Reflection & Serialization, A\* Pathfinding, Steering, Multithreading
- **Tools:** Git, CMake · **Spoken:** English (Fluent), Chinese (Native)

<!-- Dwarf Mayhem was cut to fit one page; it stays on the portfolio. -->
