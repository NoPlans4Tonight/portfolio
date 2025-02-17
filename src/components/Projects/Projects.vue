<template>
  <div class="project">
    <slot />
  </div>
</template>

<script>
import Buehler from "./Buehler.vue";
import Foxtrot from "./Foxtrot.vue";
import InsideRealEstate from "./InsideRealEstate.vue";
import Whisker from "./Whisker.vue";

export default {
  name: "Project1",
  components: {
    Buehler,
    Foxtrot,
    Whisker,
    InsideRealEstate,
  },
  data() {
    return {
      projectComponents: [
        { id: 1, name: "Buehler" },
        { id: 2, name: "Foxtrot" },
        { id: 3, name: "InsideRealEstate" },
        { id: 4, name: "Whisker" },
      ],
    };
  },
  methods: {
    getComponent(name) {
      return this.$options.components[name];
    },
  },
};
</script>

<style scoped>
.project {
  margin: 20px 0;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
</style>
