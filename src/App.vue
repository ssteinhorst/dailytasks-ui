<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-badge
            v-if="tasksLoaded"
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
      <DailyTasks
          v-if="tasksLoaded"
          :tasks="this.tasks"
          @taskClicked="taskClicked"
      ></DailyTasks>
    </v-main>
  </v-app>
</template>

<script>
import DailyTasks from './components/DailyTasks';
const axios = require('axios');
const url = require('./config').API_URL;

export default {
  name: 'App',

  components: {
    DailyTasks,
  },
  mounted() {
    this.tasks = this.getAllTasks();
  },
  data: () => ({
    tasksDue : 0,
    tasksLoaded: false,
    tasks: null
  }),
  computed: {
    getTasksDue: (tasksToCount) => {
      const count = tasksToCount.filter(item =>
      {
        return !item.completed;
      }).length;
      console.log('count ' + count);
      return count;
    },
  },
  methods: {
    async getAllTasks() {
      try {
        const response = await axios.get(url);
        this.tasks = response.data;
        this.tasksLoaded = true;
        this.tasksDue =  this.getTasksDue(response.data);
      } catch (err) {
        console.log("API Error:", err);
      }
    },
    taskClicked(values) {
      console.log('In base taskClicked');
      if(this.tasks) {
        axios.patch(url, values).then((req, res) => {
          console.log('adjusting values in dom');
          console.dir(this.tasks);
          this.tasks[values.index].completed = values.value;
          console.dir(this.tasks);

        });
      }
    }
  }
};
</script>
