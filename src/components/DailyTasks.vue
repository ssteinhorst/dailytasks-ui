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
    <v-row v-for="task in this.tasks" :key="task.index">
      <v-col>
        <v-simple-checkbox
            v-model="task.completed"
            :label="task.title"
            v-ripple
        >{{ task.title }}</v-simple-checkbox>
      </v-col>
      <v-col>
        <div>
        {{ task.title }} title
        </div>
      </v-col>
      <v-col>
        {{ task.note }} note
      </v-col>
      <v-col>
        <div> {{ task.reminder }} </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

  export default {
    name: 'DailyTasks',
    props: {
      tasks: { type: Array }
    },
    data: () => ({
      // tasks: seeddata.tasks,
    }),
    methods: {
      taskDone(index) {
        this.$emit('taskDone', index);
      }
    }
  }
</script>
