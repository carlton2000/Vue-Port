<template>
  <v-sheet
   height="1000" 
   class="overflow-hidden"
   style="position: relative;">

    <!-- <v-container class="fill-height">
      <v-row align="center" justify="center">
        <v-btn color="blue" dark @click.stop="drawer = !drawer">
          Hire Me NOW
        </v-btn>
      </v-row>
    </v-container> -->

        <v-row
      align="center"
      justify="center"
    >
      <v-col
        class="text-center"
        cols="12"
      >
        <h1 class="display-1 font-weight-thin mb-4">
          Vuetify
        </h1>
        <h4 class="subheading">
          Build your application today!
        </h4>
      </v-col>
    </v-row>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>Carlton Visagie</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
        { title: "Skills", icon: "mdi-view-dashboard" },
        { title: "Education", icon: "mdi-forum" },
        { title: "Projects", icon: "mdi-forum" },
        { title: "Contact Me", icon: "mdi-forum" }
      ]
    };
  }
};
</script>

