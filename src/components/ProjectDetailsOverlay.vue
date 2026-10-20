<template>
  <transition name="fade">
    <div v-if="visible">
      <div class="overlay">
      </div>
      <div class="dialog" :style="{ 'background-color': color }">
        <h1 class="dialog-title">{{ title }}</h1>
        <button type="button" @click="$emit('close')" class="dialog-close" aria-label="Close"><i class="fa fa-times fa-lg fa-fw"></i></button>
        <div class="dialog-content">
          <div v-html="htmlContent"></div>
          <div class="dialog-bottom">
          <button type="button" @click="$emit('close')" class="dialog-close-button">Close</button>
        </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ProjectDetailsOverlay",
  props: {
    visible: Boolean,
    color: String,
    title: String,
    htmlContent: String,
  },
  methods: {
    getImage: function(url: string) {
      console.log("fetching image " + url);
    }
  }
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.overlay {
  background-color: fade(@bodyBgColor, 85%);
  z-index: 10;
  position:fixed;
  top:0px;
  left:0px;
  right:0px;
  bottom: 0px;
}

.dialog {
  position:absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 11;
  margin: 20px;
  color:white;
}

iframe {
  width: 100%;
}

h1.dialog-title {
    font-size: 1.8em;
    line-height: 1.1;
    margin: 0px;
    padding: 20px 64px 20px 20px;
}

.dialog-content {
  padding: 20px;
  background-color: @contentBgColor;
  color: @textColor;
  border-bottom: 4px solid @accentColor;
}

button {
  font: inherit;
  cursor: pointer;
}

.dialog-close {
  position: absolute;
  top: 16px;
  right: 16px;
  padding: 8px;
  background: none;
  border: none;
  color: white;
}
.dialog-close:hover {
  opacity: 0.7;
}
.dialog-close:focus-visible {
  outline: 2px solid white;
  outline-offset: 2px;
}

.dialog-bottom {
  text-align: center;
}

.dialog-close-button {
  font-family: @headingFont;
  font-weight: 600;
  font-size: 1.2em;
  color: @textColor;
  background: none;
  border: 2px solid @textColor;
  padding: 6px 28px;
  margin: 0 auto;
}
.dialog-close-button:hover {
  background-color: @textColor;
  color: @contentBgColor;
}

@media only screen and (min-width: 620px){
  .dialog {
    margin: 0 auto;
    margin-top: 80px;
    margin-bottom: 40px;
    max-width: 1000px;
  }

  h1.dialog-title {
    font-size: 2.4em;
    padding: 24px 72px 24px 40px;
  }

  .dialog-content {
    padding: 40px;
  }
}


</style>
