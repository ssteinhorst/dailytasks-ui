<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">

      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Daily Tasks
        </h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <h2>Status</h2>
      </v-col>
      <v-col>
        <h2>Title</h2>
      </v-col>
      <v-col>
        <h2>Note</h2>
      </v-col>
      <v-col>
        <h2>Reminder</h2>
      </v-col>
    </v-row>
    <task
        v-for="task in this.tasks"
        :key="task.index"
        :task="task"
        @taskClicked="taskClicked"
    ></task>
  </v-container>
</template>

<script>
import Task from './Task';
  export default {
    name: 'DailyTasks',

    components: {
      Task,
    },
    props: {
      tasks: { type: Array }
    },
    data: () => ({
      // tasks: seeddata.tasks,
    }),
    methods: {
      taskClicked(data) {
        console.log("DailyTasks taskclicked with  index: "+ data.index);
        console.log("DailyTasks taskclicked with value: "+ data.value);
        this.$emit('taskClicked', data);
      }
    }
  }
</script>
