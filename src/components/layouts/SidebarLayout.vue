<template>
  <v-app id="inspire">

    <v-system-bar app>
      <nav class="sidebar-layout__nav ml-auto">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/d2-game">D2-Game</router-link> |
        <router-link to="/todo-app">Todo-App</router-link>
      </nav>

      <v-spacer></v-spacer>

      <v-icon>mdi-square</v-icon>

      <v-icon>mdi-circle</v-icon>

      <v-icon>mdi-triangle</v-icon>
    </v-system-bar>

    <v-navigation-drawer
        v-model="drawer"
        app
    >
      <v-sheet class="pa-4 main-bg-color">
        <div>
          <h2 class="app-name">Todo App</h2>
        </div>
      </v-sheet>

      <v-divider></v-divider>

      <v-list class="list-day">
        <v-list-item
            v-for="day in days"
            :key="day.id"
            link
            @click="getWorkList(day.id)"
        >
          <v-list-item-icon>
            <v-icon>{{ day.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ day.name }}</v-list-item-title>
          </v-list-item-content>

          <v-icon color="primary">mdi-pencil</v-icon>
          <v-icon color="red darken-3">mdi-delete</v-icon>
        </v-list-item>
      </v-list>

      <create-day-form />
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>
    </v-app-bar>

    <v-main class="pa-0" style="background-color: #c0c8d0">
      <slot/>
    </v-main>
  </v-app>
</template>

<script>
import CreateDayForm from "@/components/dialog_forms/CreateDayForm";
export default {
  name: "SidebarLayout",
  components: {CreateDayForm},
  data: () => ({
    drawer: null,
    days: [],
    dayIdSelected: 1
  }),
  methods: {
    defineDays() {
      for (let i = 0; i < 0; i++) {
        this.days.push({
          id: i + 1,
          icon: 'mdi-calendar-clock',
          name: i + 1 + '/4/2022'
        });
      }
      return this.days;
    },
    getWorkList(dayId) {
      this.dayIdSelected = dayId;
      this.$store.commit('setDayId', this.dayIdSelected);
    }
  },
  mounted() {
    this.defineDays();
  }
}
</script>

<style scoped lang="scss">

.main-bg-color {
  background-color: lightslategray;
}

.app-name {
  color: #fff;
}

.list-day {
  height: 80vh;
  overflow: auto;
}
</style>
