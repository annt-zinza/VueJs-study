<template>
  <v-container
      class="py-8 px-6"
      fluid
  >
    <v-row>
      <v-col cols="12"
      >
        <v-card>
          <div class="d-flex align-center justify-space-between work-list-header">
            <v-subheader>Todo List</v-subheader>
            <create-work-form />
          </div>
          <v-list>
            <template v-for="todo in todos">
              <v-list-item :key="todo.id">
                <div class="d-flex align-center justify-space-between todo-item">
                  <v-checkbox
                      v-model="todo.completed"
                      :label="`Checkbox 1: ${todo.title}`"
                  ></v-checkbox>
                  <div class="ml-auto todo-icon d-flex">
<!--                    <v-checkbox-->
<!--                        :on-icon="'mdi-star'"-->
<!--                        :off-icon="'mdi-star-outline'"-->
<!--                        v-model="todo.like"-->
<!--                        :label="`Checkbox 1: ${todo.like.toString()}`"-->
<!--                    ></v-checkbox>-->
                    <v-icon color="primary">mdi-pencil</v-icon>
                    <v-icon color="red darken-3">mdi-delete</v-icon>
                  </div>
                </div>
              </v-list-item>

              <v-divider
                  v-if="todo.id !== works.length"
                  :key="`divider-${todo.id}`"
              ></v-divider>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CreateWorkForm from "@/components/dialog_forms/CreateWorkForm";
import {mapState} from "vuex";
import axios from 'axios'

export default {
  name: "TodoAppContent",
  components: {CreateWorkForm},
  data () {
    return {
      todoList: [],
      works: [],
    }
  },
  computed: mapState({
    todos: state => state.todos
  }),
  methods: {
    defineTodoLists() {
    }
  },
  watch: {
    dayID: function () {
      this.works = this.todoList.filter(work => work.id === this.dayID)[0].works;
    }
  },
  mounted() {
    this.$store.dispatch('GET_TODOS')
  }
}
</script>

<style scoped lang="scss">
.todo-item {
  width: 100%;

  .v-input--checkbox::v-deep {
    i.v-icon {
      font-size: 32px;
    }
  }

  .todo-icon {
    cursor: pointer;

    i.v-icon {
      font-size: 30px;
    }
  }
}

.work-list-header {
  font-size: 24px;
}
</style>
