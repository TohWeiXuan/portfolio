<template>
  <div class="footer">
    <div class="footer-inner">
      <div class="left"><a href="https://github.com/schouffy/gamedev-portfolio" target="blank">Portfolio</a> by schouffy</div>
      <div class="right">Reach me at <a href="mailto:toh.weixuan@gmail.com">toh.weixuan@gmail.com</a> or <router-link to="/contact">through here</router-link></div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer"
});
</script>

<style scoped lang="less">

@import '../css/variables.less';

.footer {
  background-color: @bodyBgColor;
  color: @mutedTextColor;
  width: 100%;
  font-size: 0.85em;
  margin-top: auto;
}

.footer-inner {
  padding-bottom: 30px;
  display: flow-root;
}

.left, .right {
    padding-top: 10px;
    text-align: center;
  }

@media only screen and (min-width: 620px){

  .footer-inner {
    padding: 0;
  }

  .left, .right {
    padding: 20px;
  }

  .left {
    float: left;
  }

  .right {
    float:right;
  }
}
</style>
