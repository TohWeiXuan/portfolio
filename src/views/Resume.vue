<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Toh Wei Xuan</strong>, a Computer Science (Real-Time Interactive Simulation) undergraduate at the Singapore Institute of Technology, graduating in 2028, after four years as an Air Force engineer.
      <br />
      <br />I designed the Entity Component System and generic undo/redo for my team's custom C++ engine, and built an all-Singapore station map for a real-time MRT crowd simulator in Unreal Engine 5.
      <br />
      <br />If you're hiring for real-time C++, simulation, engine or tools work, feel free to
      <router-link to="/contact">contact me</router-link>.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Resume-TohWeiXuan.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <a class="download-link" href="https://www.linkedin.com/in/wei-xuan-toh-091173436" target="_blank"><i class="fa fa-linkedin fa-lg fa-fw"></i> View on LinkedIn</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Experience</h2>

      <h3>Air Force Engineer (Electrical Instruments) - Republic of Singapore Air Force (RSAF)</h3>
      <h4>Aug 2019 - Aug 2023, Singapore</h4>

      <ul>
        <li>Helped build a wire-testing kit that cut an F-16 wiring check from 2&ndash;3 people and up to 3 hours to 1 person in about 1.5 hours.</li>
        <li>Maintained electrical and instrument systems on F-16 fighter aircraft for 4 years, tracing faults through systematic troubleshooting and closing each one to technical procedure.</li>
        <li>Led maintenance teams of 3&ndash;4 against aircraft serviceability targets, using quality-control checks to reduce human-factor errors.</li>
      </ul>

      <h2>Projects</h2>

      <h3>CROWDCRUSH - Simulation Programmer</h3>
      <h4>GAM 300, team of 7, Sep 2026 - present</h4>

      <ul>
        <li>Built the station map for a real-time Mass Rapid Transit (MRT) crowd simulator: all of Singapore from OpenStreetMap, streamed in tiles on background threads from 8 regional SQLite databases, with markers for all 238 stations. It draws 30,800 road segments and 2,100 buildings for about 3 ms a frame.</li>
        <li>Built a one-way throughput counter (people per minute) for Mass Entity agents, which have no collision. After a gantry that blocked navigation and a per-frame check of every agent against every plane, I moved to pooled proxy spheres for agents near a plane only, for performance.</li>
        <li>Built clickable station markers that open each station's crowd simulation, a top-down pan/zoom map camera, and a Back to Map flow with an unsaved-changes prompt.</li>
      </ul>

      <div class="tech-stack">Unreal Engine 5, C++, Mass Entity, SQLite, OpenStreetMap</div>

      <h3>Soot &amp; Scoot - Engine Champion</h3>
      <h4>GAM 200/250, team of 8, Sep 2025 - Apr 2026</h4>

      <ul>
        <li>Owned the core of the team's custom real-time C++/OpenGL engine as its top committer (472 of 1,454 commits in Git): designed the Entity Component System (ECS), engine loop, window manager and event manager, and made 34 of the 50 CMake build changes.</li>
        <li>Gave all 25 component types in the ImGui level editor undo/redo with one generic command that snapshots components as JSON through RTTR runtime reflection, instead of undo code per component. Also built scene serialization, hot-reloading prefabs and a tilemap editor.</li>
        <li>Built navigation for up to 11 roombas on a 55&times;31 tile grid: replaced a breadcrumb trail that stuttered when retraced with A* pathfinding, plus context steering over 8 directions for local obstacle avoidance, with line-of-sight detection driving patrol, look-around, chase and return states.</li>
        <li>Built a particle system (continuous, burst and trail emitters), an MPEG video player with audio synced through FMOD for 2 cutscenes, and Lua scripting through sol2 for player movement and the pause menu.</li>
      </ul>

      <div class="tech-stack">C++, OpenGL, ECS, ImGui, RTTR, Lua (sol2), FMOD, CMake</div>

      <h3>Dwarf Mayhem: Into the Depths - Gameplay Programmer</h3>
      <h4>CSD1451, team of 5, Jan - Mar 2025</h4>

      <ul>
        <li>Owned player mining on a pixel-based cellular simulation in C++. Line-traced cell selection and a highlighting smart cursor let players dig the exact cells they aim at, and the mining area scales with upgrades.</li>
        <li>Built the inventory, inventory scene and shop scene that close the dig &rarr; sell &rarr; upgrade loop, with 4 purchasable upgrades, plus heat damage that scales with depth and is absorbed by heat armor.</li>
      </ul>

      <div class="tech-stack">C++, Alpha Engine, cellular automata</div>

      <h3>Portal Mayhem - Weapons Programmer</h3>
      <h4>CSD1401, team of 5, Sep - Nov 2024</h4>

      <ul>
        <li>Main author of the weapon system in plain C with no engine: 4 weapons (portal gun, pistol, grenade launcher, disk launcher) with weapon switching, and projectile lifetimes managed through a shared entity array.</li>
        <li>Implemented teleportation between 2 linked portals that carries the player's angle and velocity through the exit portal, and made projectiles portal-aware: grenades bounce off tiles and explode on a timer, and disks split in 2 after teleporting.</li>
      </ul>

      <div class="tech-stack">C, CProcessing</div>

      <h2>Education</h2>

      <h3>Singapore Institute of Technology</h3>
      <h4>Bachelor of Science (Honours) in Computer Science in Real-Time Interactive Simulation, Sep 2024 - Aug 2028 (expected)</h4>

      <h2>Skills</h2>

      <div class="skill-set">
        <h3>Languages</h3>
        <div>C++</div>
        <div>C</div>
        <div>Lua</div>
        <div>SQL (SQLite)</div>
      </div>

      <div class="skill-set">
        <h3>Engines &amp; libraries</h3>
        <div>Unreal Engine 5</div>
        <div>Mass Entity</div>
        <div>OpenGL</div>
        <div>ImGui</div>
        <div>RTTR</div>
        <div>sol2</div>
        <div>FMOD</div>
      </div>

      <div class="skill-set">
        <h3>Methods</h3>
        <div>Entity Component System</div>
        <div>Event-Driven Architecture</div>
        <div>Reflection &amp; Serialization</div>
        <div>A* Pathfinding</div>
        <div>Steering Behaviours</div>
        <div>Multithreading</div>
      </div>

      <div class="skill-set">
        <h3>Tools</h3>
        <div>Git</div>
        <div>CMake</div>
      </div>

      <div class="skill-set">
        <h3>Spoken languages</h3>
        <div>English (Fluent)</div>
        <div>Chinese (Native)</div>
      </div>
      <div style="clear:both" />
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
