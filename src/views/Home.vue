<template>
  <div>1</div>
  <div>2</div>
  <div>3</div>
  <div>4</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>

<style scoped>
div{
  float: left;
  width: 1.875rem;
  height: 1.875rem;
  background: green;
}
</style>
