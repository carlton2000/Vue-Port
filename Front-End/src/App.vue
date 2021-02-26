<template>
    <div id="app">
      <h1>Vuetify</h1>
      <vue-particles 
      color="#dedede"
      :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      ></vue-particles>
    </div>
  
</template>
<script>
export default {
  name: "App"
};
</script>
<style scoped>
#app {
  background-image: url("https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg");
}
</style>
