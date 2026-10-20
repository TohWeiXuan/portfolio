<template>
  <div>
    <h1>Resume</h1>

    <div class="paragraph">
      I'm <strong>Toh Wei Xuan</strong>, a Computer Science student specializing in Real-Time Interactive Simulation, with experience in C++ game development, gameplay systems, AI behaviour and real-time simulation.
      <br />
      <br />Before university, I was an Air Force Engineer for four years in a high-reliability engineering environment, where I worked on troubleshooting, quality control, process improvement and team leadership.
      <br />
      <br />I bring strong problem-solving and technical skills, and experience working collaboratively on software projects. If you have an opportunity in mind, feel free to
      <router-link to="/contact">contact me</router-link>.

      <div style="margin-top:20px; margin-bottom:20px;">
        <a class="download-link" href="d/Resume-TohWeiXuan.pdf" target="_blank"><i class="fa fa-download fa-lg fa-fw"></i> Download as PDF</a>
        <div style="clear:both"></div>
      </div>
    </div>

    <div style="clear:both"></div>

    <div class="full-content">
      <h2>Projects</h2>

      <h3>Soot &amp; Scoot - Engine Champion</h3>
      <h4>GAM 200/250, team of 8, Sep 2025 - Apr 2026</h4>

      <ul>
        <li>Designed and refactored the engine's core Entity Component System (ECS), engine loop, window manager and event manager in C++.</li>
        <li>Built enemy AI using A* pathfinding on the tilemap with context steering for local obstacle avoidance, plus line-of-sight detection and patrol, look-around, chase and return states.</li>
        <li>Implemented scene serialization, a prefab system with hot-reload, a tilemap editor and generic RTTR-based undo/redo in the ImGui level editor.</li>
        <li>Developed a particle system (continuous, burst and trail emitters) and an MPEG video player with audio synced through FMOD for cutscenes.</li>
        <li>Integrated Lua scripting via sol2, and built the game's scene flow with controller support, fullscreen toggle and pause on focus loss.</li>
      </ul>

      <div class="tech-stack">C++, OpenGL, ECS, ImGui, RTTR, Lua (sol2), FMOD, CMake</div>

      <h3>Dwarf Mayhem: Into the Depths - Gameplay Programmer</h3>
      <h4>CSD1451, team of 5, Jan - Mar 2025</h4>

      <ul>
        <li>Implemented player mining on a pixel-based cellular simulation, with line-traced cell selection, a highlighting smart cursor and an upgradable mining area.</li>
        <li>Built the inventory system, inventory scene and shop scene for selling ores and buying upgrades (mining size, jetpack, heat armor, full heal).</li>
        <li>Designed depth-scaled heat damage absorbed by heat armor, with an armor bar and a depth indicator in the UI.</li>
      </ul>

      <div class="tech-stack">C++, Alpha Engine, cellular automata</div>

      <h3>Portal Mayhem - Weapons Programmer</h3>
      <h4>CSD1401, team of 5, Sep - Nov 2024</h4>

      <ul>
        <li>Led development of the weapon system in C, covering the portal gun, pistol, grenade launcher and disk launcher.</li>
        <li>Implemented portal shooting and player teleportation that carries angle and velocity through the exit portal, with a teleport cooldown.</li>
        <li>Built projectile behaviours including gravity-affected bouncing grenades, disks that split in two after passing through a portal, and area-damage explosions.</li>
        <li>Managed projectile lifetimes through a shared entity array, and implemented weapon switching and weapon sprite rendering in the game scene.</li>
      </ul>

      <div class="tech-stack">C, CProcessing</div>

      <h2>Work experience</h2>

      <h3>Air Force Engineer - Republic of Singapore Air Force (RSAF)</h3>
      <h4>August 2019 - August 2023, Singapore</h4>

      <ul>
        <li>Maintained the serviceability of fighter aircraft within a high-reliability engineering environment.</li>
        <li>Applied systematic troubleshooting and problem-solving to aircraft maintenance activities.</li>
        <li>Implemented new procedures and technologies that improved efficiency and streamlined operations.</li>
        <li>Led a team to achieve expected maintenance goals while reducing human-factor errors.</li>
        <li>Applied quality control, technical procedures and effective team communication to maintain operational standards.</li>
      </ul>

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

<style scoped>
h2 {
  font-weight: 100;
  font-size: 2em;
  margin: 0px;
  padding: 0px;
  padding-top: 50px;
}
h3 {
  font-weight: 100;
  font-size: 1.6em;
  margin: 0px;
  padding: 0px;
  padding-top: 30px;
}
h4 {
  font-weight: 100;
  font-size: 1.3em;
  margin: 0px;
  padding: 0px;
  padding-top: 15px;
  font-style: italic;
}

.paragraph {
  max-width: 700px;
}

.download-link {
  float:left;
  margin-right: 50px;
}

.full-content div, .full-content ul {
  max-width: 800px;
}

.skill-set h3 {
  padding-bottom: 10px;
}

.tech-stack {
  font-style: italic;
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
