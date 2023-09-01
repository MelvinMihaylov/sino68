<template>
  <nav-bar />

  <router-view></router-view>

  <base-footer />
</template>

<script>
import NavBar from './components/NavBar.vue';
import HomeView from './views/HomeView.vue';
import BaseFooter from './components/BaseFooter.vue'

export default {
  components: {
    'HomeView': HomeView,
    'NavBar': NavBar,
    'BaseFooter': BaseFooter
  }
}
</script>
