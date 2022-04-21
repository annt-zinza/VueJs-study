<template>
  <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="add-work-area">
        <v-btn
            class="mr-5 mt-3 add-work-button"
            v-bind="attrs"
            v-on="on"
        >
          <v-icon>mdi-plus-box</v-icon>
          Thêm mới
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Thêm mới công việc</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
                cols="12"
            >
              <v-text-field
                  label="Tên công việc"
                  required
              ></v-text-field>
            </v-col>
            <v-col
                cols="11"
                sm="5"
            >
              <v-menu
                  ref="menu"
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  :return-value.sync="time"
                  transition="scale-transition"
                  offset-y
                  max-width="290px"
                  min-width="290px"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="time"
                      label="Chọn thời gian"
                      prepend-icon="mdi-clock-time-four-outline"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-time-picker
                    v-if="menu2"
                    v-model="time"
                    format="24hr"
                    full-width
                    @click:minute="$refs.menu.save(time)"
                ></v-time-picker>
              </v-menu>
            </v-col>
            <v-spacer></v-spacer>
            <v-col
                cols="12"
            >
              <v-textarea
                  outlined
                  name="input-7-4"
                  label="Ghi chú"
                  value="Ghi chú cho ngày đó."
              ></v-textarea>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
        >
          Close
        </v-btn>
        <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "CreateWorkForm",
  data: () => ({
    dialog: false,
    time: null,
    menu2: false,
  }),
}
</script>

<style scoped lang="scss">
.add-work-area {
  .add-work-button {
    background-color: #4caf50;
    color: #fff;

    i.v-icon {
      color: #fff;
      font-size: 30px;
    }

    &:hover {
      background-color: #10c217;
    }
  }
}
</style>
