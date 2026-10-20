<template>
  <div style="margin-bottom: 80px;">
    <h1>Hello!</h1>

    <div class="paragraph">
      <div>
        I'm <strong>Toh Wei Xuan</strong>, a Computer Science student specializing in <strong>Real-Time Interactive Simulation</strong> at the Singapore Institute of Technology.<br/>
        I enjoy building game systems in C++, from engine architecture and ECS to enemy AI, pathfinding and tools.
        Most recently I was the Engine Champion on <router-link to="/projects">Soot &amp; Scoot</router-link>, a stealth game built on our team's own C++/OpenGL engine.
      </div>

      <div style="margin-top: 20px;">
        Before university, I spent four years as an <strong>Air Force Engineer</strong> with the Republic of Singapore Air Force, keeping fighter aircraft serviceable.
        That work taught me systematic troubleshooting, quality control and how to lead a team when reliability matters.
      </div>

      <div style="margin-top: 20px;">Take a look at my <router-link to="/projects">projects</router-link> or my <router-link to="/resume">resume</router-link>.</div>

      <div style="margin-top: 40px;">I'm <strong>open to opportunities</strong> in game and software development. You can reach me at <a href="mailto:2401687@sit.singaporetech.edu.sg">2401687@sit.singaporetech.edu.sg</a> or <router-link to="/contact">through here</router-link>.</div>
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped>
.paragraph {
  max-width: 700px;
  margin-bottom: 20px;
}

@media only screen and (min-width: 620px){
  .paragraph {
    float: left;
  }
}

</style>
