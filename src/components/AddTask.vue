<template>
  <div class="outline">
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="5" >
          <v-text-field
              v-model="task.title"
              :rules="titleRules"
              label="Title"
              required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="5" >
          <v-text-field
              v-model="task.note"
              :rules="noteRules"
              label="Note (optional)"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="5" >
          <v-select
              v-model="task.reminder"
              class="t 50"
              :items="reminders"
              label="Reminder"
          ></v-select>
        </v-col>
        <v-col cols="6" md="5" >
          <v-btn
              elevation="2"
              @click="saveTask"
          >Save</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    task: {
      title: 'Sample Title',
      note: 'Sample note',
      reminder: '9AM',
      completed: false,
      userId: 'some kind of thing',
      owner: 'clown',
    },
    reminders: ['9AM', 'Noon', '3PM', '9PM', 'Midnight'],
    titleRules: [
      v => !!v || 'Title is required',
      // v => v.length <= 10 || 'Name must be less than 10 characters',
    ],
    noteRules: [],
    // email: '',
    // emailRules: [
    //   v => !!v || 'E-mail is required',
    //   v => /.+@.+/.test(v) || 'E-mail must be valid',
    // ],
  }),
  methods: {
    saveTask() {
      console.log('--this.task: ', this.task);

      this.$emit('taskAdded', this.task);
    },
  }
}
</script>
<style>
.outline {
  outline: 0.01em solid black
}
</style>