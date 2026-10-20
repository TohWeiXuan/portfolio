<template>
  <div>
    <h1>Projects</h1>

    <div style="margin-bottom: 30px;">
      Here are some projects I've built or worked on as part of a team.
    </div>

    <ProjectsList v-bind:projects="projects" />

    <div style="margin-top: 20px;">
      There's more on my <a target="_blank" href="https://github.com/TohWeiXuan">GitHub</a>.
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ProjectsList from "@/components/ProjectsList.vue";
import projectsData from "@/data/ProjectsData.ts";

export default Vue.extend({
  name: "Projects",
  components: {
    ProjectsList,
  },
  data: function () {
    return {
      projects: projectsData,
    };
  },
});
</script>
