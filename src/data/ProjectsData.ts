import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("soot-and-scoot", "Soot & Scoot", "img/projects/soot-and-scoot.jpg",
    `
    <div class="paragraph">
        <strong>Soot &amp; Scoot</strong> is a 2D stealth game made by an 8-person team (Clean Sweep Studios) for GAM 200/250,
        built from scratch in C++ and OpenGL on our own custom engine with an ImGui level editor.
        You play as a dust sprite trapped in a spotless house, hunted by relentless roombas. Rescue your friends and sneak to the exit
        before you get vacuumed out of existence.
    </div>

    <div class="paragraph">
        I was the team's <strong>Engine Champion</strong> and its most active contributor. What I built:
        <ul>
        <li><strong>Entity Component System</strong>: designed and refactored the engine's core ECS, along with the engine loop, window manager and an event manager for gameplay and editor events</li>
        <li><strong>Enemy AI</strong>: A* pathfinding on the tilemap grid, combined with context steering (interest/danger maps over 8 directions) for smooth local obstacle avoidance, plus line-of-sight detection and the roomba's patrol, look-around, chase and return states</li>
        <li><strong>Scene serialization and prefabs</strong>: full save/load of scenes and runtime state, a prefab system with hot-reload, and the tilemap editor</li>
        <li><strong>Editor undo/redo</strong>: generic undo/redo for any component, using RTTR reflection to snapshot components as JSON</li>
        <li><strong>Particle system</strong>: continuous, burst and distance-based trail emitters, used for the dust explosion and trail effects</li>
        <li><strong>Video playback</strong>: an MPEG video player (pl_mpeg) with audio played through FMOD in sync, used for the intro and ending cutscenes</li>
        <li><strong>Lua scripting</strong>: integrated Lua via sol2 for player movement and the pause menu</li>
        <li><strong>Game flow</strong>: splash screen, main menu, pause, level select, cutscene, win and death scenes, with controller support, fullscreen toggle and pausing when the window loses focus</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        C++ · OpenGL · ECS · ImGui · RTTR · Lua (sol2) · FMOD · CMake · Team of 8 · Sep 2025 to Apr 2026
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
        C++ · Alpha Engine · Cellular automata · Team of 5 · Jan to Mar 2025
        </div>
    </div>
    `, "#b5332a", false, true)
];
