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
          @taskDone="taskDone"
      ></DailyTasks>
    </v-main>
  </v-app>
</template>

<script>
import DailyTasks from './components/DailyTasks';
// const { tasks } = require('../api/data/seed-data.json');
const axios = require('axios');
const url = require('./config').API_URL;

export default {
  name: 'App',

  components: {
    DailyTasks,
  },
  mounted() {
    // axios.get('http://localhost:4000').then(response => (this.tasks = response.data))
    this.tasks = this.getTasks();
  },
  data: () => ({
    tasksDue : 0,
    tasksLoaded: false
  }),
  computed: {

  },
  methods: {
    getTasksDue: (tasksToCount) => {

      const count = tasksToCount.filter(item =>
          {
            return !item.completed;
        // console.log("hasrem " + hasrem + " notdone "+notdone)
            // return hasrem && notdone;
              }).length;
      console.log('count ' + count);
      return count;


      // console.log('in gettasksDUE');
      // if(tasksToCount !== null){
      //   return tasksToCount.length;
      // }
      // return 0;
    },
    async getTasks() {
      try {
        console.log("in gettasks");
        // const url = `https://api.nytimes.com/svc/topstories/v2/${this.section}.json?api-key=${api}`
        // const url = process.env.API_URL;
        console.log("url: "+ url);
        const response = await axios.get(url)
        const results = response.data
        this.tasks = results;
        console.log("results ");
        console.dir(results);

        console.log("tasks ");
        console.dir(this.tasks);

        this.tasksLoaded = true;

        this.tasksDue =  this.getTasksDue(results);

        return results;
        // this.posts = results.map(post => ({
        //   title: post.title,
        //   abstract: post.abstract,
        //   url: post.url,
        //   thumbnail: this.extractImage(post).url,
        //   caption: this.extractImage(post).caption,
        //   byline: post.byline,
        //   published_date: post.published_date,
        // }))
      } catch (err) {
        if (err.response) {
          // client received an error response (5xx, 4xx)
          console.log("Server Error:", err)
        } else if (err.request) {
          // client never received a response, or request never left
          console.log("Network Error:", err)
        } else {
          console.log("Client Error:", err)
        }
      }
    },
    taskDone(index) {
      console.log('In taskDone root');
      if(this.tasks) {
        this.tasks.forEach((item) => {
          if(item.index === index) {
            item.completed = true;
          }
        });
      }
    }
  }
};
</script>
