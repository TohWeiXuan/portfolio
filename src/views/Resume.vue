<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Toh Wei Xuan</strong>, a C++ software engineer who designs the core systems a whole team builds on, pairing a Computer Science degree in Real-Time Interactive Simulation with four years of high-reliability engineering.
      <br />
      <br />As Engine Champion on an 8-person team, I designed the Entity Component System, event system, scene serialization and editor undo/redo that our game shipped on. As an Air Force Engineer, I kept fighter aircraft serviceable through systematic troubleshooting, quality control and team leadership.
      <br />
      <br />If you have an opportunity in mind, feel free to
      <router-link to="/contact">contact me</router-link>.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Resume-TohWeiXuan.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <a class="download-link" href="https://www.linkedin.com/in/wei-xuan-toh-091173436" target="_blank"><i class="fa fa-linkedin fa-lg fa-fw"></i> View on LinkedIn</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Projects</h2>

      <h3>Soot &amp; Scoot - Engine Champion</h3>
      <h4>GAM 200/250, team of 8, Sep 2025 - Apr 2026</h4>

      <ul>
        <li>Owned the engine core for an 8-person team building a game from scratch on a custom C++ engine. Designed and refactored the Entity Component System, engine loop, window manager and event manager so that gameplay and editor code shared one event-driven architecture.</li>
        <li>Built roomba AI that navigates a tile-based house, combining A* pathfinding for routes with context steering over 8 directions (interest/danger maps) for smooth obstacle avoidance. Line-of-sight detection drives 4 behaviour states: patrol, look-around, chase and return.</li>
        <li>Made editor undo/redo work for any component without per-component code by using RTTR reflection to snapshot components as JSON. Also shipped full scene and runtime-state serialization, hot-reloading prefabs and a tilemap editor in the ImGui level editor.</li>
        <li>Built a particle system with 3 emitter types (continuous, burst, distance-based trail) for the dust explosion and trail effects. Also added an MPEG video player (pl_mpeg) with audio kept in sync through FMOD for the game's 2 cutscenes.</li>
        <li>Integrated Lua via sol2 so player movement and the pause menu are scripted outside C++. Built a 7-scene game flow (splash, main menu, level select, pause, cutscene, win, death) with controller support, fullscreen toggle and pause on focus loss.</li>
      </ul>

      <div class="tech-stack">C++, OpenGL, ECS, ImGui, RTTR, Lua (sol2), FMOD, CMake</div>

      <h3>Dwarf Mayhem: Into the Depths - Gameplay Programmer</h3>
      <h4>CSD1451, team of 5, Jan - Mar 2025</h4>

      <ul>
        <li>On a 5-person C++ team, owned player mining on a pixel-based cellular simulation. Line-traced cell selection and a highlighting smart cursor let players dig the exact cells they aim at, and the mining area scales with upgrades.</li>
        <li>Built the inventory system, inventory scene and shop scene that close the dig &rarr; sell &rarr; upgrade loop, with 4 purchasable upgrades (larger mining size, jetpack, heat armor, full heal).</li>
        <li>Designed heat damage that scales with depth so that digging deeper carries more risk. Heat armor absorbs it, and 2 UI readouts (armor bar, depth indicator) show it.</li>
      </ul>

      <div class="tech-stack">C++, Alpha Engine, cellular automata</div>

      <h3>Portal Mayhem - Weapons Programmer</h3>
      <h4>CSD1401, team of 5, Sep - Nov 2024</h4>

      <ul>
        <li>Main author of the weapon system for a 5-person team in plain C. Shipped 4 weapons (portal gun, pistol, grenade launcher, disk launcher) with weapon switching and sprite rendering, and managed projectile lifetimes through a shared entity array.</li>
        <li>Implemented teleportation between 2 linked portals that keeps the player's angle and velocity through the exit portal, with a cooldown to prevent instant re-teleports.</li>
        <li>Made projectiles portal-aware: gravity-affected grenades bounce off tiles and explode on a timer, disks split into 2 after teleporting (with a speed cap), and explosions deal area damage.</li>
      </ul>

      <div class="tech-stack">C, CProcessing</div>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Programming</h3>
        <div>C++</div>
        <div>C</div>
        <div>Lua</div>
        <div>OpenGL</div>
      </div>

      <div class="skill-set">
        <h3>Game development</h3>
        <div>Real-Time Simulation</div>
        <div>Gameplay Programming</div>
        <div>Game Systems</div>
      </div>

      <div class="skill-set">
        <h3>Software engineering</h3>
        <div>Object-Oriented Programming</div>
        <div>ECS Architecture</div>
        <div>Debugging</div>
        <div>Event-Driven Systems</div>
      </div>

      <div class="skill-set">
        <h3>Tools</h3>
        <div>Git</div>
        <div>CMake</div>
        <div>Visual Studio</div>
        <div>ImGui</div>
        <div>FMOD</div>
      </div>

      <div class="skill-set">
        <h3>Technical</h3>
        <div>Collision Detection</div>
        <div>A* Pathfinding</div>
        <div>AI / Steering Behaviour</div>
        <div>Particle Systems</div>
        <div>Serialization &amp; Reflection</div>
        <div>Scene Management</div>
        <div>UI Integration</div>
      </div>

      <div class="skill-set">
        <h3>Professional</h3>
        <div>Team Collaboration</div>
        <div>Problem Solving</div>
        <div>Technical Documentation</div>
        <div>Technical Reporting</div>
      </div>
      <div style="clear:both" />

      <h2>Work experience</h2>

      <h3>Air Force Engineer - Republic of Singapore Air Force (RSAF)</h3>
      <h4>August 2019 - August 2023, Singapore</h4>

      <ul>
        <li>Over 4 years, maintained fighter-aircraft serviceability in a high-reliability environment, tracing faults with systematic troubleshooting and closing them to technical procedure.</li>
        <li>Led a maintenance team to meet maintenance goals while reducing human-factor errors through quality control and clear team communication.</li>
        <li>Introduced new procedures and technologies that improved efficiency and streamlined operations.</li>
      </ul>

      <h2>Education</h2>

      <h3>Singapore Institute of Technology - September 2024</h3>
      <h4>Computer Science in Real-Time Interactive Simulation</h4>

      <h2>Languages</h2>

      <h3>English</h3>
      <div>Fluent</div>

      <h3>Chinese</h3>
      <div>Native</div>
    </div>
  </div>
</template>

<style scoped lang="less">

@import '../css/variables.less';

h2 {
  font-size: 2.2em;
  line-height: 1.1;
  margin: 0px;
  padding: 0px;
  padding-top: 56px;
}
h3 {
  font-size: 1.5em;
  line-height: 1.2;
  margin: 0px;
  padding: 0px;
  padding-top: 28px;
}
h4 {
  font-family: @bodyFont;
  font-weight: 400;
  font-size: 1em;
  color: @mutedTextColor;
  margin: 0px;
  padding: 0px;
  padding-top: 4px;
}

.paragraph {
  max-width: 68ch;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div, .full-content ul {
  max-width: 68ch;
}

.skill-set h3 {
  padding-bottom: 8px;
}

.tech-stack {
  color: @mutedTextColor;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }

  .skill-set {
    float: left;
    padding-right: 60px;
  }
}
</style>
