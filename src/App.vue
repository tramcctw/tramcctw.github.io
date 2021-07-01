<template>
  <router-view/>
  <div id="nav">
    <router-link to="/" class="router">Home</router-link>
    <router-link to="/about" class="router">About</router-link>
  </div>
</template>
<script>
export default {
  setup() {
    
  },
}
</script>
<style scoped>
.router{
  font-size: 0.32rem;
  margin: 1rem;
}
</style>
