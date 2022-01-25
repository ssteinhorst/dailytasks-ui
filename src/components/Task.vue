<template>
  <div>
    <v-row>
      <v-col>
        <v-simple-checkbox
            v-model="task.completed"
            :label="task.title"
            @input="taskClicked"
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
  </div>
</template>

<script>

export default {
  name: 'Task',
  props: {
    task: { type: Object }
  },
  data: () => ({
  }),
  methods: {
    taskClicked(value) {
      // console.log("in Task.vue");
      // console.log("Running taskClicked with index: " + value);
      // console.log({value:value, index:this.task.index});
      // console.log("leaving Task.vue");

      this.$emit('taskClicked', {value:value, index:this.task.index});
    }
  }
}
</script>
