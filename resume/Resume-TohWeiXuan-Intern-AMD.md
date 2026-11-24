# Toh Wei Xuan

Computer Science (Real-Time Interactive Simulation) student · Former Air Force Engineer
{.subtitle}

toh.weixuan@gmail.com · +65 82995285 · Singapore<br>[linkedin.com/in/wei-xuan-toh-091173436](https://www.linkedin.com/in/wei-xuan-toh-091173436) · [tohweixuan.github.io/portfolio](https://tohweixuan.github.io/portfolio/)
{.contact}

## Summary

Computer Science undergraduate at Singapore Institute of Technology, graduating 2028, applying for the 2027 Term 1 Internship – Developing AI & Data Science Solutions to Accelerate AMD CPU/GPU Product Development. Before university I helped build a test kit that halved the time of an F-16 wiring check, and I now query 8 SQLite databases to map all of Singapore in a real-time crowd simulator, where I also built a people-per-minute flow metric for comparing Mass Rapid Transit (MRT) station layouts.

<!--
Posting: AMD "2027 Term 1 Internship – Developing AI & Data Science Solutions to Accelerate AMD CPU/GPU Product Development", Singapore. Full text in Resume-TohWeiXuan-Intern-AMD.job.md.
Required: Python (Pandas, Scikit-learn, Flask), SQL, data analytics, machine learning and AI fundamentals, REST API development, software development projects, problem-solving, analytical thinking, collaboration.
Preferred: cloud, CI/CD, MLOps, Kubernetes, ReactJS/Angular/Vue, LLMs, generative AI, AI agent frameworks, full-stack development, large-scale ML systems.
Shown by bullets: SQL, software development projects, collaboration (Git, team engine), analytical measurement, operational efficiency (test kit).
Gaps, left off because no bullet shows them: Python, Pandas, Scikit-learn, Flask, ML, REST APIs, cloud, CI/CD, MLOps, Kubernetes, web frameworks, LLMs.
Portal Mayhem cut: nothing in it matches the posting.
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

- Built an all-Singapore station map for a real-time MRT crowd simulator that queries OpenStreetMap data in tiles on background threads from an index database plus 8 regional SQLite databases (about 210 MB), re-querying only when the camera leaves the cached area. It draws 30,800 road segments, 2,100 buildings and 238 stations for about 3 ms a frame (20.0 to 23.2 ms).
- Built a people-per-minute flow metric for comparing station layouts: a one-way counting plane over a rolling window. Mass Entity agents have no collision, so I replaced a per-frame check of every agent against every plane with pooled proxy spheres for agents near a plane only.
- Wrote automated tests for the map's geographic projection and database coverage.

### Soot & Scoot — Engine Champion <span class="when">Sep 2025 – Apr 2026</span>

SIT team project · Team of 8 · 2D game · C++, OpenGL, ImGui, RTTR, CMake
{.org}

- Owned the core of the team's real-time C++/OpenGL application as top committer (472 of 1,454 commits in Git): designed the Entity Component System (ECS), main loop and event manager the other 7 developers built on, and made 34 of the 50 CMake build changes.
- Built navigation for up to 11 AI-controlled agents on a 55×31 grid: replaced a breadcrumb trail that stuttered when retraced with A\* search, plus context steering over 8 directions for local obstacle avoidance.
- Gave all 25 component types in the team's internal editor undo/redo with one generic command that snapshots components as JSON through RTTR runtime reflection, instead of undo code per component.

## Education

### Singapore Institute of Technology <span class="when">Sep 2024 – Aug 2028 (expected)</span>

Bachelor of Science (Honours) in Computer Science in Real-Time Interactive Simulation
{.org}

## Skills

- **Languages:** SQL (SQLite), C++ · **Spoken:** English (Fluent), Chinese (Native)
- **Data:** Geospatial Data (OpenStreetMap), JSON Serialization, Throughput Metrics
- **Testing:** Automated Testing, Frame-Time Measurement · **Algorithms:** A\* Search, Context Steering
- **Software Engineering:** ECS, Event-Driven Architecture, Reflection, Multithreading
- **Tools:** Git, CMake, Unreal Engine 5, Mass Entity, OpenGL, ImGui, RTTR

<!-- Dwarf Mayhem was cut to fit one page; it stays on the portfolio. -->
