<template>
  <div style="margin-bottom: 80px;">
    <h1 class="name">Toh Wei Xuan</h1>
    <div class="role">Computer Science student at SIT. Former aircraft engineer.</div>

    <div class="paragraph">
      <div>
        I build software in C++ and C, and I care most about the parts that have to hold up: system architecture, state management, tooling and debugging.
        I'm studying Computer Science (Real-Time Interactive Simulation) at the Singapore Institute of Technology.
      </div>

      <div style="margin-top: 20px;">
        On an eight-person team, I designed the Entity Component System and event system for our own C++ engine, wrote scene serialization and undo/redo for its editor,
        and implemented A* pathfinding. You can see this work on my <router-link to="/projects">projects</router-link> page.
      </div>

      <div style="margin-top: 20px;">
        Before university, I spent four years as an <strong>Air Force Engineer</strong> with the Republic of Singapore Air Force, keeping fighter aircraft serviceable.
        That work taught me systematic troubleshooting, quality control and how to lead a team when reliability matters.
      </div>

      <div style="margin-top: 40px;">
        I'm open to software engineering opportunities. Email me at <a href="mailto:2401687@sit.singaporetech.edu.sg">2401687@sit.singaporetech.edu.sg</a>,
        or read my <router-link to="/resume">resume</router-link> first.
      </div>
    </div>

    <div style="clear:both"></div>

  </div>
</template>

<style scoped lang="less">

@import '../css/variables.less';

h1.name {
  font-size: 3.4em;
  line-height: 0.95;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
}

.role {
  color: @mutedTextColor;
  font-size: 1.15em;
  margin-bottom: 40px;
}

.paragraph {
  max-width: 68ch;
  margin-bottom: 20px;
}

@media only screen and (min-width: 620px){
  h1.name {
    font-size: 7.5em;
  }

  .role {
    font-size: 1.3em;
    margin-bottom: 56px;
  }

  .paragraph {
    float: left;
  }
}

</style>
