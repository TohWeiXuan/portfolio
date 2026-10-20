<template>
  <div class="header">
    <div class="nav-bar">
      <router-link to="/">About me</router-link>
      <router-link to="/projects">Projects</router-link>
      <router-link to="/resume">Resume</router-link>
      <router-link to="/contact">Contact</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Header",
  //   props: {
  //     msg: String,
  //   },
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.header {
  width: 100%;
}

.nav-bar {
  text-align: right;
  padding: 20px;
  line-height: 3em;
}

a {
  font-family: @headingFont;
  font-weight: 500;
  font-size: 1.2em;
  letter-spacing: 0.02em;
  color: @textColor;
  text-decoration: none;
  margin-left: 15px;
  margin-right: 15px;
  padding-bottom: 4px;
  border-bottom: 3px solid transparent;
  line-height: 1.4;
  white-space: nowrap;
  display: inline-block;
}

a:hover {
  border-bottom-color: @mutedTextColor;
}

.router-link-exact-active,
.router-link-exact-active:hover {
  border-bottom-color: @accentColor;
}

@media only screen and (max-width: 620px){
  .nav-bar {
    line-height: 2em;
  }

  .nav-bar {
    text-align: left;
    padding: 16px 16px 8px;
  }

  a {
    margin-left: 0px;
    margin-right: 16px;
  }
}

</style>
