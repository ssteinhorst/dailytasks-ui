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
      <DailyTasks :tasks=tasks></DailyTasks>
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
        let hasrem = item.reminder !== null;
        let notdone = !item.status;
        return hasrem && notdone;
      }).length;
      return count;
    }
  },
};
</script>
