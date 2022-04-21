<template>
  <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="add-day-area">
        <v-btn
            class="py-5 add-day-button"
            v-bind="attrs"
            v-on="on"
        >
          <v-icon class="mr-5">mdi-plus-box</v-icon>
          Thêm mới
        </v-btn>
      </div>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Thêm mới ngày</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col
                cols="12"
                sm="6"
                md="4"
            >
              <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                      v-model="date"
                      label="Chọn ngày"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                    v-model="date"
                    @input="menu2 = false"
                ></v-date-picker>
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
  name: "CreateDayForm",
  data: () => ({
    dialog: false,
    date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    menu: false,
    modal: false,
    menu2: false,
  }),
}
</script>

<style scoped lang="scss">
.add-day-area {
  background-color: lightslategray;
  height: 10.5vh;
  font-size: 24px;
  padding: 8px;

  .add-day-button {
    background-color: #4caf50;
    color: #fff;

    i.v-icon {
      color: #fff;
      font-size: 40px;
    }

    &:hover {
      background-color: #10c217;
    }
  }
}
</style>
