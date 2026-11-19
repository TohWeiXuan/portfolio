# Toh Wei Xuan

Computer Science (Real-Time Interactive Simulation) student · Former RSAF Engineer
{.subtitle}

toh.weixuan@gmail.com · +65 82995285 · Singapore<br>LinkedIn: [linkedin.com/in/wei-xuan-toh-091173436](https://www.linkedin.com/in/wei-xuan-toh-091173436) · Portfolio: [tohweixuan.github.io/portfolio](https://tohweixuan.github.io/portfolio/)
{.contact}

## Summary

Computer Science (Real-Time Interactive Simulation) undergraduate at Singapore Institute of Technology, graduating 2028, applying for HTX Apprenticeship Program 2027 – Apprentices (RAUS). I built motion planning for autonomous agents in C++ (A\* path planning with context-steering obstacle avoidance) and multithreaded map streaming for a real-time crowd simulator, after four years maintaining F-16 electrical systems.

<!-- Posting: HTX Apprenticeship Program 2027 - Apprentices (RAUS), Job ID 26006977, deadline 28/2/27. ROS, robot control, inverse kinematics, computer vision, deep learning, Docker, Linux and Unity are asked for but not shown by any bullet, so they are left off. -->

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

- Built a map of all of Singapore for a real-time Mass Rapid Transit (MRT) crowd simulator: OpenStreetMap tiles stream on background threads from 8 regional SQLite databases, with markers for all 238 stations. It draws 30,800 road segments and 2,100 buildings for about 3 ms a frame.
- Built a one-way flow counter for simulated agents that have no collision. For performance, I replaced a per-frame check of every agent against every counting plane with pooled proxy spheres only for agents near a plane.

### Soot & Scoot — Engine Champion <span class="when">Sep 2025 – Apr 2026</span>

SIT team project · Team of 8 · C++, OpenGL, ECS, ImGui, RTTR, Lua (sol2), CMake
{.org}

- Built motion planning for up to 11 autonomous agents on a 55×31 grid: A\* path planning for the route, context steering over 8 directions (interest and danger maps) for local obstacle avoidance, line-of-sight perception and a 4-state behaviour machine.
- Replaced a breadcrumb trail that stuttered when agents retraced it with A\* re-planning, then layered steering back on top so agents avoid obstacles between waypoints.
- Owned the core of a custom real-time C++/OpenGL engine as the team's top committer (472 of 1,454 commits in Git): designed the Entity Component System (ECS), engine loop and event manager.

### Portal Mayhem — Weapons Programmer <span class="when">Sep 2024 – Nov 2024</span>

SIT team project · Team of 5 · C, CProcessing
{.org}

- Wrote projectile simulation in plain C with no engine: gravity-affected trajectories, collision response off terrain tiles and portal teleports that carry velocity through.

## Education

### Singapore Institute of Technology <span class="when">Sep 2024 – Aug 2028 (expected)</span>

Bachelor of Science (Honours) in Computer Science in Real-Time Interactive Simulation
{.org}

## Skills

- **Programming Languages:** C, C++, SQL (SQLite)
- **Robotics & Control:** Motion Planning, A\* Path Planning, Obstacle Avoidance, Line-of-Sight Perception, State Machines
- **Platforms & Engineering:** Git, CMake, Unreal Engine 5, Mass Entity, OpenGL, Multithreading, ECS
- **Engineering Practice:** Aircraft Electrical Systems, Test Kit Development, Fault Diagnosis, Quality Control
- **Spoken Languages:** English (Fluent), Chinese (Native)
