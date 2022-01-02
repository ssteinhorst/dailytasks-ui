<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-badge
            color="green"
            :content="tasksDue"
            :value="tasksDue"
        >
          Reminders
        </v-badge>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="localhost"
        target="_blank"
        text
      >
        <span class="mr-2">Empty Link</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <DailyTasks :tasks=tasks @taskDone="taskDone" ></DailyTasks>
    </v-main>
  </v-app>
</template>

<script>
import DailyTasks from './components/DailyTasks';
const { tasks } = require('./seed-data.json');

export default {
  name: 'App',

  components: {
    DailyTasks,
  },

  data: () => ({
    tasks: tasks
  }),
  computed: {
    tasksDue: () => {
      const count = tasks.filter(item =>
      {
        return !item.completed;
        // console.log("hasrem " + hasrem + " notdone "+notdone)
        // return hasrem && notdone;
      }).length;
      console.log('count ' + count);
      return count;
    },
    remindersDue: () => {
      const count = tasks.filter(item =>
      {
        let hasrem = item.reminder !== null;
        let notdone = !item.completed;
        console.log("hasrem " + hasrem + " notdone "+notdone)
        return hasrem && notdone;
      }).length;
      console.log('count ' + count);
      return count + 1;
    }
  },
  methods: {
    taskDone(index) {
      this.tasks.forEach((item) => {
        if(item.index === index) {
          item.completed = true;
        }
      });
    }
  }
};
</script>
