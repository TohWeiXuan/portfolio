# Toh Wei Xuan

Computer Science (Real-Time Interactive Simulation) student · Former RSAF Engineer
{.subtitle}

toh.weixuan@gmail.com · +65 82995285 · Singapore<br>LinkedIn: [linkedin.com/in/wei-xuan-toh-091173436](https://www.linkedin.com/in/wei-xuan-toh-091173436) · Portfolio: [tohweixuan.github.io/portfolio](https://tohweixuan.github.io/portfolio/)
{.contact}

## Profile

C++ software engineer focused on real-time simulation, autonomous navigation and software architecture, with four years of RSAF aircraft engineering. Currently building a real-time MRT-station crowd simulator in Unreal Engine 5. Seeking an HTX apprenticeship in Vehicle & Weapon Systems or Robotics, Automation & Unmanned Systems.

## Education

### Singapore Institute of Technology <span class="when">Sep 2024 – Aug 2028 (expected)</span>

Bachelor of Science (Honours) in Computer Science in Real-Time Interactive Simulation
{.org}

## Experience

### Air Force Engineer (Electrical Instruments) <span class="when">Aug 2019 – Aug 2023</span>

Republic of Singapore Air Force (RSAF) · Singapore
{.org}

- Maintained fighter-aircraft electrical and instrument systems over 4 years in a high-reliability operational environment, tracing faults with systematic troubleshooting and closing them to technical procedure.
- Led a maintenance team to meet aircraft serviceability goals while reducing human-factor errors through quality control and clear team communication.
- Introduced new procedures and technologies that improved efficiency and streamlined maintenance operations.

## Projects

### CROWDCRUSH — Simulation Programmer <span class="when">Sep 2026 – Present</span>

SIT team project · Team of 7 · Unreal Engine 5, C++, Mass Entity, SQLite, OpenStreetMap
{.org}

- Built a one-way throughput trigger for a real-time MRT-station crowd simulator, counting pedestrian agents crossing a placeable plane and reporting flow rate (people/min). A Mass processor gives nearby agents pooled proxy spheres so collision-free agents still raise overlap events.
- Integrated an OpenStreetMap station map into the app: ported a SQLite R-tree map viewer rendering real streets and extruded buildings with camera-height LOD, and built clickable station markers that open each station's crowd simulation.

### Soot & Scoot — Engine Champion <span class="when">Sep 2025 – Apr 2026</span>

SIT team project · Team of 8 · C++, OpenGL, ECS, ImGui, RTTR, Lua (sol2), CMake
{.org}

- Built autonomous navigation for AI agents in a tile-based environment: A\* path planning on the grid, context steering (interest/danger maps over 8 directions) for local obstacle avoidance, line-of-sight perception, and a 4-state finite state machine (patrol, look-around, chase, return).
- Owned the core of a custom real-time C++ engine: designed the Entity Component System, engine loop and event manager so all gameplay and editor systems share one event-driven architecture.

### Portal Mayhem — Weapons Programmer <span class="when">Sep 2024 – Nov 2024</span>

SIT team project · Team of 5 · C, CProcessing
{.org}

- Main author of the weapon system in plain C: 4 weapons (portal gun, pistol, grenade launcher, disk launcher) with weapon switching, fire-rate limits and projectile lifetimes managed through a shared entity array.
- Wrote projectile simulation: gravity-affected grenade trajectories, collision response off terrain tiles, timed detonation and area-of-effect damage.

## Technical Skills

- **Programming Languages:** C++, C, Lua
- **Simulation & AI:** Crowd Simulation, A\* Path Planning, Obstacle Avoidance, State Machines, Projectile Physics
- **Software Engineering:** Object-Oriented Programming, ECS, Event-Driven Design, Serialization, Debugging
- **Libraries & Tools:** Unreal Engine 5, Mass Entity, SQLite, OpenGL, ImGui, RTTR, sol2, Git, CMake
- **Engineering Practice:** Aircraft Electrical & Instrument Systems, Fault Diagnosis, Quality Control, Leadership
- **Spoken Languages:** English (Fluent), Chinese (Native)
