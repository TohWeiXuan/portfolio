<template>
  <div>

    <h1>Get in touch</h1>

    <div class="intro">I'm open to software engineering opportunities. Email me about a role or a project, or to ask how something I built works.</div>

    <ul>
      <li>
        <i class="fa fa-envelope-o fa-lg fa-fw"></i>
        <a href="mailto:2401687@sit.singaporetech.edu.sg" target="_blank">2401687@sit.singaporetech.edu.sg</a>
      </li>
      <li>
        <i class="fa fa-github fa-lg fa-fw"></i>
        <a href="https://github.com/TohWeiXuan" target="_blank">github.com/TohWeiXuan</a>
      </li>
      <li>
        <i class="fa fa-map-marker fa-lg fa-fw"></i>
        Singapore
      </li>
    </ul>

  </div>
</template>

<style scoped lang="less">

@import '../css/variables.less';

.intro {
  max-width: 68ch;
  margin-bottom: 40px;
}

i {
  color: @mutedTextColor;
}

ul {
  list-style: none;
  padding-inline-start: 0px;
}

li {
    line-height: 1.8em;
    font-size: 1.2em;
  }

@media only screen and (min-width: 620px){
  ul {
    padding-inline-start: 0px;
  }

  li {
    line-height: 2em;
    font-size: 1.4em;
  }
}

i {
  margin-right: 20px;
}
</style>
