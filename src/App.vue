<template>
  <div id="app">

    <link rel="stylesheet" href="@/assets/projects/projects.css" type="text/css">

    <Header />
    <div class="main">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import Helpers from './helpers';

export default Vue.extend({
  name: 'App',
  components: {
    Header, Footer
  }
});

// Preload heavy images or gifs that are used in other pages
Helpers.preloadImages([
  "img/projects/soot-and-scoot.jpg",
  "img/projects/dwarf-mayhem.jpg",
  "img/projects/portal-mayhem.jpg"
]);

</script>

<style lang="less">

@import './css/projects.less';
@import './css/variables.less';

html, body {
  margin: 0px;
  background-color: @contentBgColor;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: @contentBgColor;
  color: @textColor;

  font-family: @bodyFont;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  font-size: 1.0625em;
  line-height: 1.6;
  text-align: left;
}

h1, h2, h3, h4, h5 {
  font-family: @headingFont;
  font-weight: 600;
  text-align: left;
}

a {
  color: @linkColor;
  text-decoration: underline;
  text-decoration-color: @accentColor;
  text-decoration-thickness: 2px;
  text-underline-offset: 3px;
}
a:hover {
  color: @textColor;
}

a:focus-visible, button:focus-visible {
  outline: 2px solid @linkColor;
  outline-offset: 3px;
}

::selection {
  background-color: @accentColor;
  color: @bodyBgColor;
}

h1 {
  font-size: 2.75em;
  line-height: 1;
  margin-top: 0.2em;
  margin-bottom: 32px;
}

.main {
    padding: 12px 16px;
  }

@media only screen and (min-width: 620px){

  h1 {
    font-size: 3.5em;
    margin-top: 0.4em;
    margin-bottom: 56px;
  }

  .main {
    padding: 0px 40px 40px 180px;
  }

  .main, .header, .footer-inner {
    width: 100%;
    box-sizing: border-box;
    max-width: 1200px;
    margin: 0 auto;
  }
}

.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.2s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}

@media (prefers-reduced-motion: reduce) {
  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0s;
  }
}

</style>
