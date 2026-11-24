# Toh Wei Xuan

Computer Science (Real-Time Interactive Simulation) student · Former RSAF Engineer
{.subtitle}

toh.weixuan@gmail.com · +65 82995285 · Singapore<br>LinkedIn: [linkedin.com/in/wei-xuan-toh-091173436](https://www.linkedin.com/in/wei-xuan-toh-091173436) · Portfolio: [tohweixuan.github.io/portfolio](https://tohweixuan.github.io/portfolio/)
{.contact}

## Summary

Computer Science (Real-Time Interactive Simulation) undergraduate at Singapore Institute of Technology, graduating 2028, applying for the DSTA Internship Programme in Software Development, Simulations & Training Systems, and Artificial Intelligence. I designed the Entity Component System and autonomous agent AI for my team's C++ engine in Soot & Scoot, and built the all-Singapore station map for CROWDCRUSH, a Mass Rapid Transit (MRT) crowd simulator in Unreal Engine 5, after four years maintaining F-16 electrical systems in the RSAF.

<!-- Posting: DSTA Internship Programme brochure (no role title or job ID). Areas picked: Software Development, Simulations & Training Systems Hub, Artificial Intelligence. The brochure names no tools. Machine learning, deep learning, data science and Python are not shown by any bullet, so they are left off; "AI" here means autonomous agent decision-making. -->

## Experience

### Air Force Engineer (Electrical Instruments) <span class="when">Aug 2019 – Aug 2023</span>

Republic of Singapore Air Force (RSAF) · Singapore
{.org}

- Helped build a test kit that cut an F-16 wiring check from 2–3 people to 1, and from up to 3 hours to about 1.5.
- Maintained electrical and instrument systems on F-16 fighter aircraft for 4 years, leading teams of 3–4 and closing faults to technical procedure with quality-control checks.

## Projects

### CROWDCRUSH — Simulation Programmer <span class="when">Sep 2026 – Present</span>

SIT team project · Team of 7 · Unreal Engine 5, C++, Mass Entity, SQLite, OpenStreetMap
{.org}

- Built the map of all of Singapore for a real-time MRT crowd simulator: OpenStreetMap tiles stream on background threads from 8 regional SQLite databases, with markers for all 238 stations. It draws 30,800 road segments and 2,100 buildings for about 3 ms a frame.
- Built a pedestrian-flow counter (people per minute through any opening) used to assess station layouts. Over 5 versions I replaced a per-frame check of every agent against every counting plane with pooled proxy spheres for agents near a plane only, for performance.

### Soot & Scoot — Engine Champion <span class="when">Sep 2025 – Apr 2026</span>

SIT team project · Team of 8 · C++, OpenGL, ECS, ImGui, RTTR, Lua (sol2), CMake
{.org}

- Owned the core of the team's real-time C++/OpenGL engine as top committer (472 of 1,454 commits in Git): designed the Entity Component System (ECS), engine loop and event manager.
- Built decision-making for up to 11 autonomous agents: A\* path planning, 8-direction context steering for obstacle avoidance, line-of-sight perception and a 4-state behaviour machine, replacing a stuttering breadcrumb trail.
- Gave all 25 component types in the editor undo/redo with one generic command that snapshots components as JSON via RTTR reflection, instead of per-component undo code.

### Portal Mayhem — Weapons Programmer <span class="when">Sep 2024 – Nov 2024</span>

SIT team project · Team of 5 · C, CProcessing
{.org}

- Wrote projectile simulation in plain C with no engine: gravity-affected trajectories, collision response off terrain tiles and portal teleports that carry velocity through.

## Education

### Singapore Institute of Technology <span class="when">Sep 2024 – Aug 2028 (expected)</span>

Bachelor of Science (Honours) in Computer Science in Real-Time Interactive Simulation
{.org}

## Skills

- **Programming Languages:** C++, C, SQL (SQLite)
- **Software Engineering:** ECS, Event-Driven Architecture, Command Pattern, Reflection & Serialization, Multithreading
- **Simulation & AI:** Crowd Simulation, Autonomous Agents, A\* Path Planning, Obstacle Avoidance, State Machines, Physics, Geospatial Data
- **Tools:** Unreal Engine 5, Mass Entity, OpenGL, RTTR, Git, CMake
- **Defence Engineering:** Aircraft Electrical & Instrument Systems, Fault Diagnosis, Quality Control
- **Spoken Languages:** English (Fluent), Chinese (Native)
