import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("crowdcrush", "CROWDCRUSH", "img/projects/crowdcrush.jpg",
    `
    <div class="paragraph">
        <strong>CROWDCRUSH</strong> is a real-time crowd-control and pedestrian-flow simulator for Mass Rapid Transit (MRT) stations,
        built in Unreal Engine 5 by a 7-person team (6 programmers and 1 UX designer) for GAM 300.
        You edit a station layout while the simulation runs and watch the crowd re-flow, with live congestion heatmaps.
        Agents run on UE5's Mass Entity framework so the simulation can scale to large crowds.
        I'm a <strong>Simulation Programmer</strong> on the team.
    </div>

    <div class="paragraph">
        <strong>The problem.</strong> A crowd simulator is only useful if you can measure it. We needed to count how many people
        pass any point in a station, in one direction, while the layout is being edited live, and to show each simulation
        in the context of the real station and its streets.
    </div>

    <div class="paragraph">
        <strong>The constraint.</strong> Mass Entity agents have no collision, so Unreal's normal trigger volumes never see them.
        Counting had to work without changing how the agents navigate.
    </div>

    <div class="paragraph">
        <strong>What I built.</strong>
        <ul>
        <li><strong>Throughput trigger</strong>: a one-way counting plane you can place, rotate and scale anywhere in a station. A Mass processor gives only the agents near a plane pooled proxy spheres that follow them, so the plane gets real overlap events without touching the navmesh or adding collision to every agent. It reports flow in people per minute over a rolling window</li>
        <li><strong>All-Singapore station map</strong>: real streets, extruded buildings and points of interest from OpenStreetMap, covering the whole island. The map loads in tiles on background threads from an index database plus 8 region SQLite databases (about 210 MB), only re-queries when the camera leaves the cached area, and drops road detail with camera height</li>
        <li><strong>Station markers</strong>: all 238 stations get a marker automatically. A marker turns clickable once a station layout is set for it, highlights the station's real building footprint and opens that station's crowd simulation, with a top-down pan and zoom camera</li>
        <li><strong>Menu integration</strong>: a Station Map tab on the start menu and a Back to Map flow (File menu or M key) with an unsaved-changes prompt</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>What failed, and what I changed.</strong> The counter took 5 versions in 4 days:
        <ul>
        <li>A fare-gantry actor with lane dividers. Its dividers blocked navigation and cut one-way lanes out of the navmesh, so the counter changed how the crowd walked</li>
        <li>A counting plane, then a tripwire Mass processor, that checked every agent's movement against every plane each frame. That no longer touched navigation, but its cost grew with every agent and every plane</li>
        <li>For performance, the final trigger gives pooled proxy spheres only to agents near a plane, and the plane itself never ticks: crossings are counted only when they happen. The last change made it one-way, so both directions of an opening are counted with two planes</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Result.</strong> Measured in the editor over Punggol and Sengkang at 800 m, the map draws 30,800 road segments
        and 2,100 buildings at 23.2 ms a frame, against 20.0 ms with the map hidden: about 3 ms for the whole map. Tiles load in
        52 ms on average. I also wrote automated tests for the map's geographic projection and database coverage.
    </div>

    <div class="paragraph">
        <div class="notice">
        Unreal Engine 5, C++, Mass Entity, SQLite, OpenStreetMap. Team of 7, Sep 2026 to present.
        Map data &copy; OpenStreetMap contributors.
        </div>
    </div>
    `, "#1f4e79", true, true),
    new ProjectData("soot-and-scoot", "Soot & Scoot", "img/projects/soot-and-scoot.jpg",
    `
    <div class="paragraph">
        <strong>Soot &amp; Scoot</strong> is a 2D stealth game made by an 8-person team (Clean Sweep Studios) for GAM 200/250,
        built from scratch in C++ and OpenGL on our own custom engine with an ImGui level editor.
        You play as a dust sprite trapped in a spotless house, hunted by relentless roombas. Rescue your friends and sneak to the exit
        before you get vacuumed out of existence.
    </div>

    <div class="paragraph center">
        <video class="trailer" controls preload="metadata" poster="video/soot-and-scoot-trailer.jpg">
            <source src="video/soot-and-scoot-trailer.mp4" type="video/mp4">
        </video>
    </div>

    <div class="paragraph">
        <strong>The problem.</strong> I was the team's <strong>Engine Champion</strong> and its most active contributor.
        Eight people were building a game and its level editor at the same time on an engine that didn't exist yet,
        so every gameplay and editor feature depended on the core I owned.
    </div>

    <div class="paragraph">
        <strong>The constraint.</strong> No third-party engine: the game and the editor had to share one C++ codebase,
        and the editor had to support any component the team added without me writing code for each one.
    </div>

    <div class="paragraph">
        <strong>The choices I made.</strong>
        <ul>
        <li><strong>Entity Component System (ECS)</strong>: designed and refactored the engine's core ECS, along with the engine loop, window manager and an event manager, so gameplay and editor code share one event-driven architecture. I also kept the CMake build working, with 34 of its 50 changes</li>
        <li><strong>Editor undo/redo</strong>: instead of undo logic per component, one generic command snapshots a component as JSON through RTTR reflection before and after an edit. All 25 component types in the editor get undo/redo from it, and any new component gets it with no extra code</li>
        <li><strong>Scene serialization and prefabs</strong>: full save/load of scenes and runtime state, a prefab system with hot-reload, and the tilemap editor</li>
        <li><strong>Enemy AI</strong>: A* pathfinding on the 55&times;31 tilemap grid plans the route, and context steering (interest/danger maps over 8 directions) handles smooth local obstacle avoidance. Line-of-sight detection drives the roomba's patrol, look-around, chase and return states, for up to 11 roombas in a level</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>What failed, and what I changed.</strong> Roombas first found their way back to their patrol route by retracing a
        breadcrumb trail, which made them slow down and stutter. I replaced it with A* pathfinding and removed the breadcrumbs
        the same day. Then I put context steering back on top of A*, so roombas follow the planned path but still steer
        smoothly round obstacles between waypoints, and fixed a chase-stuck bug the next day.
    </div>

    <div class="paragraph">
        <strong>What else I shipped.</strong>
        <ul>
        <li><strong>Particle system</strong>: continuous, burst and distance-based trail emitters, used for the dust explosion and trail effects</li>
        <li><strong>Video playback</strong>: an MPEG video player (pl_mpeg) with audio played through FMOD in sync, used for the intro and ending cutscenes</li>
        <li><strong>Lua scripting</strong>: integrated Lua via sol2 for player movement and the pause menu</li>
        <li><strong>Game flow</strong>: splash screen, main menu, pause, level select, cutscene, win and death scenes, with controller support, fullscreen toggle and pausing when the window loses focus</li>
        </ul>
    </div>

    <div class="paragraph">
        <strong>Result.</strong> The game shipped with 5 levels on the engine. I was its top committer, with 472 of the team's 1,454 commits.
    </div>

    <div class="paragraph">
        <div class="notice">
        C++, OpenGL, ECS, ImGui, RTTR, Lua (sol2), FMOD, CMake. Team of 8, Sep 2025 to Apr 2026.
        </div>
    </div>
    `, "#2b2b2b", true),
    new ProjectData("dwarf-mayhem", "Dwarf Mayhem: Into the Depths", "img/projects/dwarf-mayhem.jpg",
    `
    <div class="paragraph">
        <strong>Dwarf Mayhem: Into the Depths</strong> is a 2D mining game made by a 5-person team for CSD1451,
        built in C++ on DigiPen's Alpha Engine. The world is a pixel-based cellular simulation:
        you dig down through it, collect ores and manage heat and oxygen as you go deeper.
    </div>

    <div class="paragraph center">
        <video class="trailer" controls preload="metadata" poster="video/dwarf-mayhem-trailer.jpg">
            <source src="video/dwarf-mayhem-trailer.mp4" type="video/mp4">
        </video>
    </div>

    <div class="paragraph">
        What I worked on:
        <ul>
        <li><strong>Mining</strong>: player mining on the cellular matrix, including line-traced cell selection, a smart cursor with cell highlighting, and a mining area that scales with upgrades</li>
        <li><strong>Inventory</strong>: the inventory system and inventory scene for viewing and dropping collected ores</li>
        <li><strong>Shop and upgrades</strong>: the shop scene for selling ores and buying upgrades: larger mining size, a jetpack, heat armor and a full heal</li>
        <li><strong>Heat system</strong>: heat damage that scales with the player's depth, absorbed by heat armor, with an armor bar in the UI</li>
        <li><strong>Depth indicator</strong>: on-screen text showing how deep the player is</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        C++, Alpha Engine, cellular automata. Team of 5, Jan to Mar 2025.
        </div>
    </div>
    `, "#b5332a", false, true),
    new ProjectData("portal-mayhem", "Portal Mayhem", "img/projects/portal-mayhem.jpg",
    `
    <div class="paragraph">
        <strong>Portal Mayhem</strong> is a 2D survival shooter made by a 5-person team for CSD1401,
        built in C on DigiPen's CProcessing framework. Monsters pour in and you hold out as long as you can,
        switching between weapons and using a portal gun to reposition yourself and redirect your shots.
    </div>

    <div class="paragraph center">
        <video class="trailer" controls preload="metadata" poster="video/portal-mayhem-trailer.jpg">
            <source src="video/portal-mayhem-trailer.mp4" type="video/mp4">
        </video>
    </div>

    <div class="paragraph">
        <strong>The problem.</strong> I was the main author of the weapon system: 4 weapons whose projectiles all had to
        work with portals, so a bullet, grenade or disk could leave one portal and keep flying out of the other.
    </div>

    <div class="paragraph">
        <strong>The constraint.</strong> Plain C with no engine. CProcessing handles drawing and input, but there are no
        classes, physics or entity system to lean on. Every projectile's lifetime, movement and collision had to be written by hand.
    </div>

    <div class="paragraph">
        <strong>The choices I made.</strong>
        <ul>
        <li><strong>One shared entity array</strong>: every projectile and explosion lives in the same array, so weapon switching, lifetimes and cleanup are handled in one place instead of per weapon</li>
        <li><strong>Portal gun</strong>: teleporting carries the player's angle and velocity through the exit portal. Without a cooldown, a player leaving a portal would be teleported straight back, so teleports have one</li>
        <li><strong>Grenade launcher</strong>: gravity-affected grenades that bounce off tiles, travel through portals and explode when their timer runs out</li>
        <li><strong>Disk launcher</strong>: disks split into two smaller disks after teleporting, with a speed cap</li>
        <li><strong>Pistol and explosions</strong>: fire-rate limited shooting with a capped bullet count, and short-lived explosion entities that deal area damage</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        C, CProcessing. Team of 5, Sep to Nov 2024.
        </div>
    </div>
    `, "#c0392b")
];
