<template>
  <v-app>
    <NavIn msg="Welcome to Your Vue.js App" />
    <v-main>
      <storepost></storepost>
    </v-main>
  </v-app>
</template>
<script>
// @ is an alias to /src
import NavIn from "@/components/NavIn.vue";
import storepost from "@/components/storepost.vue";

export default {
  name: "Home",
  components: {
    NavIn,
    storepost
  }
};
</script>
