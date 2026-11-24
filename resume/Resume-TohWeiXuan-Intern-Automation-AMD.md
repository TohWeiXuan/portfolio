# Toh Wei Xuan

Computer Science (Real-Time Interactive Simulation) student · Former Air Force Engineer
{.subtitle}

toh.weixuan@gmail.com · +65 82995285 · Singapore<br>[linkedin.com/in/wei-xuan-toh-091173436](https://www.linkedin.com/in/wei-xuan-toh-091173436) · [tohweixuan.github.io/portfolio](https://tohweixuan.github.io/portfolio/)
{.contact}

## Summary

Computer Science undergraduate at Singapore Institute of Technology, graduating 2028, applying for the 2027 Term 2 Internship – Software development, AI and Automation. Before university I spent four years diagnosing F-16 electrical faults and helped build a wire-testing kit that halved a wiring check's time, and I now build internal tools in C++, such as one generic undo/redo command for all 25 component types in my team's editor.

<!--
Posting: AMD "2027 Term 2 Internship – Software development, AI and Automation", Requisition ID 2026-90299, Singapore, onsite, 3 May or 19 Jul 2027 to 17 Dec 2027. Full text in Resume-TohWeiXuan-Intern-Automation-AMD.job.md.
Required: Python, C++ (or equivalent) with hands-on experience; script and tool development.
Preferred / project work: AI background, Copilot, pandas, n8n, RAG pipelines, prompts, agentic AI, AI chatbots, cleaning and analysing large datasets, PCB/hardware design review, UAT and feedback, troubleshooting, documentation and demos, chip testing, final test loadboards, ATE, CPU/FPGA.
Shown by bullets: C++, tool development (editor, build), scripting (Lua), large datasets (210 MB map data), testing and debugging, hardware testing and fault diagnosis (RSAF).
Gaps, left off because no bullet shows them: Python, Copilot, pandas, n8n, RAG, agentic AI, chatbots, UAT, PCB, ATE, loadboards, FPGA.
-->

## Experience

### Air Force Engineer (Electrical Instruments) <span class="when">Aug 2019 – Aug 2023</span>

Republic of Singapore Air Force (RSAF) · Singapore
{.org}

- Helped build a wire-testing kit that cut an F-16 wiring check from 2–3 people and up to 3 hours to 1 person in about 1.5 hours.
- Diagnosed electrical and instrument faults on F-16 fighter aircraft for 4 years through systematic troubleshooting, closing each to technical procedure with quality-control checks and leading teams of 3–4.

## Projects

### CROWDCRUSH — Simulation Programmer <span class="when">Sep 2026 – Present</span>

SIT team project · Team of 7 · Unreal Engine 5, C++, Mass Entity, SQLite, OpenStreetMap
{.org}

- Built an all-Singapore station map for a real-time Mass Rapid Transit (MRT) crowd simulator from about 210 MB of OpenStreetMap data in 8 regional SQLite databases, loaded in tiles on background threads. It draws 30,800 road segments, 2,100 buildings and 238 stations for about 3 ms a frame (20.0 to 23.2 ms).
- Wrote automated tests for the map's geographic projection and database coverage.
- Built a one-way people-per-minute counter for agents that have no collision, reworked over 5 versions: a gantry that blocked navigation, then a per-frame check of every agent against every plane, then pooled proxy spheres for agents near a plane only.

### Soot & Scoot — Engine Champion <span class="when">Sep 2025 – Apr 2026</span>

SIT team project · Team of 8 · 2D game · C++, OpenGL, ImGui, RTTR, Lua (sol2), CMake
{.org}

- Gave all 25 component types in the team's internal editor undo/redo with one generic command that snapshots components as JSON through RTTR runtime reflection, so new components get undo/redo with no extra code.
- Owned the core of the team's real-time C++/OpenGL application as top committer (472 of 1,454 commits in Git): designed the Entity Component System (ECS), main loop and event manager, and made 34 of the 50 CMake build changes.
- Integrated Lua scripting into the C++ application through sol2, used for player movement and the pause menu.
- Built navigation for up to 11 AI-controlled agents on a 55×31 grid: replaced a breadcrumb trail that stuttered when retraced with A\* search, plus context steering over 8 directions.

### Portal Mayhem — Weapons Programmer <span class="when">Sep 2024 – Nov 2024</span>

SIT team project · Team of 5 · C, CProcessing
{.org}

- Main author of the weapon system in plain C with no engine: 4 weapons, including a portal gun that keeps the player's velocity through linked portals, with projectile lifetimes in one shared entity array.

## Education

### Singapore Institute of Technology <span class="when">Sep 2024 – Aug 2028 (expected)</span>

Bachelor of Science (Honours) in Computer Science in Real-Time Interactive Simulation
{.org}

## Skills

- **Languages:** C++, C, Lua, SQL (SQLite) · **Spoken:** English (Fluent), Chinese (Native)
- **Hardware & Testing:** Test Kit Development, Fault Diagnosis, Aircraft Electrical Systems, Automated Testing
- **Software Engineering:** Internal Tools, Scripting Integration, ECS, Reflection & Serialization, Multithreading
- **Tools:** Git, CMake, ImGui, RTTR, sol2, Unreal Engine 5, OpenGL · **Algorithms:** A\* Search, Steering
